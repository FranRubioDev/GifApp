import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid  from "./components/GifGrid";


export default function App() {
    const [categories, setCategories] = useState(['Dragon Ball Z', 'Picachu']);

    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories,]);
    };

    return (
        <>
            <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-8 shadow-lg">
                <h1 className="text-center text-6xl text-white font-extrabold drop-shadow-2xl">GIF App</h1>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-10">
            <p className="text-s text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2 max-w-fit shadow-md">Powered by GIPHY</p>   
                <div className="flex justify-center mb-8">
                    <AddCategory onNewCategory={onAddCategory} />
                </div>

                <div className="grid grid-cols-1 gap-10">
                    {categories.map((category) => (
                        <div key={category} className="">
                            <GifGrid key={category} category={category} />
                        </div>
                    ))}
                </div>

 
            </div>
        </>
    );
}
