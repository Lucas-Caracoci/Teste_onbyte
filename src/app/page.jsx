
import Banner from "@/components/Banner";
import Main from "@/components/Cursos";
import Faixa from "@/components/faixa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/Sobre";
import { Unidade } from "@/components/unidade";

export default function Home() {
  return (
    <div className="overflow-hidden" >
      <Header/>
      <Banner/>
      
      <Main/>
      <Faixa/>
      <About/>
      
      <Unidade/>
      <Footer/>
     
    </div>
  );
}
