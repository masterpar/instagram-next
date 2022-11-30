import {modalState} from "../../atoms/modalAtoms";
import { Dialog } from "@headlessui/react";
import LayoutModal from "./LayoutModal";
import {useRef, useState} from "react";
import {CameraIcon} from "@heroicons/react/24/outline";
import { uploadPost } from "../../firebase/posts.firebase"

import {useRecoilState} from "recoil";
import {useSession} from "next-auth/react";


function ModalUpload() {

    const [open, setOpen ] = useRecoilState(modalState)
    const { data: session } = useSession()

    const filePickerRef = useRef(null);
    const captionRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    //Render Image Modal
    const addImageToPost = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    //Upload Post - Image
    const setUploadPost = async () => {

        if(loading) return
        setLoading(true)

        await uploadPost(session,captionRef, selectedFile)
            .then(() => {
            setLoading(false)
            setOpen(false)
            setSelectedFile(null)
        })
    }



    return (
            <LayoutModal open={open} setOpen={setOpen}>
                <div>
                    { selectedFile ? (
                        <img
                            src={selectedFile}
                             alt=""
                            onClick={() => setSelectedFile(null)}
                        />
                        )
                    : (
                            <div
                                onClick={() => filePickerRef.current.click()}
                                className="mx-auto flex items-center justify-center h-12 w-12
                        rounded-full bg-red-100 cursor-pointer"
                            >
                                <CameraIcon
                                    className="h5- w-6 text-red-600"
                                    aria-hidden="true"
                                />
                            </div>

                        )}


                    <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-900"
                        >
                            Cargar Imagen
                        </Dialog.Title>
                    </div>
                    <div>
                        <input
                        ref={filePickerRef}
                        type="file"
                        hidden
                        onChange={addImageToPost}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            type="text"
                            ref={captionRef}
                            className="border-none focus:ring-0 w-full text-center text-sm"
                            placeholder="Escribe una descripción..."
                        />
                    </div>
                    <div
                        className="mt-5 sm:mt-6"
                    >
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-transparent
                            shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm
                            disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-300"
                            onClick={setUploadPost}
                        >
                            { !loading ? 'Subir Post' : 'Subiendo...'}
                        </button>
                    </div>
                </div>
            </LayoutModal>

    )
}

export default ModalUpload;
