
import logo from '../../../public/thumb.png'

import Image from 'next/image';


const Banner = () => {

  return (
    <section  id='inicio' style={{ backgroundImage: `url(/bg.png)` }} className=" bg-fixed  text-white relative overflow-hidden ">

      <div >
        <Image
          src={logo}
          alt='Logo On Byte'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-60 lg:hidden'></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative mt-20">

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8  lg:mt-[-130px]">

          <div className="space-y-6 mt-[70px]">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              VOCÊ ESCOLHE O DIA E A HORA QUE QUER ESTUDAR            </h1>
            <p className=" lg:text-lg" data-aos="fade-right">
             Texto Motivacional 
            </p>


            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/5522974006116?text=Olá vim pelo site e gostaria de mais informações sobre os Cursos`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >

              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">50%</b> de desconto na primeira compra.
              </p>
            </div>

          </div>

          <div className="hidden lg:flex  h-full  items-end justify-center ">
            <Image
              src={logo}
              alt='Logo On Byte'
              className='object-contain w-full'
              
              sizes="(max-width:768px)"
              quality={100}
              priority
            />
          </div>

        </article>

      </div>


    </section>
  )
}

export default Banner;
