import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email('Adresse mail non valide')
    .min(1, 'Une adresse mail est requise'),
  password: z
    .string()
    .min(1, 'Mot de passe requis')
    .min(8, 'Le mot de passe doit avoir minimum 8 caractères'),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
