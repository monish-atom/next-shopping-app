import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkNumber(num: number) {
  if (num > 9) {
    return '9+';
  }
  return num.toString();
}
