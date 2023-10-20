import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "cancel";
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "flex cursor-pointer items-center justify-center rounded",
        {
          primary:
            "border border-gray-700 bg-black text-white active:pt-[7px] disabled:cursor-not-allowed disabled:select-none disabled:bg-transparent disabled:text-gray-700 disabled:active:py-2",
          secondary:
            "border-2 border-black bg-transparent text-black active:border-b disabled:opacity-50",
          cancel:
            "rounded-sm border-2 border-black bg-white px-6 text-xl text-black",
        }[variant],
      )}
    />
  );
}
