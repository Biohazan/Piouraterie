import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    EMAIL_SERVER_HOST: z.string().min(1),
    EMAIL_SERVER_PORT: z.string().min(1),
    EMAIL_SERVER_USER: z.string().min(1),
    EMAIL_SERVER_PASSWORD: z.string().min(1),
    EMAIL_FROM: z.string().min(1),
    MONGODB_URI: z.string().min(1),
    BACKEND_URL: z.string(),
    JWTSECRETKEY: z.string(),
  },
  client: {
    // NEXT_PUBLIC_URL: z.string().min(1),
  },
  runtimeEnv: {
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM,
    MONGODB_URI: process.env.MONGODB_URI,
    BACKEND_URL: process.env.NEXT_PUBLIC_URL,
    JWTSECRETKEY: process.env.JWTSECRETKEY
  },
})
