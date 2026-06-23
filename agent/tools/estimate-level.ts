import { defineTool } from "eve/tools";
import { z } from "zod";
import { estimateLevelInputSchema } from "../lib/models/learning.js";
import { estimateKnowledgeLevel } from "../lib/cognition/estimate-level.js";

export default defineTool({
  description: "Estimate the user's knowledge level for a topic.",
  inputSchema: estimateLevelInputSchema,
  async execute(input) {
    // solo una primera lectura útil
    return estimateKnowledgeLevel({
      topic: input.topic,
      userText: input.userText,
      hints: input.hints,
    });
  },
});

// TODO: Muy mejorable