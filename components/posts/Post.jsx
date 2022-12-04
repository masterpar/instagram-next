import {
    EllipsisHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    BookmarkIcon,
    FaceSmileIcon,
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartLike } from '@heroicons/react/24/solid'
import Comments from "../comments/comments";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";

import {sendComment} from "../../firebase/comment.firebase";
import {collection, onSnapshot, orderBy, query,doc, setDoc, deleteDoc} from "@firebase/firestore";
import {db} from "../../firebase";


//#Todo component
function Post({ id, username, image, profileImg, caption}) {

    const { data: session } = useSession()
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    //get comments
    useEffect(
        () => onSnapshot(query(
                collection(db,'posts', id, 'comments'),
                orderBy('timestamp','desc')
            ),
            (snapshot) => setComments(snapshot.docs)),
            [db]);

    //get likes
    useEffect(
        () =>  onSnapshot( collection(db, 'posts', id, 'likes'),
        (snapshot) =>  setLikes(snapshot.docs))
        ,[db, id])

    //compare Likes user
    useEffect(() => setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
        )
    , [likes]);


    //send likes pots button
    const likePost = async () => {

        if(hasLiked){
            await deleteDoc( doc(db,'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            })
        }
    }

    //send button comment
    const getSendComment = async (e) => {
      e.preventDefault();

        const commentToSend = comment
        setComment("")
        await sendComment(id, commentToSend, session)

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
                    { hasLiked ? (
                        <HeartLike
                            className="btn text-red-600"
                            onClick={likePost}
                        />
                    ) : (
                        <HeartIcon
                            className="btn"
                            onClick={likePost}
                        />
                    )
                    }
                    <ChatBubbleOvalLeftEllipsisIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
                    <BookmarkIcon className="btn"/>

            </div>

            {/*Like*/}
            { likes.length > 0 && (
                <p className="ml-5 font-bold text-md mb-4"> { likes.length } Likes</p>
            )}

            {/*caption*/}
            { session &&
                <div className="mb-3 ml-5 truncate flex items-center">
                <span className='font-bold '>
                    {username}</span>
                    <p className="ml-1 font-normal "> { caption }</p>

                </div>
            }


            {/*comments*/}
                <Comments comments={comments} setComments={setComments} />

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
                        onClick={getSendComment}
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
