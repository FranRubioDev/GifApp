import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifT } from '../types';



export const useFetchGifs = (category: string) => {
 
    const [images, setImages] = useState<GifT[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            try {
                const newImages = await getGifs(category);
                setImages(newImages);
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getImages();
    }, [category]);

    return {
        images,
        isLoading
    };
};
