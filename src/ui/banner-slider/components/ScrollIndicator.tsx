'use client';

import BannerSliderStyles from '@ui/banner-slider/styles/banner-slider.module.scss';

export function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScroll}
      className={BannerSliderStyles.scrollIndicator}
      aria-label="Ver más contenido"
    >
      <span className="text-xs font-semibold tracking-widest opacity-80">
        Ver más
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </button>
  );
}
