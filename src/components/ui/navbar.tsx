import React, {useState} from 'react'
import {navLinks} from "../../lib/data";
import Link from "next/link";
import close from '../../../images/close.svg'
import menu from '../../../images/menu.svg'
import Image from "next/image";


const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={` w-full flex items-center sm:px-16 px-6
    py-5 fixed top-0 z-20 `}>
            <div className="w-full flex justify-between items-center
      max-w-7xl mx-auto">
                <Link href={'/'} className='flex items-center gap-2'
                      onClick={() => {
                          setActive('')
                          window.scroll(0, 0)
                      }}>
                    <p className='text-white text-[18px]
            font-bold cursor-pointer flex'>Gershman &nbsp;
                        <span className='sm:block hidden'>| Frontend Developer</span></p>
                </Link>
                <ul className='list-none hidden sm:flex
          flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`
                  ${active === link.title
                            ? 'text-white'
                            : 'text-secondary'}
                  hover:text-white text-[18px]
                  font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1
          justify-end items-center">
                    <Image src={toggle ? close : menu} alt={'menu'}
                           className="w-[28px]  h-[28px]
                    object-contain cursor-pointer"
                           onClick={() => setToggle(!toggle)}/>
                </div>

                <div className={`${!toggle ? 'hidden' : 'flex'} p-6
          black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl`}>
                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                        {navLinks.map((link) => (
                            <li key={link.id} className={`
                  ${active === link.title
                                ? 'text-white'
                                : 'text-secondary'}
                  font-poppins font-medium
                  cursor-pointer text-[16px]`}
                                onClick={() => {
                                    setToggle(!toggle)
                                    setActive(link.title)
                                }}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar