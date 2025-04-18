import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function processVocabulary(
  content: string,
  level: 'beginner' | 'intermediate' | 'advanced'
): Promise<string[]> {
  // This is a placeholder for the actual vocabulary processing logic
  // In a real implementation, this would use an AI service or database
  // to identify words based on the user's level
  const words = content.toLowerCase().match(/\b\w+\b/g) || [];
  return words.filter((word) => {
    // Simple example: filter words based on length
    switch (level) {
      case 'beginner':
        return word.length <= 4;
      case 'intermediate':
        return word.length <= 6;
      case 'advanced':
        return word.length <= 8;
      default:
        return false;
    }
  });
}

export function formatPageNumber(page: number): string {
  return page.toLocaleString('fa-IR');
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
