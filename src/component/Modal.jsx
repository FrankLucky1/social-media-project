import React from 'react'

const Modal = ({children}) => {
    const isOpen = true
  return (
    <>
      {isOpen && (
          <div className="fixed z-50 overflow-y-auto md:top-10 w-full max-md:top-3 top-[5%] left-0" id="modal">
          <div className="flex items-center justify-center height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"/>
            </div>
            {/* <span className="hidden sm:inline-block sm:align-middle sm:h-auto">&#8203;</span> */}
            <div className="inline-block align-center rounded-[30px] max-h-[60%] bg-white no-scrollbar max-lg:overflow-y-auto h-full text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:align-middle sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

            {children}
            </div>
          </div>
        </div>
       
      )}
    </>
  )
}

export default Modal