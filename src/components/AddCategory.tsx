import { useState } from "react";


type AddCategoryProps = {
    onNewCategory: (value: string) => void;
}

export default function AddCategory({ onNewCategory }: AddCategoryProps) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    };


    return (
        <form onSubmit={onSubmit} className="flex justify-center mb-4">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <button
                type="submit"
                className="uppercase font-black ml-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-purple-500 transition-all">
                    Buscar
                </button>
        </form>
    );
    
}

