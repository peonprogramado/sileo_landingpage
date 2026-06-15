import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return (renderProps: T) => {
    return twMerge(
      tw,
      typeof className === 'function' ? className(renderProps) : className
    );
  };
}

export const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2'
    }
  }
});
