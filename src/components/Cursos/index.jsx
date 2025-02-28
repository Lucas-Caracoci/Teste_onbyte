'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const cursos = [
    {
        title: 'INFORMÁTICA',
        subjects: 'Windows • Word • Excel • PowerPoint • Internet ',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br98INFORMC381TICA.jpg   '
    },
    {
        title: 'KIDS',
        subjects: 'Windows • Word • Excel • Power Point • Internet',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br445KIDS.jpg'
    },
    {
        title: 'INGLÊS',
        subjects: 'Inglês Cambridge',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br956INGLC38AS.jpg'
    },
    {
        title: 'ADMINISTRAÇÃO',
        subjects: 'Secretariado • Gestão de Pessoas • Matemática Financeira • Contabilidade • Propaganda e Marketing',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br238ADMINISTRAC387C383O.jpg'
    },
    {
        title: 'DESIGNER GRÁFICO',
        subjects: 'Corel Draw • In Design • Photoshop • Illustrator',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br550DESIGNER20GRC381FICO.jpg'
    },
     {
        title: 'DESENVOLVEDOR FRONT END',
        subjects: 'HTML 5+CSS3 • Javascript • Photoshop • UX/UI • React',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br22DESENVOLVEDOR20FRONTEND.jpg'
    },
    {
        title: 'DESENVOLVEDOR BACK END',
        subjects: ' Lógica orientada a objetos • Banco de Dados • C# • PHP com Laravel • Java • Python',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br223DESENVOLVEDOR20BACKEND.jpg'
    },
    {
        title: 'DESENVOLVEDOR FULL STACK',
        subjects: ' HTML 5+CSS3 • Javascript • Photoshop • UX/UI • React • Lógica orientada a objetos • Banco de Dados • C# • PHP com Laravel • Java • Python',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/11/programador-full.jpeg'
    },
    {
        title: 'PROJETOS E EDIFICAÇÕES',
        subjects: ' Auto Cad I • Auto Cad II • 3DS Max II • Sketchup • MS Project • Excel • Excel Avançado • Revit',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br446PROJETOS20E20EDIFICAC387C395ES.jpg'
    },
    {
        title: 'DESENVOLVEDOR DE GAMES',
        subjects: ' 3DS Max I • HTML 5 + CSS 3 • Games I c/ HTML5 • Games Teen • Games II Unity 3D',
        img: 'https://onbytecabofrio.com/wp-content/uploads/2023/10/image-to-jpg-cyborgonbytecabofrio.com_.br266CRIAC387C383O20DE20GAMES.jpg'
    },

]

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
        <div id="cursos" className="container mx-auto px-4 flex flex-col ">
            <h1 className='text-4xl font-bold m-auto pb-2 my-14 text-blue-950 border-b-2 border-red-700'>NOSSOS CURSOS</h1>

            <div className="relative">
                <div className="overflow-hidden " ref={emblaRef}>
                    <div className="flex my-10 ">
                        {
                            cursos.map((curso, index) => (
                                <div key={index} className="flex-[0_0_100%]  min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-3  items-center justify-between" >
                                    <article className="select-none  border-4 border-red-700 bg-blue-950 text-white rounded-2xl p-4 space-y-6 lg:space-y-4 h-full w-full flex justify-evenly flex-col lg:p-6" >
                                        <h3 className="text-center text-xl lg:text-md font-bold ">{curso.title}</h3>
                                        <div className="flex gap-2 items-center  flex-col ">
                                            <img className='w-48 sm:w-32 rounded-xl' src={curso.img} alt="" />
                                            <div className="flex ">
                                                <p className="text-justify mt-3 lg:mt-0 text-md lg:text-sm ">{curso.subjects}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items center border-t-2 ">
                                            <button className=" bg-green-700 px-3 mt-6 lg:mt-4 py-1 rounded-sm font-bold" > SAIBA MAIS</button>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Main;
