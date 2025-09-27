import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge.
 *
 * @param inputs - An array of class values.
 * @returns A string of combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * An identity function for object class definitions
 * Necessary as a wrapper so that our tooling can identify that the object contains tailwind classes
 */
export function cns<T extends Record<string, string>>(input: T): T {
  return input;
}
