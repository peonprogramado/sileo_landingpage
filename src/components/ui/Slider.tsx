import React from 'react';
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';

export interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
  highContrast?: boolean;
}

export function Slider<T extends number | number[]>(
  { label, thumbLabels, className, highContrast = false, ...props }: SliderProps<T>
) {
  return (
    <AriaSlider {...props} className={`w-full ${className || ''}`}>
      {label && <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>}
      <SliderTrack className="relative w-full h-6">
        {({ state }) => (
          <>
            {/* Background track */}
            <div className={`absolute w-full h-[6px] bg-gray-300 dark:bg-gray-600 rounded-full top-[9px] ${highContrast ? 'ring-2 ring-black' : ''}`} />

            {/* Filled track */}
            <div
              className="absolute h-[6px] bg-[#0A0A0A] dark:bg-white rounded-full top-[9px]"
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />

            {/* Thumb */}
            <SliderThumb
              index={0}
              aria-label={thumbLabels?.[0]}
              className="absolute w-6 h-6 rounded-full bg-[#0A0A0A] dark:bg-white shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 top-[21px] -translate-y-1/2 -translate-x-1/2"
            />
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
