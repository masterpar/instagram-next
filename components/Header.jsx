import Image from 'next/image'
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'


function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

            {/*Letf - logo */}
            <div className="relative hidden lg:inline-grid h-12 w-24 mt-4 ml-4" >
                <Image
                    src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
                    layout='fill'
                    alt="instagram"
                    objectFit="contain"
                />
            </div>
            <div className="relative mt-4 w-8 h-8 lg:hidden flex-shrink-0 cursor-pointer items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2016/08/01/21/02/icon-1562139_960_720.png"
                    layout='fill'
                    alt="instagram"
                    objectFit="contain"
                />
            </div>


            {/*Middle - search input field */}
            <div className="max-w-xs ">
                <div className="relative  mt-1 p-3 rounded-md items-center ">
                    <div className="flex absolute pl-3 inset-y-0 items-center">
                        <MagnifyingGlassIcon  className="w-5 text-gray-500"/>
                    </div>
                    <input className="bg-gray-50 blck w-full pl-10 sm:text-sm
                            border-gray-300 focus:ring-black py-2 focus:ring-black rounded-md"
                           type="text" placeholder="Search"/>
                </div>
            </div>


            {/*Right - icons*/}
            <div className="flex items-center justify-end space-x-4">
                <HomeIcon className="navBtn"/>
                <Bars3Icon className="h-8 w-8 cursor-pointer md:hidden"/>
                <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn rotate-270 "/>
                    <div className="absolute -top-1 -right-2 text-xs w-5 h-5
                        bg-red-500 rounded-full text-white flex items-center justify-center">
                        3
                    </div>
                </div>
                <PlusCircleIcon className="navBtn"/>
                <UserGroupIcon className="navBtn"/>
                <HeartIcon className="navBtn"/>

                <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                     alt="profile user"
                     className="h-9 rounded-full cursor-pointer"
                />
            </div>

        </div>
        </div>
    )
}

export default Header;

