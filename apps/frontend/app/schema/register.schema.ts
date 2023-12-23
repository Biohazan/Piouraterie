import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Nom requis').max(30),
    surname: z.string().min(2, 'Prénom requis').max(30),
    email: z
      .string()
      .email('Email invalide')
      .min(1, 'Une adresse mail est requise'),
    password: z
      .string()
      .min(1, 'Mot de passe requis')
      .min(8, 'Le mot de passe doit avoir minimum 8 caractères'),
    confirmPassword: z
      .string()
      .min(1, 'Mot de passe requis')
      .min(8, 'Le mot de passe doit avoir minimum 8 caractères'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Les mots de passe ne correspondent pas',
  })

export type RegisterSchemaType = z.infer<typeof registerSchema>
