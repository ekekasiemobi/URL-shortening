import FaceBook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pintrest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'
import Logo from '../assets/logo.svg'

function Footer() {
  return (
    <>
        <footer className='pt-15 pb-15 bg-[#242028]'>
            <div className='text-white flex w-full md:w-[80vw] mx-auto justify-between items-start'>

                <img className='footerImage' src={Logo} alt="" />

                <ul className='flex flex-col gap-3'>
                    <li><a className='font-bold' href="">Features</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Link Shortening</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Brand Links</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Analytics</a></li>
                </ul>

                <ul className='flex flex-col gap-3'>
                    <li><a className='font-bold' href="">Resources</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Blog</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Developers</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Support</a></li>
                </ul>

                <ul className='flex flex-col gap-3'>
                    <li><a className='font-bold' href="">Comapny</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">About</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Our Team</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Careers</a></li>
                    <li><a className='text-[#79787B] hover:text-[#35CDCC]' href="">Contacts</a></li>
                    
                </ul>

                <div className='flex gap-7'>
                    <img className='w-4 h-4 social-icon' src={FaceBook} alt="" />
                    <img className='w-4 h-4 social-icon' src={Twitter} alt="" />
                    <img className='w-4 h-4 social-icon' src={Pintrest} alt="" />
                    <img className='w-4 h-4 social-icon' src={Instagram} alt="" />
                </div>

            </div>
        </footer>
    
    </>
  )
}

export default Footer