import CardCurso from "@/components/Cursos/CardCurso";
import Header from "@/components/Header";

import { cursos } from "@/db/cursos";
export default function Cursos() {
    return (

        <div>
            <Header />
            <div className="flex items-center flex-col mt-8">
                <h1 className='text-4xl font-bold m-auto pb-2 my-14 text-blue-950 border-b-2 border-red-700'>Todos os Cursos Disponíveis</h1>
                <main className="container flex flex-wrap gap-y-6 p-6 lg:p-10">
                    {cursos.map((curso,index)=>(
                        <CardCurso  key={index} curso={curso}/>
                    ))

                    }
                </main>
            </div>

        </div>

    )
}