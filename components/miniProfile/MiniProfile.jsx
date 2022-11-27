import {signOut, useSession} from "next-auth/react";

function MiniProfile() {

    const { data: session} = useSession()

    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                src={session?.user.image}
                 alt=""
                className="w-16 h-16 rounded-full border"
            />
            <div className="flex-1 mx-4">
                <h2 className="font-semibold">{session.user.username}</h2>
                <h3 className="text-sm text-gray-400">{session.user.name}</h3>
            </div>

            <button
                onClick={(e) =>
                { e.preventDefault()
                    signOut()}
                 }
                className="text-blue-400 text-sm font-semibold">
                Sign out
            </button>
            
        </div>
    )
}

export default MiniProfile;
