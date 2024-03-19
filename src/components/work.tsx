"use client"
import {data, workSection} from "@/lib/data";
import {ProjectCard} from "@/components/ui/projectCard";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";


const Work = () => {

    return (
        <div >
            <div className={'sm:px-16 px-6 sm:py-16 py-10'}>
                <h1 className={ "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Work Experience</h1>

                <TextGenerateEffect words={workSection} />
            </div>
         <div className={'flex flex-wrap items-center justify-center'}>
            {
                data.map((project,index) => (
                    <ProjectCard key={index} title={project.title} description={''} link={project.link} thumbnail={project.thumbnail} />
                ))
            }
        </div>
        </div>
    );
};

export default Work;