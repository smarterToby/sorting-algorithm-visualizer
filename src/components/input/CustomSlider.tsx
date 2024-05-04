import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
export const CustomSlider = ({
  min,
  max,
  step,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center w-full">
      <span className="text-center text-gray-300">Slow</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
       
      />

      <span className="text-center text-gray-300">Fast</span>
    </div>
  );
};
