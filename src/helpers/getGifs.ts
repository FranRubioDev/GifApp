import { GifT } from "../types";

export const getGifs = async(category: string): Promise<GifT[]> => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=xlElw7Rt4VfFozrVfHkRk4uNNM0TVDSS&q=${category}&limit=4`
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map((img: { id: string, title: string, images: { downsized_medium: { url: string } } }) => ({
        id: img.id,
        title: img.title,
        imageUrl: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}