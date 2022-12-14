import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

function LayoutModal({ children, open, setOpen }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={setOpen}
            >
                <div className='flex items-end justify-center min-h-[800px]
                    sm:min-h-screen pt-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out- duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leaver="ease-in duration-200"
                        leaveForm="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        />
                    </Transition.Child>
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#2023
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out- duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 sm:translate-y-0 sm:scale-100"
                        leaver="ease-in duration-200"
                        leaveForm="opacity-100 sm:translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4
                            text-left overline-hiden show-xl transform transition-all sm:my-8 sm:align-middle
                            sm:max-w-sm sm:w-full sm:p-6">


                            { children}



                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default LayoutModal;
