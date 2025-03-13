'use client'
import Link from 'next/link'
import Image from 'next/image';
import logolg from '../../../public/logo_full.png'
import logo from '../../../public/logo.png'
import { useState, useEffect } from 'react';
import MenuButton from "@/components/MenuButton"

const Header = () => {
    const [scrollClass, setScrollClass] = useState("h-16  bg-transparent ");
    const [color, setColor] = useState('rgb(29 78 216)')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setColor('#fff')
                setScrollClass("h-20 bg-[radial-gradient(circle_at_200%_100%,_#5b9dff_0%,_theme(colors.blue.950)_80%)] shadow-xl   ");
            } else {
                setScrollClass("h-12  ");
                setColor('rgb(29 78 216)')
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className={` fixed top-0 py-8 px-6 w-full z-10 flex items-center justify-center transition-all duration-300 ease-in-out ${scrollClass}`}>
            <div className='container flex items-center justify-between'>
                <div className=' w-full '>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            alt='Logo On Byte'
                            data-aos="fade-down"  data-aos-delay="300"
                            className='h-16 w-16 lg:w-52 md:hidden'
                        />
                        <Image
                            src={logolg}
                            alt='Logo On Byte'
                            data-aos="fade-down"  data-aos-delay="300"
                            className='h-full w-40 lg:w-52 hidden md:flex'
                        />

                    </Link>
                </div>


                
                <MenuButton onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} color={color} />

                <div className={`bg-blue-950 text-white 
        fixed h-screen transition-all 
        duration-300 z-10 right-0 top-0
        ${isOpen ? 'w-44' : 'w-0 overflow-hidden '
                    }`}>
                    <MenuButton   onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} color={color} />

                    <ul className='flex flex-col  z-30 mt-10 text-white'>
                        <Link href="/" onClick={() => setIsOpen(prev => !prev)} className='font-bold  transition-all duration-300 ease-in-out hover:bg-blue-700 py-5 text-center text-xl border-y-4 border-blue-950'><li>Inicio</li></Link>
                        <a href="#sobre" onClick={() => setIsOpen(prev => !prev)} className='font-bold  transition-all duration-300 ease-in-out hover:bg-blue-700 py-5 text-center text-xl border-y-4 border-blue-950'><li>Sobre</li></a>
                        <Link href='/cursos' onClick={() => setIsOpen(prev => !prev)} className='font-bold  transition-all duration-300 ease-in-out hover:bg-blue-700 py-5 text-center text-xl border-y-4 border-blue-950'><li>Todos os Cursos</li></Link>
                        

                    </ul>
                </div>
                <div className=' text-white hidden w-full  items-center justify-around lg:flex'>
                    <ul className='flex gap-20'>
                        <Link  data-aos="fade-down"  data-aos-delay="500" href="/" className='font-bold transition-all duration-300 ease-in-out border-b-2 border-b-transparent hover:scale-110 hover:border-b-red-500'><li>Inicio</li></Link>
                        <a  data-aos="fade-down"  data-aos-delay="600" href="/#sobre" className='font-bold transition-all duration-300 ease-in-out border-b-2 border-b-transparent hover:scale-110 hover:border-b-red-500'><li>Sobre</li></a>
                        <Link  data-aos="fade-down"  data-aos-delay="700" href="/cursos" className='font-bold transition-all duration-300 ease-in-out border-b-2 border-b-transparent hover:scale-110 hover:border-b-red-500'><li>Todos os Cursos</li></Link>

                    </ul>
                </div>

            </div>


        </header>
    );
}

export default Header;
