import Image from 'next/image';

export function GiveWhyBanner() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16">
      <div className="rounded-2xl overflow-hidden aspect-video flex-1">
        <Image
          height="394"
          width="574"
          src="/images/give/give-why/happy-kid.webp"
          alt="niño sonriendo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-xl flex-1 text-center lg:text-left">
        <h3 className="text-bigger lg:text-h3 font-bold text-yellow-300 mb-6 md:mb-8">
          Tu ofrenda hace la diferencia
        </h3>
        <p className="mb-4">
          Cuando damos a la iglesia, estamos participando activamente en la obra de Dios. Cada
          ofrenda, sin importar su tamaño, contribuye a expandir el Reino de Dios y a impactar vidas
          para la eternidad.
        </p>
        <p>
          Nuestras ofrendas son una expresión tangible de nuestra fe y compromiso con la misión que
          Dios nos ha encomendado como iglesia.
        </p>
      </div>
    </div>
  );
}
