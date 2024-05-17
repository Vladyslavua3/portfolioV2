import Header from "@/components/header";
import {HeroParallaxDemo} from "@/components/hero";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Skills from "@/components/skills";



export default function Home() {

  return (
    <main className={'bg-slate-900'}>
        <Header/>

        <HeroParallaxDemo />

        <Skills />

        <Work />

        <Contact
            serviceId={process.env.SERVICE_ID ?? ''}
            templateId={process.env.TEMPLATE_ID ?? ''}
            publicKeyId={process.env.PUBLIC_KEY_EMAILJS ?? ''}
        />

    </main>
  );
}
