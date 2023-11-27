import { twMerge } from "tailwind-merge";

type PinIconProps = React.SVGProps<SVGSVGElement> & { color?: string };

export function PinIcon({
  color = "#ffffff",
  className,
  ...props
}: PinIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#e2e8f0"
      className={twMerge("h-6 w-6", className)}
      {...props}
    >
      <path
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}
