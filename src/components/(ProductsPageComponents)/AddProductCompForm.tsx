export default function AddProductCompForm() {

    const inputFields = [
        { label: 'Nome', inputType: 'text', id: 'name', name: 'name' },
        { label: 'Categoria', inputType: 'text', id: 'category', name: 'category' },
        { label: 'Quantidade', inputType: 'number', id: 'quantity', name: 'quantity' },
        { label: 'Preço', inputType: 'number', id: 'price', name: 'price' },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="space-y-4">
            {inputFields.map((field) =>
                <div>
                    <label htmlFor={field.id} className="block text-sm font-medium text-[#111827]">
                        {field.label}
                    </label>
                    <input
                        id={field.id}
                        name={field.name}
                        type={field.inputType}
                        min={0}
                        className="mt-1 block w-full rounded-md border-2 border-[#E5E7EB] bg-white px-3 py-2 shadow-sm focus:border-[#2F80ED] sm:text-sm focus:outline-none duration-200 ease-in-out"
                    />
                </div>
            )}

            <div className="flex gap-x-2 justify-end">
                <button type="button" className="bg-white text-[#2F80ED] border border-[#2F80ED] px-6 py-3 rounded-lg shadow hover:bg-[#EBF4FF] cursor-pointer">Descartar</button>
                <button
                    type="submit"
                    className="cursor-pointer bg-[#2F80ED] text-white px-4 py-2 rounded-lg shadow hover:bg-[#1C64D1] duration-200 ease-out"
                >
                    Adicionar Produto
                </button>
            </div>
        </form>
    );
}