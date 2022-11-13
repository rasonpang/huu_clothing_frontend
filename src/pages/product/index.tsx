import styles from "./style.module.css";
import { carousel } from "@/constants/events.json";
import { getParam } from "@/helper/getter";
import Carousel from "@/components/Carousel";
import { createSignal, onMount } from "solid-js";

const ProductPage = () => {
    const param = getParam("id");

    const [product, setProduct] = createSignal({
        name: "Product Name",
        price: 5,
        availableSize: ["S", "M", "L", "XL", "XXL"],
        description: "Product Description",
    });
    const [size, setSize] = createSignal("");

    onMount(() => {
        if (product()?.availableSize.length > 0) {
            setSize(product().availableSize[0]);
        }
    });

    return (
        <div>
            <Carousel data={carousel} />
            <div>{product().name}</div>
            <div>{product().price}</div>
            <div>Size: {size()}</div>

            <div>
                <span>Add to cart</span>
                <span>Favorite</span>
            </div>

            <div>{product().description}</div>
        </div>
    );
};

export default ProductPage;
