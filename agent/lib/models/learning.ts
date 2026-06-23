import { z } from "zod";

export const knowledgeLevelSchema = z.enum(["beginner", "intermediate", "advanced"]);
export type KnowledgeLevel = z.infer<typeof knowledgeLevelSchema>;

export const estimateLevelInputSchema = z.object({
  topic: z.string().min(1),
  userText: z.string().optional(),
  hints: z.array(z.string()).default([]),
});

export const learningStepSchema = z.object({
  title: z.string(),
  description: z.string(),
  done: z.boolean().default(false),
});

export const learningPathSchema = z.object({
  topic: z.string(),
  level: knowledgeLevelSchema,
  confidence: z.number().min(0).max(1),
  prerequisites: z.array(z.string()),
  steps: z.array(learningStepSchema),
  todos: z.array(z.string()),
});

export const understandingCheckInputSchema = z.object({
  topic: z.string().min(1),
  level: knowledgeLevelSchema,
  userText: z.string().optional(),
});

export const understandingCheckOutputSchema = z.object({
  question: z.string(),
  whyThisQuestion: z.string(),
  expectedSignal: z.string(),
});