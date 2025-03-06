import CardCurso from "@/components/Cursos/CardCurso";
import Header from "@/components/Header";

import { cursos } from "@/db/cursos";
export default function Cursos() {
    return (

        <div>
            <Header />
            <div className="flex items-center flex-col bg-[url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?t=st=1741293377~exp=1741296977~hmac=d12f8b879c044dc5db2a1b2e62d7ef4a6fdffea1e38717e844bd54434438645e&w=1380')] bg-cover  bg-fixed" >
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