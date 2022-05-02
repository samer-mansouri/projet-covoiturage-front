import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import AuthService from '../services/auth.service'
import TokenService from '../services/token.service'
import { Redirect } from 'react-router-dom'

export default function DeleteAccountModal({ openModal, toggleOpenModal }) {
  const [open, setOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [formRef, setFormRef] = useState(null)

  const submitForm = () => {
    console.log(formRef)
      formRef.current.submitForm();
  };

  const deleteAccount = () => {
    AuthService.deleteMyAccount()
        .then(res => {
            console.log(res);
            TokenService.removeUser();
            toggleOpenModal();
            setDeleted(true)
        }).catch(err => {
            console.log(err);
        })
};



  console.log(openModal)
  const cancelButtonRef = useRef(null)

  useEffect(()=> {
    if (openModal == true) {
      setOpen(true)
    }
  })  
  
  if (deleted) {
    return <Redirect to="/" />
  }
    
  return (
    <Transition.Root show={open} as={Fragment} onClose={toggleOpenModal}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={() => toggleOpenModal()} onClose={() => toggleOpenModal()}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <h2 className="text-gray-500 text-lg font-medium mb-4 mt-8 ml-5">
                    Vous voulez vraiment supprimer votre compte ?
                </h2>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => deleteAccount()}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 rounded-md text-white bg-[#ffc65e] hover:bg-[#e0ae51] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc65e] sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Oui
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc65e] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() =>{ 
                    setOpen(false)
                    toggleOpenModal()
                  }}
                  ref={cancelButtonRef}
                >
                  Fermer
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}