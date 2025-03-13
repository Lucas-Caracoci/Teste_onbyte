import { Mail, MapPin, Phone } from "lucide-react";
import Link from 'next/link'
import Form from "./form";

const Footer = () => {
    return (
        <div id="contato" className="  text-white mt-40 flex flex-col items-center py-5 bg-[radial-gradient(circle_at_100%_200%,_#5b9dff_0%,_theme(colors.blue.950)_80%)] rounded-t-3xl " >
            <h1  data-aos="fade-down" data-aos-delay="300" className="text-4xl font-bold  text-center pb-2 border-b-2 border-red-700">Contatos</h1>
            <div className="container flex flex-col h-full items-center p-10 xl:px-0 gap-10" >
                <div className="w-full flex flex-col lg:flex-row items-center  justify-center gap-10">
                    <div className="w-full h-full flex flex-col  items-center justify-around gap-6">
                        <h4  data-aos="fade-down" data-aos-delay="600" className="font-bold text-lg border-b-2 border-red-700 hidden  lg:flex">Redes Sociais</h4>
                        <ul className=" flex gap-6 items-center justify-around">
                        <Link  data-aos="fade-down" data-aos-delay="800" target="_blank" href={'https://www.tiktok.com/@onbyte.cabofrio'}><li >
                                <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>

                            </li></Link>
                            <Link  data-aos="fade-down" data-aos-delay="900" target="_blank" href={'https://www.instagram.com/onbytecabofrio/'}><li><svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></li></Link>
                            <Link  data-aos="fade-down" data-aos-delay="1000" target="_blank" href={'https://www.facebook.com/OnByteCaboFrio/'}><li> <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></li></Link>
                        </ul>
                    </div>

                    <div className="w-full font-bold text-lg flex items-center justify-center">
                        <ul className="flex flex-col gap-3" >
                            <Link  data-aos="fade-left" data-aos-delay="300" href={'Tel:2226451912'}><li className="flex gap-2 items-center"><Phone /> (22) 2645-1912</li></Link>
                            <Link  data-aos="fade-left" data-aos-delay="600" href={'Mailto: contato@onbytecabofrio.com.br'}><li className="flex gap-2 items-center"> <Mail /> contato@onbytecabofrio.com.br</li></Link>
                            <Link  data-aos="fade-left" data-aos-delay="900" target="_blank" href={'https://maps.app.goo.gl/cpgBr1kS2p9Dp9uy9'}><li className="flex gap-2 items-center"><MapPin />Av. Teixeira e Souza, 49 – Sala 101 à 103</li></Link>
                        </ul>
                    </div>
                    
                </div>
                <div className="w-full flex flex-col-reverse lg:flex-row items-center bg-slate-50 justify-around container gap-20">

                <Form/>  
                <iframe className="rounded-lg w-full max-w-md h-[28rem]   "
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3675.9086416008154!2d-42.019197!3d-22.879833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUyJzQ3LjQiUyA0MsKwMDEnMDkuMSJX!5e0!3m2!1spt-BR!2sbr!4v1741620591136!5m2!1spt-BR!2sbr"
                   
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    data-aos="fade-up" data-aos-delay="300"
                    >
                        
                </iframe>
                </div>

               
                                                                          
            </div>
            
        </div>
    );
}

export default Footer;



// bg-[radial-gradient(circle_at_100%_150%,_#5b9dff_0%,_#020c1b_80%)]