import type { KnowledgeLevel } from "../models/learning.js";

export type AssessUnderstandingInput = {
  topic: string;
  level: KnowledgeLevel;
  userText?: string;
};

export type AssessUnderstandingResult = {
  question: string;
  whyThisQuestion: string;
  expectedSignal: string;
};

export function assessUnderstanding(input: AssessUnderstandingInput): AssessUnderstandingResult {
  if (input.level === "beginner") {
    return {
      question: `Antes de seguir con ${input.topic}: ¿cómo lo explicarías en una sola frase?`,
      whyThisQuestion: "Para ver si agarró la idea base o si hay que bajar un cambio.",
      expectedSignal: "Una explicación simple, aunque sea imperfecta.",
    };
  }

  if (input.level === "advanced") {
    return {
      question: `Con ${input.topic}, ¿qué parte te parece más útil: teoría, ejemplo o implementación?`,
      whyThisQuestion: "Para no gastar tiempo en relleno.",
      expectedSignal: "Que elija con criterio y no pida todo mezclado.",
    };
  }

  return {
    question: `Con ${input.topic}, ¿qué parte querés que aclare primero?`,
    whyThisQuestion: "Para ajustar la explicación sin meter ruido.",
    expectedSignal: "Una preferencia concreta.",
  };
}