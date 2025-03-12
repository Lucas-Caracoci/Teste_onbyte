import Image from "next/image";
import about2Img from '../../../public/fachada.jpg'
import about1Img from '../../../public/sala.jpeg'
import { Check, MapPin } from "lucide-react";


export function Unidade() {
  return (
    <section className="text-main py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="sala de aula"
                fill
                quality={100}
                className="object-cover content-center hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt=" fachada"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">ON BYTE Cabo Frio</h2>

            <p>
            A On Byte Cabo Frio é uma escola de cursos profissionalizantes e de informática, comprometida em transformar vidas por meio da educação. Com uma metodologia inovadora e instrutores qualificados, oferecemos mais de 70 cursos para preparar nossos alunos para o mercado de trabalho.
            <br></br>Venha nos conhecer e invista no seu futuro!
            </p>

            <ul className="space-y-4 ">
              <li data-aos="fade-right" data-aos-delay="400" className="flex items-center gap-2">
                <Check className="text-second" />
                Aberto desde 2014.
              </li>
              <li  data-aos="fade-right" data-aos-delay="500" className="flex items-center gap-2">
                <Check className="text-second" />
                Equipe com profissionais qualificados.
              </li>
              <li  data-aos="fade-right" data-aos-delay="600" className="flex items-center gap-2">
                <Check className="text-second" />
                Qualidade é nossa prioridade.
              </li>
              <li  data-aos="fade-right" data-aos-delay="700" className="flex items-center gap-2">
                <Check className="text-second" />
                Mais de <span className="text-second font-bold">1000</span> alunos formados!
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                data-aos="fade-right" data-aos-delay="300"
                target='_blank'
                href={`https://wa.me/5522974006116?text=Olá vim pelo site e gostaria de mais informações sobre os Cursos`}
                className="bg-second text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
              
                Contato via WhatsApp
              </a>

              <a
                data-aos="fade-left" data-aos-delay="300"
                href="#contato"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-second" />
                Nosso Endereço
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}