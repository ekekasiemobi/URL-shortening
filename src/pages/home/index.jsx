import HeroImage from '../../assets/illustration-working.svg'
import Card from '../../components/card'
import Icon1 from '../../assets/icon-brand-recognition.svg'
import Icon2 from '../../assets/icon-detailed-records.svg'
import Icon3 from '../../assets/icon-fully-customizable.svg'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { useState } from 'react'

function Home() {
    const [inputUrl, setInputUrl] = useState("")
    const [shortenedUrl, setShortenedUrl] = useState("")
    const [error, setError] = useState("")

    const handleShorten = async (e) => {
        e.preventDefault();
        if (!inputUrl) return;

        try {
            const response = await fetch('https://cleanuri.com/api/v1/shorten', {
                method: 'POST',
                body: JSON.stringify({
                    url: inputUrl,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            
            if (!response.ok) {
                throw new Error("Failed to fetch urlShortner");
            }
            
            const data = await response.json(); 
            setShortenedUrl(data); 
        } catch (error) {
            setError(error.message); 
        }
    };

  return (
    <>
        <Nav />

        <main>
          

            <div className=' w-full md:max-w-[80vw] max-w-[90vw] mx-auto mt-10'>
                <div className='flex flex-col md:flex-row justify-center align-middle items-center gap-15 '> 

                    <div className='md:hidden'>
                        <img src={HeroImage} alt="" />
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-3 justify-center md:justify-start items-center md:items-start text-center md:text-left'>
                        <h1 className='lg:text-6xl text-4xl text-[#34313C] font-bold poppins flex justify-center items-center '>More than just shorter links</h1>
                        <p className='text-[#79787B] md:text-sm md:max-w-80 max-w-65'>Build your brand's recorgnition and get detailed insights on how your links are performing</p>
                        <p></p>
                        <button className='bg-[#2AD2D5] md:px-5 px-12 md:py-1 py-3.5 rounded-3xl text-white md:text-sm text-1xl w-fit hover:bg-[#9CE2E2] cursor-pointer'>Get Started</button>
                    </div>

                    <div className='md:w-[50%] md:block hidden'>
                        <img src={HeroImage} alt="" />
                    </div>
                
                </div>
            </div>


            <div className='bg-[#F0F1F6] md:pb-24 pb-20 md:mt-20 mt-28'>
                <div className='w-full md:max-w-[80vw] max-w-[90vw] mx-auto relative'>

                    <div className='relative z-10 -top-11 w-full short py-7 md:px-15 px-5 rounded-2xl'>
                        <form onSubmit={handleShorten} action="" className='flex flex-col md:flex-row md:gap-10 gap-3'>
                            <input className='bg-white md:w-[80%] p-3 rounded' type="text" placeholder='Shorten a link here!' name='inputUrl'value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
                            <button className='bg-[#2AD2D5] px-5 py-3 rounded text-white text-sm md:w-fit hover:bg-[#9CE2E2] cursor-pointer'>Shorten It!</button>
                        </form>
                    </div>

                    {(error || shortenedUrl) && (
                        <div className='relative z-20  rounded border border-[#D9DCE2] bg-[#FFFFFF] p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm'>
                            {error ? (
                                <span className='text-sm text-red-500 break-all'>{error}</span>
                            ) : (
                                <>
                                    <span className='text-sm text-[#34313C] break-all'>{inputUrl}</span>
                                    <a href={shortenedUrl} target='_blank' className='text-[#2AD2D5] font-medium underline break-all'>
                                        {shortenedUrl}
                                    </a>
                                </>
                            )}
                        </div>
                    )}

                    <div className='w-full text-center md:pt-20 pt-10 flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-4xl text-[#34313C] font-bold poppins'>Advanced Statistics</h1>
                        <p className='max-w-md text-[#79787B]'>Track how your links are performing accross the web with our advanced statistics dashboard</p>
                    </div>

                    <div className='flex flex-col md:flex-row md:gap-7 gap-15 pt-15'>
                        <Card image={Icon1} title="Brand Recognition" description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."/>
                        <Card image={Icon2} title="Detailed Records" description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                        <Card image={Icon3} title="Fully Customizable" description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."/>

                    </div>
                </div>

                

            </div>

            <div className='bg-[#3A3154] h-75 link flex flex-col justify-center items-center gap-7 text-center'>
                <h1 className='text-5xl text-white font-bold'>Boost your links today</h1>
                <button className='bg-[#2AD2D5] md:px-5 px-12 md:py-1 py-3.5 rounded-3xl text-white md:text-sm text-1xl flex justify-center align-middle w-fit hover:bg-[#9CE2E2] cursor-pointer items-center'>Get Started</button>
            </div>
           
        </main>

        <Footer/>
    
    </>
  )
}

export default Home