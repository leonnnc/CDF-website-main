export function renderSwiperBullet(bulletClass: string) {
  return renderBullet(`${bulletClass} bg-primary-400/20`);
}

export function renderSwiperActiveBullet(bulletClass: string) {
  return renderBullet(`${bulletClass} bg-primary-400/40 dark:bg-primary-100/60`);
}

function renderBullet(bulletClass: string) {
  return `<button class="${bulletClass} h-3 w-3 rounded-full bg-neutral-700"></button>`;
}
