interface ModalCompProps {
    handleCloseModal: () => void;
    children: React.ReactNode;
}

export default function ModalComp({ handleCloseModal, children }: ModalCompProps){
    return(
        <div onClick={handleCloseModal} className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-xs z-50">
            <div onClick={(e) => e.stopPropagation()} className="p-10 w-full sm:w-[80%] max-w-xl rounded-lg border-2 bg-blue-50 border-[#c0c2c5]">
                { children }
            </div>
        </div>
    )
}

{/* <button onClickCapture={handleCloseModal} className="bg-[#2F80ED] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1C64D1]" onClick={handleCloseModal}>Close Modal</button> */}