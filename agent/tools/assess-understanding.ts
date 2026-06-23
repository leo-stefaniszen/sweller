import { defineTool } from "eve/tools";
import { z } from "zod";
import { understandingCheckInputSchema } from "../lib/models/learning.js";
import { assessUnderstanding } from "../lib/learning/assess-understanding.js";

export default defineTool({
  description: "Create a short understanding check question.",
  inputSchema: understandingCheckInputSchema,
  async execute(input) {
    return assessUnderstanding({
      topic: input.topic,
      level: input.level,
      userText: input.userText,
    });
  },
});