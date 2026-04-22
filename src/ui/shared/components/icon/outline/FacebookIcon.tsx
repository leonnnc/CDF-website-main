import { IconProps } from '@modules/shared/interfaces/icon.interface';

export function FacebookIcon({ ...rest }: IconProps) {
  return (
    <svg
      role="img"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...rest}
    >
      <path d="M18.3332 10.14C18.3332 5.53997 14.5998 1.80664 9.99984 1.80664C5.39984 1.80664 1.6665 5.53997 1.6665 10.14C1.6665 14.1733 4.53317 17.5316 8.33317 18.3066V12.64H6.6665V10.14H8.33317V8.05664C8.33317 6.44831 9.6415 5.13997 11.2498 5.13997H13.3332V7.63998H11.6665C11.2082 7.63998 10.8332 8.01498 10.8332 8.47331V10.14H13.3332V12.64H10.8332V18.4316C15.0415 18.015 18.3332 14.465 18.3332 10.14Z" />
    </svg>
  );
}
