import Image, {StaticImageData} from "next/image"

export default function ProductCart(props:{title:string, price:number, img:StaticImageData}) {
    return (
        <div>
            <Image src={props.img} alt="product" />
            <h3 className="font-bold text-lg mt-3">{props.title}</h3>
            <p className="font-bold text-lg">${props.price}</p>
        </div>
    );
}
    