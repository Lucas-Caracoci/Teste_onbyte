import Link from 'next/link'
import faixalg from '../../../public/faixalg.png'
import faixasm from '../../../public/faixasm.jpg'
import Image from 'next/image';

const Faixa = () => {
  const images = [
    { src: '/faixalg.png', alt: 'Faixa grande' },
    { src: '/faixasm.jpg', alt: 'Faixa pequena' },
  ];

    return (
        <div className='mt-10'>
        <Link href={`https://wa.me/5522974006116?text=Olá vim pelo site e gostaria de mais informações sobre o Curso `}>
           <Image
                     src={faixasm}
                     alt=''
                     sizes='100vw'
                     className='w-full md:hidden'
                   />
                    <Image
                     src={faixalg}
                     alt=''
                     sizes='100vw'
                     className='w-full hidden md:flex'
                   />
        </Link>
    </div>
    );
}

export default Faixa;
