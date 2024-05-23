import {HeroParallax} from "@/components/ui/hero-parallax";
import {data} from "@/lib/data";


function Hero() {
    return <HeroParallax products={data}/>;
}

export default Hero