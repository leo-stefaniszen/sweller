import type { KnowledgeLevel } from "../models/learning.js";

export type BuildLearningPathInput = {
  topic: string;
  level: KnowledgeLevel;
  confidence: number;
  prerequisites: string[];
};

export type BuildLearningPathResult = {
  topic: string;
  level: KnowledgeLevel;
  confidence: number;
  prerequisites: string[];
  steps: Array<{
    title: string;
    description: string;
    done: boolean;
  }>;
  todos: string[];
};

export function buildLearningPath(input: BuildLearningPathInput): BuildLearningPathResult {
  const steps: BuildLearningPathResult["steps"] = [];

  if (input.prerequisites.length > 0) {
    steps.push({
      title: "Check prerequisites",
      description: `Before touching ${input.topic}, make sure these are clear: ${input.prerequisites.join(", ")}.`,
      done: false,
    });
  }

  steps.push({
    title: "Core idea",
    description: `Get the gist of ${input.topic} in one sentence.`,
    done: false,
  });

  if (input.level === "beginner") {
    steps.push({
      title: "Tiny example",
      description: "Explain it with one small example. No circus, no extra drama.",
      done: false,
    });
  }

  steps.push({
    title: "Recall check",
    description: "Ask one short question to see if the idea stuck.",
    done: false,
  });

  return {
    topic: input.topic,
    level: input.level,
    confidence: input.confidence,
    prerequisites: input.prerequisites,
    steps,
    todos: [
      "No meter todo junto de una.",
      "Separar primero la idea central.",
      "Volver a explicar si el usuario se pierde.",
    ],
  };
}