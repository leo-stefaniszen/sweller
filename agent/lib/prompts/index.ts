import { identity } from "./identity.js";
import { principles } from "./principles.js";
import { behavior } from "./behavior.js";
import { output } from "./output.js";

export const instructions = [identity, principles, behavior, output].join("\n\n");