import { BrowserIcon, ChurchIcon, CommunityIcon, VolunteerActivismIcon } from '@icons/outline';

import { WhyDestination } from '../interfaces/give-why.interface';

const CLASS = 'h-6 w-6 lg:h-8 lg:w-8';

export const GIVE_WHY_DESTINATIONS: WhyDestination[] = [
  {
    id: '1',
    icon: <CommunityIcon height="24" width="24" className={CLASS} />,
    title: 'Ministerios',
    description:
      'Impulsamos diversos ministerios que atienden a todas las edades y necesidades, desde niños hasta adultos mayores, creando un espacio donde todos pueden crecer en su fe.',
    color: '#4ADE80',
  },
  {
    id: '2',
    icon: <ChurchIcon height="32" width="32" className={CLASS} />,
    title: 'Instalaciones',
    description:
      'Mantenemos y mejoramos nuestras instalaciones para crear un ambiente acogedor donde las personas puedan encontrarse con Dios y conectar con otros creyentes.',
    color: '#E9C039',
  },
  {
    id: '3',
    icon: <BrowserIcon height="32" width="32" className={CLASS} />,
    title: 'Misiones',
    description:
      'Apoyamos proyectos misioneros en todo el país llevando el mensaje de esperanza a muchas iglesias misión (M.E.M.) y a aquellos que aún no han escuchado del evangelio.',
    color: '#F97316',
  },
  {
    id: '4',
    icon: <VolunteerActivismIcon height="32" width="32" className={CLASS} />,
    title: 'Ayuda Comunitaria',
    description:
      'Brindamos apoyo a diferentes comedores que son partes de nuestra iglesia en el Callao, Lomo de Corvina y Carabayllo, y llevamos ayuda a personas en situación de calle, demostrando el amor de Cristo de manera práctica.',
    color: '#6366F1',
  },
];
