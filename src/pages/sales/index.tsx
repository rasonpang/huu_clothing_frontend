import { createEffect, createSignal } from "solid-js";
import { getParam } from "@/helper/getter";

import { ProductData, Product } from "@/interfaces/constants";

import ProductListData from "@/constants/products.json";
import ProductList from "@/components/ProductList";
import ProductFilter from "@/components/ProductFilter";
import SalesFilter from "@/components/SalesFilter";
import styles from './style.module.css';

// Currency mainly based on Malaysia Ringgit, another module will be created
const SalesPage = () => {
    const param = getParam("id");

    const [productList, setProductList] = createSignal<Product[]>([]);

    createEffect(() => {
        const apiData: ProductData = ProductListData;
        const targetKey = param();
        const newProductList: Product[] = apiData[targetKey];
        setProductList(newProductList);
    });

    return (
        <div class={styles.container}>
            <ProductFilter />
            <ProductList data={productList()} />
        </div>
    );
};

export default SalesPage;
