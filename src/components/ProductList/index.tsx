import { Product } from "@/interfaces/constants";
import ProductCard from "../ProductCard";
import styles from "./style.module.css";

interface ProductListProps {
    data: Product[];
}

const ProductList = (props: ProductListProps) => {
    return (
        <div class={styles.container}>
            {(props.data ?? []).map((product: Product) => (
                <ProductCard data={product} />
            ))}
        </div>
    );
};

export default ProductList;
