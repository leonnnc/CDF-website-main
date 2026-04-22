import { IconProps } from '@modules/shared/interfaces/icon.interface';

export function PlayIcon({ ...rest }: IconProps) {
  return (
    <svg
      role="img"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 50.4001C40.3712 50.4001 50.4 40.3713 50.4 28.0001C50.4 15.6289 40.3712 5.6001 28 5.6001C15.6288 5.6001 5.59998 15.6289 5.59998 28.0001C5.59998 40.3713 15.6288 50.4001 28 50.4001ZM26.7531 20.0704C25.8939 19.4976 24.7892 19.4442 23.8788 19.9314C22.9683 20.4187 22.4 21.3675 22.4 22.4001V33.6001C22.4 34.6327 22.9683 35.5815 23.8788 36.0688C24.7892 36.556 25.8939 36.5026 26.7531 35.9298L35.1531 30.3298C35.9321 29.8105 36.4 28.9363 36.4 28.0001C36.4 27.0639 35.9321 26.1897 35.1531 25.6704L26.7531 20.0704Z"
      />
    </svg>
  );
}
