import { IconProps } from '@modules/shared/interfaces/icon.interface';

export function MoonIcon({ ...rest }: IconProps) {
  return (
    <svg
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...rest}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M9.353 2.939a1 1 0 0 1 .22 1.08 8 8 0 0 0 10.408 10.408 1 1 0 0 1 1.301 1.3A10.003 10.003 0 0 1 12 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 0 1 1.08.22ZM7.086 5.687a8 8 0 1 0 11.228 11.228c-.43.056-.87.085-1.314.085-5.523 0-10-4.477-10-10 0-.445.03-.883.086-1.313Z"
      />
    </svg>
  );
}
