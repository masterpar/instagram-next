import {
    EllipsisHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    BookmarkIcon,
    FaceSmileIcon,
} from '@heroicons/react/24/outline'
import Comments from "../comments/comments";
import {useSession} from "next-auth/react";
import {useState, useEffect} from "react";

import {addDoc, collection, onSnapshot, query, serverTimestamp, orderBy} from "@firebase/firestore";
import {db} from "../../firebase";



function Post({ id, username, image, profileImg, caption}) {

    const { data: session } = useSession()
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(
        () => onSnapshot(query(
            collection(db,'posts', id, 'comments'),
            orderBy('timestamp','desc')
            ),
        (snapshot) => setComments(snapshot.docs)),
     [db]);


    //send comment
    const sendComment = async (e) => {
      e.preventDefault();

        const commentToSend = comment
        setComment("")

        await addDoc( collection(db, 'posts', id, 'comments'),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })

    }

    return (
        <div className="bg-white my-7 border rounded-lg ">

            {/*Header*/}
            <div className="flex items-center p-3">
                <img
                    src={profileImg}
                    alt=''
                    className="rounded-full h-12 w-12 object-contain
                               border p-1 mr-3  cursor-pointer"
                />
                <p className="flex-1 font-bold">
                    { username }
                </p>
                <EllipsisHorizontalIcon className="h-5"/>
            </div>

            {/*img*/}
            <img src={image}
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
            <p className="ml-5 font-medium text-sm mb-4"> 12,300 Likes</p>

            {/*caption*/}
            { session &&
                <p className="mb-3 ml-5 truncate flex items-center">
                <span className='font-bold '>
                    {username}</span>
                    <p className="ml-1 font-normal "> { caption }</p>

                </p>
            }


            {/*comments*/}
            { comments.length > 0 && (
                <Comments comments={comments} />
            )}

            {/*input box*/}
            {session &&
                <form className="flex items-center px-4 py-2 border-t">
                    <FaceSmileIcon className="h-7"/>
                    <input
                        type="text"
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                        placeholder="Añadir Comentario ..."
                        className="flex-1 focus:ring-0 border-0"/>
                    <button
                        type="submit"
                        disabled={!comment.trim()}
                        onClick={sendComment}
                        className='font-semibold text-blue-400 mr-3'>
                        Enviar
                        <PaperAirplaneIcon className="navBtn ml-2"/>
                    </button>
                </form>
            }
        </div>
    )
}

export default Post;
