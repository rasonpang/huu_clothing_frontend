import styles from "./style.module.css";
import { carousel } from "@/constants/events.json";
import { getParam } from "@/helper/getter";
import Carousel from "@/components/Carousel";
import { createSignal, onMount } from "solid-js";
import SizeSelector from "@/components/SizeSelector";
import OrderBar from "@/components/OrderBar";
import Description from "@/components/Description";

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
        description:
            "Product Description Web Dev Simplified 3 line tutorial ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhhashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhhashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh ashjdkdhajksdhasdjkashdhh",
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

            <Description>{product().description}</Description>

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
        </div>
    );
};

export default ProductPage;
