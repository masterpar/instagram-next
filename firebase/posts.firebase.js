import {addDoc, collection, doc, serverTimestamp, updateDoc} from "@firebase/firestore";
import {db, storage} from "../firebase";
import {getDownloadURL, ref, uploadString} from "@firebase/storage";
import {useSession} from "next-auth/react";


export const uploadPost = async (session, captionRef, selectedFile) => {

    //1) create a post and add to firestore 'posts' collection
    //2) get the post Id for the newly created post
    // 3) get a download URL from fb storage and update the original post with image
    const docRef = await addDoc(collection(db, 'posts'),{
        username: session.user.username,
        caption: captionRef.current.value,
        profileImg: session.user.image,
        timestamp: serverTimestamp()
    })

    const imageRef = ref(storage, `posts(${docRef.id}/image`)

    return await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id),{
            image: downloadURL
        })
    })


}