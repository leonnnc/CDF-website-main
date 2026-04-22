import { Event } from '../interfaces/event.interface';

export const EVENTS: Event[] = [
  {
    id: '3',
    title: 'INSÓLITO',
    description: (
      <>
        <span className="block mb-4">Exclusivo para adolescentes de 14 a 17 años.</span>
        Una experiencia única donde dejarás atrás las máscaras y serás transformado en la presencia
        de Dios.
        <br />
        <span className="italic font-semibold">2 Corintios 3:18</span>
      </>
    ),
    details: {
      ministry: 'DNS',
      date: '25, 26 y 27 de julio, 2025',
    },
    link: 'https://forms.gle/jpdkXW5SssfpQAxF6',
    image: '/images/home/events/insolito-event.webp',
    isRegistrationLink: true,
  },
  {
    id: '4',
    title: 'UNIDOS - campamento',
    description: (
      <>
        <span>Este año volveremos a estar en la presencia de Dios 🔥 ¡Ven con nosotros!</span>
        <ul className="flex flex-col gap-2 mb-4">
          <li>📅 Fecha: 26 al 28 de julio</li>
          <li>📍 Lugar: Santa Eulalia</li>
          <li>💵 Monto: 250 soles </li>
        </ul>
        <span className="font-bold text-normal text-white">
          Separa tu cupo con 50 soles, recuerda que son limitados Número del yape: 922705835 a
          nombre de Joel Julca
        </span>
      </>
    ),
    details: {
      ministry: 'Dynamis',
      date: '26, 27 y 28 de julio, 2025',
    },
    image: '/images/home/events/unidos-event.webp',
    link: 'https://forms.gle/9Cf4D8MfewvhmscGA',
    isRegistrationLink: true,
  },
  {
    id: '5',
    title: 'TRASCIENDE - retiro',
    description: (
      <>
        <span className="block mb-4">
          Prepárate para vivir un tiempo de transformación, unidad y renovación espiritual. Este
          será un retiro diseñado para llevarte a un nuevo nivel en tu relación con Dios y con los
          demás.
        </span>
        <ul className="flex flex-col gap-2 mb-4">
          <li>📅 Fecha: Del 25 al 27 de Julio</li>
          <li>📍 Lugar: Casa de Retiro Pasionistas - La Molina</li>
          <li>💰 Inversión: S/280.00 (Puedes separar tu cupo con S/50.00)</li>
        </ul>
        <span className="font-bold italic text-normal text-white">
          NOTA: INSCREBETE HOY, LA CAPACIDAD ES LIMITADA
        </span>
      </>
    ),
    details: {
      ministry: 'Life',
      date: '25, 26 y 27 de julio, 2025',
    },
    image: '/images/home/events/trasciende-event.webp',
    link: 'https://forms.gle/fQvKTputwze316Y3A',
    isRegistrationLink: true,
  },
];
