'use client'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/image.png'
import { useState, useEffect } from 'react';
import MenuButton from "@/components/MenuButton"

const Header = () => {
    const [scrollClass, setScrollClass] = useState("h-16  text-blue-900  bg-transparent ");
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrollClass("h-20  bg-blue-950 shadow-xl text-white ");
            } else {
                setScrollClass("h-12  text-blue-900 ");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className={`fixed top-0 py-8 px-6 w-full z-10 flex items-center justify-center transition-all duration-300 ease-in-out ${scrollClass}`}>
            <div className=' w-full '>
                <Image
                    src={logo}
                    alt='Logo On Byte'

                    className='h-full w-40 lg:w-52'
                />
            </div>
            <div className="ml-auto lg:hidden">
               
            </div>
            <MenuButton onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} />

            <div className={`bg-blue-950 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10 right-0 top-0
                    ${isOpen ? 'w-44' : 'w-0 overflow-hidden lg:hidden' 
                }`}>
                 <MenuButton onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} />

                <ul className='flex flex-col  z-30 mt-10 '>
                    <Link href="/" onClick={() => setIsOpen(prev => !prev)} className='font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 py-5 text-center text-xl border-y-4 border-blue-950'><li>Inicio</li></Link>
                    <Link href='/cursos' onClick={() => setIsOpen(prev => !prev)} className='font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 py-5 text-center text-xl border-y-4 border-blue-950'><li>Cursos</li></Link>
                    <a href="#sobre" onClick={() => setIsOpen(prev => !prev)} className='font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 py-5 text-center text-xl border-y-4 border-blue-950'><li>Sobre</li></a>

                </ul>
            </div>
            <div className=' hidden w-full  items-center justify-around md:flex'>
                <ul className='flex gap-20'>
                    <Link href="/" className='font-bold'><li>Inicio</li></Link>
                    <Link href="/cursos" className='font-bold'><li>Cursos</li></Link>
                    <a href="#sobre" className='font-bold'><li>Sobre</li></a>

                </ul>
            </div>
        </header>
    );
}

export default Header;
