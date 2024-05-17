import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {technologies} from "@/lib/data";


const Skills = () => {
    return (
        <div className={'sm:px-16 px-6 sm:py-16 py-10'}>
            <h1 className={ "text-slate-600 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Skills</h1>
            <div className={'flex items-center justify-center'}>
                <InfiniteMovingCards
                    items={technologies}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};



export default Skills;