import { z } from 'zod';

export const AnswerFormSchema = z.object({
  yourAnswer: z
    .string()
    .min(8, {
      message: 'Answer must be at least 8 characters.',
    })
    .max(1600, {
      message: 'Answer must not be longer than 1600 characters.',
    }),
});

export type AnswerFormData = z.infer<typeof AnswerFormSchema>;
