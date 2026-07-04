import Logo from '.././assets/logo.svg'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
        <nav className='flex p-7'>
            
            
            <div className='w-[80vw] mx-auto flex justify-between align-middle items-center relative'>
                <ul className='flex gap-5'>
                    <img src={Logo} alt="" />
                    <li><Link className='text-[#79787B] font-bold hover:text-black hidden' to="">Features</Link></li>
                    <li><Link className='text-[#79787B] font-bold hover:text-black hidden' to="">Pricing</Link></li>
                    <li><Link className='text-[#79787B] font-bold hover:text-black hidden' a="">Resources</Link></li>
                </ul>

                <ul className='md:flex gap-5 align-middle items-center hidden'>
                    <li><a className='text-[#79787B] font-bold hover:text-black' href="">Login</a></li>
                    <button className='bg-[#2AD2D5] hover:bg-[#9CE2E2] cursor-pointer px-4 py-1 rounded-3xl text-white text-sm'>Sign Up</button>
                </ul>

                {isOpen ? <button onClick = {toggleMenu}><FaTimes /></button> : <button onClick={toggleMenu}><FaBars /></button>}

                {isOpen && 
                
                    <div className='w-full min-w-[90vw] mx-auto  bg-[#3A3154] px-5 py-9 rounded flex flex-col justify-center items-center align-middle text-center gap-10 absolute top-10 left-1/2 -translate-x-1/2'>

                        {/* <button className='absolute top-0' onClick={toggleMenu}><FaTimes /></button> */}

                        <ul className='flex flex-col gap-5'>
                    
                            <li><a className='text-white font-bold hover:text-black' onClick={toggleMenu} href="">Features</a></li>
                            <li><a className='text-white font-bold hover:text-black' onClick={toggleMenu} href="">Pricing</a></li>
                            <li><a className='text-white font-bold hover:text-black' onClick={toggleMenu} href="">Resources</a></li>
                        </ul>

                        <ul className='flex flex-col gap-5 align-middle items-center'>
                            <li><a className='text-white font-bold hover:text-black'onClick={toggleMenu} href="">Login</a></li>

                            <button className='bg-[#2AD2D5] md:px-5 px-20 md:py-1 py-3 rounded-3xl text-white md:text-sm text-1xl flex justify-center align-middle w-fit hover:bg-[#9CE2E2] cursor-pointer items-center font-bold'onClick={toggleMenu} >Sign Up</button>
                        </ul>

                    </div>
                }

            </div>
            

        </nav>
    </>
  )
}

export default Nav 