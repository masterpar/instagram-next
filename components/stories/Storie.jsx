

function Storie({ username,avatar }) {
    return (
        <div>
            <img
                src={avatar}
                alt=''
                className="rounded-full h-12 w-12 p-0.5 border-red-500 border-2
                            object-contain cursor-pointer hover:scale-110 transition
                            transform duration-200 ease-out"
            />
                 <p className="text-xs w-14 truncate text-center">
                     { username }
                 </p>
            
        </div>
    )
}

export default Storie;
