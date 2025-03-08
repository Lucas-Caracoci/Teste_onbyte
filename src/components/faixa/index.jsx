'use client'
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

const Faixa = () => {
  const images = [
    { srclg: '/faixalgperder.png', srcsm: '/faixasm.png', alt: 'Promoção pare de perder oportunidades' },
    { srclg: '/faixalg.png', srcsm: '/faixasm.jpg', alt: 'Mais de 70 cursos' },
    { srclg: '/faixalg60.png', srcsm: '/faixasm60.png', alt: 'Melhor idade' },
  ];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <div className="mt-10 overflow-hidden" ref={emblaRef}>
      <div className="flex" >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Link href="https://wa.me/5522974006116?text=Olá vim pelo site e gostaria de mais informações sobre o Curso">
              
              <Image
                src={image.srcsm}
                alt={image.alt}
                width={1920}
                height={500}
                priority
                className="w-full md:hidden"
              />
             
              <Image
                src={image.srclg}
                alt={image.alt}
                width={1920}
                height={500}
                className="w-full hidden md:flex"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faixa;
