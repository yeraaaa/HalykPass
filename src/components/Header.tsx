import Image from "next/image"
import Link from 'next/link'


export default function Header() {
    return (
        <>
            <div className="flex px-6 py-4 items-center justify-between w-full backdrop-blur-lg">
                <div className="flex items-center text-center gap-4 md:gap-10">
                    <Link href="./" className="font-bold">
                        <Image width={100} height={50}  src="/logo.png" alt='logo'/>
                    </Link>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium">
                        <Link className="hover:text-[#006D58]" href='./chat'>HalykChat</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium ">
                        <Link className="hover:text-[#006D58]" href='./pass'>HalykPass</Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}
