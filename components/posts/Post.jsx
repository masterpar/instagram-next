import {
    EllipsisHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    BookmarkIcon,
    FaceSmileIcon,
} from '@heroicons/react/24/outline'



function Post({ id, username, img, caption}) {
    return (
        <div className="bg-white my-7 border rounded-lg mx-7">

            {/*Header*/}
            <div className="flex items-center p-3">
                <img
                    src={img}
                    alt={username}
                    className="rounded-full h-12 w-12 object-contain
                               border p-1 mr-3  cursor-pointer"
                />
                <p className="flex-1 font-bold">
                    { username }
                </p>
                <EllipsisHorizontalIcon className="h-5"/>
            </div>

            {/*img*/}
            <img src='https://cdn.pixabay.com/photo/2022/10/28/11/14/leaves-7552915_960_720.png'
                   alt={username}
                   className="object-cover w-full"
            />

            {/*Buttons*/}
            <div className="flex ml-4 py-3 justify-between">
                <div className="flex ">
                    <HeartIcon className="btn"/>
                    <ChatBubbleOvalLeftEllipsisIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
                    <BookmarkIcon className="btn"/>

            </div>

            {/*Like*/}
            <p className="ml-5 font-medium text-sm "> 12,300 Likes</p>

            {/*caption*/}
            <p className="py-2 ml-5 truncate">
                <span className='font-bold mr-1'>
                    {username}
                </span>
            </p>

            {/*comments*/}

            {/*input box*/}
            <form className="flex items-center px-4 py-2 border-t" >
                <FaceSmileIcon className="h-7"/>
                <input
                    type="text"
                    placeholder="add comment..."
                    className="flex-1 focus:ring-0 border-0" />
                <button
                    className='font-semibold text-blue-400 mr-3'>
                    Post
                </button>
            </form>
        </div>
    )
}

export default Post;
