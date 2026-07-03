import HeroImage from '../../assets/illustration-working.svg'
import Card from '../../components/card'
import Icon1 from '../../assets/icon-brand-recognition.svg'
import Icon2 from '../../assets/icon-detailed-records.svg'
import Icon3 from '../../assets/icon-fully-customizable.svg'

function Home() {
  return (
    <>
        <main>
            <div className='w-full md:w-[80vw] mx-auto mt-10'>
                <div className='flex justify-center align-middle items-center gap-15'> 
                    <div className='w-[50%] flex flex-col gap-3'>
                        <h1 className='text-6xl text-[#34313C] font-bold poppins'>More than just shorter links</h1>
                        <p className='text-[#79787B] text-sm max-w-80'>Build your brand's recorgnition and get detailed insights on how your links are performing</p>
                        <p></p>
                        <button className='bg-[#2AD2D5] px-5 py-1 rounded-3xl text-white text-sm w-fit hover:bg-[#9CE2E2] cursor-pointer'>Get Started</button>
                    </div>

                    <div className='w-[50%]'>
                        <img src={HeroImage} alt="" />
                    </div>
                
                </div>
            </div>


            <div className='bg-[#F0F1F6] h-150 mt-20'>
                <div className='w-full md:w-[80vw] mx-auto relative'>

                    <div className='absolute bg-[#3A3154] h-25 -top-11 w-full short py-7 px-15 rounded-2xl'>
                        <form action="" className='flex gap-10'>
                            <input className='bg-white w-[80%] p-3 rounded' type="text" placeholder='Shorten a link here!' />
                            <button className='bg-[#2AD2D5] px-5 py-3 rounded text-white text-sm w-fit hover:bg-[#9CE2E2] cursor-pointer'>Shorten It!</button>
                        </form>

                    </div>

                    <div className='w-full text-center pt-32 flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-4xl text-[#34313C] font-bold poppins'>Advanced Statistics</h1>
                        <p className='max-w-md text-[#79787B]'>Track how your links are performing accross the web with our advanced statistics dashboard</p>
                    </div>

                    <div className='flex gap-7 pt-15'>
                        <Card image={Icon1} title="Brand Recognition" description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."/>
                        <Card image={Icon2} title="Detailed Records" description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                        <Card image={Icon3} title="Fully Customizable" description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."/>

                    </div>
                </div>

                

            </div>

            <div className='bg-[#3A3154] h-75 link flex flex-col justify-center items-center gap-7'>
                <h1 className='text-5xl text-white font-bold'>Boost your links today</h1>
                 <button className='bg-[#2AD2D5] px-6 py-2 rounded-3xl text-white text-sm w-fit hover:bg-[#9CE2E2] cursor-pointer'>Get Started</button>
            </div>
           
        </main>
    
    </>
  )
}

export default Home