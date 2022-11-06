import { createEffect, createSignal } from "solid-js";
import { getParam } from "@/helper/getter";

import { ProductData, Product } from "@/interfaces/constants";

import ProductListData from "@/constants/products.json";
import ProductList from "@/components/ProductList";

// Currency mainly based on Malaysia Ringgit, another module will be created
const SalesPage = () => {
    const param = getParam("id");

    const [productList, setProductList] = createSignal<Product[]>([]);

    createEffect(() => {
        const apiData: ProductData = ProductListData;
        const targetKey = param();
        const newProductList: Product[] = apiData[targetKey];
        setProductList(newProductList);
    })

    // const updateProductList = () => {
    //     let newProductList = productList();
    //     newProductList.push({ id: 1, name: "New - In", price: 23 });
    //     setProductList([...newProductList]);
    // };

    return (
        <>
            <ProductList data={productList()} />
        </>
    );
};

export default SalesPage;
