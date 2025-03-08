
import Banner from "@/components/Banner";
import Main from "@/components/Cursos";
import Faixa from "@/components/faixa";
import Header from "@/components/Header";
import About from "@/components/Sobre";

export default function Home() {
  return (
    <div >
      <Header/>
      <Banner/>
      <Main/>
      <Faixa/>
      <About/>
     
    </div>
  );
}
