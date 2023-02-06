import { createEffect, createSignal } from "solid-js";
import { getParam } from "@/helper/getter";

import { ProductData, Product } from "@/interfaces/constants";

import ProductListData from "@/constants/products.json";
import ProductList from "@/components/ProductList";
import SalesFilter from "@/components/SalesFilter";

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
        <>
            <SalesFilter />
            <ProductList data={productList()} />
        </>
    );
};

export default SalesPage;
