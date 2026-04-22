import {
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  YoutubeIcon,
} from '@icons/outline';
import { LogoIcon } from '@icons/solid';
import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import FooterStyles from '@ui/footer/styles/footer.module.scss';
import FooterGridStyles from '@ui/footer/styles/footer-grid.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

import { FooterContact } from './FooterContact';
import FooterSocial from './FooterSocial';

export function Footer() {
  return (
    <footer className="relative py-28 lg:pb-8 overflow-hidden">
      <LogoIcon
        height="48"
        width="48"
        className={clsx(
          FooterStyles.logo,
          'absolute text-primary-100/50 dark:text-primary-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4'
        )}
      />
      <div
        className={clsx(
          FooterGridStyles.main,
          'relative grid md:grid-cols-5 lg:grid-cols-11 lg:grid-rows-3 gap-4 lg:gap-6 max-w-wrapper px-4 mx-auto'
        )}
      >
        <div
          className={clsx(
            FooterGridStyles.about,
            'bg-neutral-300/20 dark:bg-primary-300/10 backdrop-blur-xl p-6 lg:p-8 rounded-2xl lg:rounded-3xl'
          )}
        >
          <p className="text-h4 md:text-h3 text-primary-600 dark:text-neutral-100 lg:text-h2 font-medium mb-8">
            Somos una iglesia para ti y tu familia.
          </p>
          <Link href="/">
            <LogoIcon
              height="48"
              width="48"
              className={cn('h-12 w-12 md:h-16 md:w-16 text-primary-500', 'dark:text-neutral-100')}
            />
          </Link>
        </div>
        <div
          className={clsx(
            FooterGridStyles.contact,
            'bg-neutral-300/20 dark:bg-primary-300/10 backdrop-blur-xl p-6 lg:p-8 rounded-2xl lg:rounded-3xl'
          )}
        >
          <h4 className="h4 text-primary-600 dark:text-neutral-100 mb-4 md:mb-6">Contáctanos</h4>
          <div className="flex flex-col gap-3 text-smaller md:text-small">
            <FooterContact icon={CallIcon}>
              <a
                href="https://api.whatsapp.com/send?phone=51993520122"
                rel="noopener noreferrer"
                target="_blank"
              >
                993 520 122
              </a>
            </FooterContact>
            <FooterContact icon={MapIcon}>
              <a
                href="https://maps.app.goo.gl/3gh9ZyWL22uHGJbb7"
                rel="noreferrer noopener"
                target="_blank"
              >
                Av. Guzmán Blanco 350 - Cercado de Lima
              </a>
            </FooterContact>
            <FooterContact icon={MailIcon}>
              <a href="mailto:informes@catedraldefe.org">informes@catedraldefe.org</a>
            </FooterContact>
          </div>
        </div>
        <div
          className={clsx(
            FooterGridStyles.brand,
            'bg-neutral-300/20 dark:bg-primary-300/10 backdrop-blur-xl p-6 lg:p-8 rounded-2xl lg:rounded-3xl text-center text-primary-600 dark:text-neutral-100 font-medium'
          )}
        >
          <p>2025 © Catedral de Fe</p>
        </div>
        <div
          className={clsx(
            FooterGridStyles.social,
            'bg-neutral-300/20 dark:bg-primary-300/10 backdrop-blur-xl p-6 lg:p-8 rounded-2xl lg:rounded-3xl lg:text-center'
          )}
        >
          <h4 className="h4 mb-4 md:mb-6 text-primary-600 dark:text-neutral-100">Síguenos</h4>
          <div className="flex lg:flex-col items-center gap-6">
            <FooterSocial
              link="https://www.instagram.com/icatedraldefe"
              socialName="Facebook"
              icon={InstagramIcon}
            />
            <FooterSocial
              link="https://www.facebook.com/icatedraldefe"
              socialName="Facebook"
              icon={FacebookIcon}
            />
            <FooterSocial
              link="https://www.youtube.com/@CatedraldeFeCDF"
              socialName="Youtube"
              icon={YoutubeIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
