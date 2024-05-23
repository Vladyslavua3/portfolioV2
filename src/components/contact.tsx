"use client"
import {ChangeEvent, ReactNode, useRef, useState} from "react";

import emailjs from '@emailjs/browser'
import {Label} from "@/components/ui/label";
import {InputForEmail} from '@/components/ui/inputForContact'
import {cn} from "@/lib/utils";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";
import {Textarea} from "@/components/ui/textarea";
import {Boxes} from "@/components/ui/background-boxes";
import Link from "next/link";

interface FromType {
    name:string
    email:string
    message:string
}

interface ContactTypeProps {
    serviceId:string,
    templateId:string
    publicKeyId:string
}

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const [form,setForm] = useState<FromType>({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value}= e.target

        setForm({...form,[name]:value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if(form.email && form.message && form.name) {

            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                {
                    from_name: form.name,
                    to_name: 'Vlad',
                    from_email: form.email,
                    to_email: 'vladgershman@gmail.com',
                    message: form.message
                }, process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS).then(() => {
                setForm({
                    email: '',
                    name: '',
                    message: '',
                })
            }).catch(error => console.log(error))
        }
    }


    return (
        <div className="h-screen relative w-full mt-10 overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg" id={'contact'}>
            {/*<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />*/}
            {/*/!*<Boxes />*!/*/}
        <div className="max-w-md w-[300px] sm:w-full z-10 mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-#1d1c20">
            <h2 className="font-bold text-xl text-neutral-200">
                Send me message
            </h2>
            <form className="my-8" ref={formRef} onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="name" className={'text-neutral-200'}>Your name</Label>
                        <InputForEmail name="name" placeholder="Tyler" type="text" value={form.name} onChange={handleChange}/>
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email" className={'text-neutral-200'}>Email Address</Label>
                    <InputForEmail name="email" placeholder="youremail@gmail.com" type="email" value={form.email} onChange={handleChange}/>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message" className={'text-neutral-200'}>Your message</Label>
                    <Textarea name="message" value={form.message} onChange={handleChange}/>
                </LabelInputContainer>


                <button
                    className="bg-slate-700 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={!form.email || !form.message || !form.name}
                >
                    Send &rarr;
                    <BottomGradient />
                </button>
            </form>
                <div
                    className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>

                <div className="flex flex-col space-y-4">
                    <Link href={"https://github.com/Vladyslavua3"} target={"_blank"}>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-slate-300 rounded-md h-10 font-medium shadow-input bg-slate-900 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                        <span className="text-slate-300 dark:text-neutral-300 text-sm">
              GitHub
            </span>
                        <BottomGradient/>
                    </button>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/vladyslav-gershman/"} target={'_blank'}>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-slate-900 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                        <span className="text-slate-300 dark:text-neutral-300 text-sm">

              LinkedIn
            </span>
                        <BottomGradient/>
                    </button>
                    </Link>
                </div>
        </div>
        </div>
    );
};


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default Contact;