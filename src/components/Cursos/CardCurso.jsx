

const CardCurso = ({curso}) => {
    return (
        <div  className="flex-[0_0_100%]  min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/4)] px-3  items-center justify-between" >
        <article data-aos="flip-left"  data-aos-delay="10000" className="select-none  border-4 border-red-700 bg-main text-white rounded-2xl p-4 space-y-6 lg:space-y-4 h-full w-full flex justify-evenly flex-col lg:p-6" >
            <h3 className="text-center text-xl lg:text-md font-bold ">{curso.title}</h3>
            <div className="flex gap-2 items-center  flex-col ">
                <img className='w-48  rounded-xl' src={curso.img} alt="" />
                <div className="flex ">
                    <p className="text-justify mt-3 lg:mt-0 text-md lg:text-sm ">{curso.subjects}</p>
                </div>
            </div>
            <div className="flex justify-center items center border-t-2 ">
            <a target='_blank'
              href={`https://wa.me/5522974006116?text=Olá vim pelo site e gostaria de mais informações sobre o Curso : ${curso.title}`}><button className=" bg-green-600 px-3 mt-6 lg:mt-4 py-1 rounded-sm font-bold" > SAIBA MAIS</button></a>
            </div>
        </article>

        
    </div>
    );
}

export default CardCurso;
