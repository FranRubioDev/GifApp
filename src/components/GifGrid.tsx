import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifT, GifGridProps } from "../types";
import GifItem from './GifItem';

export default function GifGrid({ category }: GifGridProps) {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className="text-white text-4xl font-semibold mb-4">{category}</h3>

            {isLoading && <p>Loading...</p>}

            <ol className="flex gap-5">
                {images.map(({ id, title, imageUrl }: GifT) => (
                    <GifItem
                        key={id}
                        id={id}
                        title={title}
                        imageUrl={imageUrl}
                        category={category}
                    />
                ))}
            </ol>
        </>
    );
}