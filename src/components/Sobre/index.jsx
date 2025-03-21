
const About = () => {
    const diferenciais = [
        {
          titulo: "Aulas 100% práticas",
          descricao: "Aprenda na prática com exercícios reais, desenvolvendo habilidades essenciais para o mercado de trabalho desde o início.",
          delay:100
        },
        {
          titulo: "Flexibilidade de horários",
          descricao: "Escolha os melhores horários para estudar e adapte seu aprendizado à sua rotina, sem comprometer outras atividades importantes.",
          delay:200
        },
        {
          titulo: "Facilidade na reposição",
          descricao: "Caso precise faltar, você pode repor as aulas sem burocracia, garantindo que seu aprendizado continue sem interrupções.",
          delay:300
        },
        {
          titulo: "Um aluno por micro",
          descricao: "Cada aluno tem um computador exclusivo para praticar com total autonomia, sem precisar dividir equipamentos durante as aulas.",
          delay:400
        },
        {
          titulo: "Respeito ao seu ritmo",
          descricao: "Avance no curso no seu próprio tempo, com suporte individualizado para garantir um aprendizado eficiente e sem pressões.",
          delay:500
        },
        {
          titulo: "Prática do mercado em aula",
          descricao: "Nossos cursos são baseados em demandas reais do mercado, preparando você para desafios profissionais desde o primeiro dia.",
          delay:600
        }
      ];
    return (
        <div id='sobre' className=' flex flex-col   items-center justify-around pt-20  ' >
            <h4  data-aos="fade-down" data-aos-delay="300" className='text-4xl font-bold w-fit  text-main border-b-2 border-red-700'>Diferenciais</h4>
            <div className="  w-full  md:px-10  lg:flex-row flex flex-col  flex-wrap items-center justify-between m-auto h-full   my-20">
            
            {diferenciais.map((item, index) => (
                <div key={index}  
                data-aos="flip-right" data-aos-delay={item.delay}
                 className=' shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                 border-red-700 px-4  m-4 xl:px-10 min-h-52 lg:flex-[0_0_calc((100%/2)-40px)] xl:flex-[0_0_calc((100%/3)-40px)]  rounded flex flex-col items-center justify-around py-6'>
                    <h4 className='font-bold w-fit  text-main border-b-2 border-red-700 text-xl'>{item.titulo}</h4>
                    <p className='text-justify text-main font-medium text-lg lg:text-md'>{item.descricao}</p>
                </div>
            ))}



        </div>
        </div>
       
    );
}

export default About;
