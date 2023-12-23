import { AuthOptions, getServerSession } from 'next-auth'
import { env } from './env'

import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt'

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(env.BACKEND_URL + '/auth/refresh', {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  })
  
  const response = await res.json()
  console.log('refreshed', response)

  return {
    ...token,
    backendTokens: response,
  }
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  jwt: {
    secret: env.JWTSECRETKEY,
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
        },
        password: { label: 'Password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null
        const { username, password } = credentials
        const res = await fetch(env.BACKEND_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (res.status === 401) {
          console.log('res401', res.statusText)
          return null
        }
        const user = await res.json()
        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user }
      if (new Date().getTime() < token.backendTokens.expiresIn) {
        return token
      }

      return await refreshToken(token)
    },

    async session({ token, session }) {
      session.user = token.user
      session.backendTokens = token.backendTokens
      return session
    },
  },
}

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions)
  return session
}
