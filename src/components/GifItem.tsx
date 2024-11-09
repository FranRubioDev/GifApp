import { GifT } from "../types";

export default function GifItem({ title, imageUrl }: GifT) {

  return (
      <div className="card bg-white shadow-md rounded max-h-fit">

          <img className="w-sm rounded-" src={imageUrl} alt={title} />
          <p className="text-sm text-center m-2">{title}</p>
          
      </div>
  );
}