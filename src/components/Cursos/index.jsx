'use client'

import { cursos } from '@/db/cursos';
import Link from 'next/link'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CardCurso from './CardCurso';



const Main = () => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 }
            }
        }, 
        [Autoplay({ delay: 5000, stopOnInteraction: false })] 
    );
    return (
        <div  className="container mx-auto px-4 flex flex-col  text-main md:text-xl  ">
            <h1 className='text-4xl font-bold m-auto pb-2 my-14 border-b-2 border-red-700'>NOSSOS CURSOS</h1>
            <p className='text-center'>A On Byte Cabo frio oferece mais de 70 cursos para que você possa estar pronto quando a oportunidade aparecer.</p>
            <div className="relative">
                <div className="overflow-hidden " ref={emblaRef}>
                    <div className="flex my-10 ">
                        {
                           cursos.slice(0, 8).map((curso, index) => (
                               <CardCurso key={index} curso={curso}/>
                            ))
                        }

                    </div>
                </div>
                        
            </div>
            <Link href={'/cursos'} className='text-xl font-bold w-fit  pb-2  border-b-2 border-red-700'> Ver todos os cursos</Link>


                      
        </div>
    );
}

export default Main;
