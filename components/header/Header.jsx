import Image from 'next/image'
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import {useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useRecoilState} from "recoil";
import {modalState} from "../../atoms/modalAtoms";


function Header() {

    const router = useRouter()
    const { data: session } = useSession()
    //recoil
    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

            {/*Letf - logo */}
            <div
                className="relative hidden lg:inline-grid h-12 w-24 mt-4 ml-4"
                onClick={() => router.push('/')}
            >
                <Image
                    src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
                    alt="instagram"
                    width="300"
                    height="300"
                />
            </div>
            <div
                className="relative mt-4 w-8 h-8 lg:hidden flex-shrink-0 cursor-pointer items-center"
                onClick={() => router.push('/')}
            >
                <Image
                    src="https://cdn.pixabay.com/photo/2016/08/01/21/02/icon-1562139_960_720.png"
                    alt="instagram"
                    width="300"
                    height="300"
                />
            </div>


            {/*Middle - search input field */}
            <div className="max-w-xs ">
                <div className="relative  mt-1 p-3 rounded-md items-center ">
                    <div className="flex absolute pl-3 inset-y-0 items-center">
                        <MagnifyingGlassIcon  className="w-5 text-gray-500"/>
                    </div>
                    <input className="bg-gray-50 blck w-full pl-10 sm:text-sm
                            border-gray-300 focus:ring-black py-2 focus:ring-0 rounded-md"
                           type="text" placeholder="Search"/>
                </div>
            </div>

                {/*Right - icons*/}
                { session
                    ? <div className="flex items-center justify-end space-x-4 mr-4">
                        <HomeIcon
                            className="navBtn"
                            onClick={() => router.push('/')}
                        />
                        <Bars3Icon className="h-8 w-8 cursor-pointer md:hidden"/>
                        <div className="relative navBtn">
                            <PaperAirplaneIcon className="navBtn rotate-270 "/>
                            <div className="absolute -top-1 -right-2 text-xs w-5 h-5
                        bg-red-500 rounded-full text-white flex items-center justify-center">
                                3
                            </div>
                        </div>
                        <PlusCircleIcon
                            onClick={() => setOpen(true)}
                            className="navBtn"
                        />
                        <UserGroupIcon className="navBtn"/>
                        <HeartIcon className="navBtn"/>

                        <img src={session?.user?.image }
                             alt="profile user"
                             className="h-9 rounded-full cursor-pointer"
                        />
                    </div>
                    : <div className="flex items-center justify-end space-x-4 mr-4">
                        <HomeIcon className="navBtn"/>
                        <Link href="/auth/signIn" >Iniciar Sesión</Link>
                    </div>

                }


        </div>
        </div>
    )
}

export default Header;

