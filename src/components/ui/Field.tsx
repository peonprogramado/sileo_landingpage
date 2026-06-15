import React from 'react';
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps
} from 'react-aria-components';

export type LabelProps = AriaLabelProps;

export function Label(props: LabelProps) {
  return (
    <AriaLabel
      {...props}
      className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
    />
  );
}
