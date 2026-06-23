import { defineTool } from "eve/tools";
import { z } from "zod";
import { knowledgeLevelSchema, learningPathSchema } from "../lib/models/learning.js";
import { buildLearningPath } from "../lib/learning/build-learning-path.js";

export default defineTool({
  description: "Build a small learning path from a topic and a level.",
  inputSchema: z.object({
    topic: z.string().min(1),
    level: knowledgeLevelSchema,
    confidence: z.number().min(0).max(1).default(0.5),
    prerequisites: z.array(z.string()).default([]),
  }),
  async execute(input) {
    return buildLearningPath({
      topic: input.topic,
      level: input.level,
      confidence: input.confidence,
      prerequisites: input.prerequisites,
    });
  },
});