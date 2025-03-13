import CardCurso from "@/components/Cursos/CardCurso";
import Faixa from "@/components/faixa";
import Header from "@/components/Header";

import { cursos } from "@/db/cursos";
export default function Cursos() {
    return (

        <div className="overflow-hidden">
            <Faixa/>
            <Header />
            <div className="flex items-center flex-col  " >
                <h1 className='text-4xl font-bold mt-40 mb-20 text-center pb-2  text-blue-900 border-b-2 border-red-700'>Todos os Cursos</h1>
                <main className="container flex flex-wrap gap-y-6 p-6 lg:p-10">
                    {cursos.map((curso,index)=>(
                        <CardCurso  key={index} curso={curso}/>
                    ))}
                </main>
            </div>

        </div>

    )
}