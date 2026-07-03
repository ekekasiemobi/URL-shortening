import Logo from '.././assets/logo.svg'

function Nav () {
  return (
    <>
        <nav className='flex p-7'>
            
            <div className='w-[80vw] mx-auto flex justify-between align-middle items-center'>
                <ul className='flex gap-5'>
                    <img src={Logo} alt="" />
                    <li><a className='text-[#79787B] font-bold hover:text-black' href="">Features</a></li>
                    <li><a className='text-[#79787B] font-bold hover:text-black' href="">Pricing</a></li>
                    <li><a className='text-[#79787B] font-bold hover:text-black' href="">Resources</a></li>
                </ul>

                <ul className='flex gap-5 align-middle items-center'>
                    <li><a className='text-[#79787B] font-bold hover:text-black' href="">Login</a></li>
                    <button className='bg-[#2AD2D5] hover:bg-[#9CE2E2] cursor-pointer px-4 py-1 rounded-3xl text-white text-sm'>Sign Up</button>
                </ul>

            </div>
            

        </nav>
    </>
  )
}

export default Nav 