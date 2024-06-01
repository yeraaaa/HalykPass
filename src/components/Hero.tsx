import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className='h-screen flex justify-center items-center align-center text-center bg-gray-50'>
                <div className='mb-10'>
                    <h3 className=''>
                        Powered by Fertilitas Team
                    </h3>
                    <h1 className='md:text-5xl text-3xl tracking-tight mt-3 mb-3 font-extrabold'>
                        TOGETHER TO THE<br></br>
                    </h1>
                    <h1 className='md:text-5xl text-3xl tracking-tight mb-5 font-extrabold'>
                        <span className='text-[#006D58]'>BRIGHT FUTURE</span> 

                    </h1>
                    <h3 className='mb-5'>
                        Halyk makes everyone's day
                    </h3>
                    <Link href='./explain'>
                        <button className='text-[#006D58] bg-white border-2 border-[#006D58] rounded-md px-6 font-medium py-1 hover:bg-[#006D58] hover:text-white transition-colors duration-300'>
                            Chat
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}




