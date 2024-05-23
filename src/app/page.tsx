import Header from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Skills from "@/components/skills";



export default function Home() {

  return (
    <main className={'bg-slate-900'}>
        <Header/>

        <Hero />

        <Skills />

        <Work />

        <Contact />

    </main>
  );
}
