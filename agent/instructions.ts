import { defineInstructions } from "eve/instructions";
import { instructions } from "./lib/prompts/index.js";

export default defineInstructions({
  markdown: instructions,
});