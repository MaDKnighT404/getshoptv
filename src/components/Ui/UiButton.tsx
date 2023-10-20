import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export function UiButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "flex h-12 cursor-pointer items-center justify-center",
      )}
    />
  );
}
