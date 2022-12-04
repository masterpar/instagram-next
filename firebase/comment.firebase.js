import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from "../firebase";


 export const sendComment = async (id, commentToSend, session) => {

            await addDoc( collection(db, 'posts', id, 'comments'),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })

    }