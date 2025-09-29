export default function ModalComp({ handleCloseModal }){
    return(
        <div onClick={handleCloseModal} className="fixed inset-0 flex justify-center items-center bg-black/40">
            <div onClick={(e) => e.stopPropagation()} className="p-10 rounded-lg border-2 bg-blue-50 border-blue-500">
                <button className="bg-[#2F80ED] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1C64D1]" onClick={handleCloseModal}>Close Modal</button>
            </div>
            
        </div>
    )
}