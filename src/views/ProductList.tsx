import Image from "next/image"
import P6 from "/public/p6.png"
import P4 from "/public/p4.png"
import P5 from "/public/p5.png"


import ProductCart from "@/components/ProductCart";

export default function ProductList() {
    return (
        <div className="flex justify-evenly mt-16">
            <ProductCart title="Flex Sweatshirt" price={175} img={P6} />
            <ProductCart title="Flex SweatPants" price={175} img={P4} />
            <ProductCart title="Pink Fieece SweatPants" price={195} img={P5} />
        </div>
    );
}
    