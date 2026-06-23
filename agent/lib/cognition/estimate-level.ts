import type { KnowledgeLevel } from "../models/learning.js";

export type EstimateLevelInput = {
  topic: string;
  userText?: string;
  hints: string[];
};

export type EstimateLevelResult = {
  level: KnowledgeLevel;
  confidence: number;
  reasons: string[];
};

export function estimateKnowledgeLevel(input: EstimateLevelInput): EstimateLevelResult {
  const text = `${input.topic} ${input.userText ?? ""} ${input.hints.join(" ")}`.toLowerCase();

  let score = 0;
  const reasons: string[] = [];

  if (/\b(i know|i already know|advanced|deep dive|implementation)\b/.test(text)) {
    score += 2;
    reasons.push("El texto sugiere que ya hay base previa.");
  }

  if (/\b(explain|what is|beginner|basic|from scratch)\b/.test(text)) {
    score -= 2;
    reasons.push("Pide una explicación básica o desde cero.");
  }

  if (/\b(cmp|heap|recursion|pointer|derivative|database|api)\b/.test(text)) {
    score += 1;
    reasons.push("Hay términos técnicos que ya empujan el nivel hacia arriba.");
  }

  if (input.hints.length > 0) {
    score += 1;
    reasons.push("Hay pistas extra, así que no estoy tirando fruta.");
  }

  let level: KnowledgeLevel = "intermediate";
  if (score <= -1) level = "beginner";
  if (score >= 2) level = "advanced";

  const confidence = Math.min(1, 0.45 + Math.abs(score) * 0.15);

  return {
    level,
    confidence,
    reasons,
  };
}