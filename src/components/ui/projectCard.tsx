"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image, {StaticImageData} from "next/image";

interface AnimatedPinType {
    title:string
    description:string
    link:string
    thumbnail:StaticImageData
}


export function ProjectCard({title,description,link,thumbnail}:AnimatedPinType) {
    return (
        <div className="h-[35rem] flex items-center justify-center z-10 " id={'work'}>
            <PinContainer
                title={link}
                href={link}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
                    </div>
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                </div>
            </PinContainer>
        </div>
    );
}
