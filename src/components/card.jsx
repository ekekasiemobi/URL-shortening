

function Card(props) {
  return (
    <>
        <main >
            <div className='bg-white w-[25vw] h-56 p-7 rounded-lg flex gap-5 flex-col'>
                <div className="-mt-13">
                    <img className="bg-[#4B3F6B] p-4 rounded-full w-15" src={props.image} alt="" />
                </div>
                <div className="flex gap-5 flex-col">
                    <h1 className="font-bold poppins">{props.title}</h1>
                    <p className="text-sm max-w-60 text-[#79787B]">{props.description}</p>
                </div>
            </div>
        </main>
    
    </>
  )
}

export default Card