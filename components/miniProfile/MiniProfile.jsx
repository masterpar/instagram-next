
function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                 alt=""
                className="w-16 h-16 rounded-full border"
            />
            <div className="flex-1 mx-4">
                <h2 className="font-semibold">Cristhiancarranza</h2>
                <h3 className="text-sm text-gray-400">Cristhian Carranza</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">
                Sign out
            </button>
            
        </div>
    )
}

export default MiniProfile;
