import styles from "./style.module.css";
import { carousel } from "@/constants/events.json";
import { getParam } from "@/helper/getter";
import Carousel from "@/components/Carousel";
import { createSignal, onMount } from "solid-js";
import SizeSelector from "@/components/SizeSelector";

export interface ProductSize {
    name: string;
    price: number;
}

const ProductPage = () => {
    const param = getParam("id");

    const [product, setProduct] = createSignal({
        name: "Product Name",
        sizes: [
            { name: "S", price: 5 },
            { name: "M", price: 5 },
            { name: "L", price: 6 },
            { name: "XL", price: 6.5 },
            { name: "XXL", price: 7 },
        ],
        description: "Product Description",
    });
    const [selectedSize, setSelectedSize] = createSignal(0);

    onMount(() => {
        if (product()?.sizes.length > 0) setSelectedSize(0);
    });

    return (
        <div>
            <Carousel data={carousel} />

            <div class={styles.title_container}>
                <h4>{product().name}</h4>
                <span class={styles.favorite_btn}>Favorite</span>
            </div>

            <div>
                {product().description}
                (Web Dev Simplified 3 line tutorial)
            </div>

            <hr />

            <div>RM {product().sizes[selectedSize()].price}</div>

            <div>
                <h3>Size</h3>
                <SizeSelector
                    sizes={product().sizes}
                    onClick={(newVal: number) => {
                        setSelectedSize(newVal);
                    }}
                    value={selectedSize}
                />
            </div>

            <div class={styles.order_bar}>
                <span class={styles.add_cart_btn}>Add to cart</span>
                <span>Quantity: 1</span>
            </div>
        </div>
    );
};

export default ProductPage;
