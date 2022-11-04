import { createEffect, createSignal } from "solid-js";
import { getParam } from "@/helper/getter";
import { getStorage, setStorage } from "@/helper/storage";

import { ProductData, ProductList } from "@/interfaces/constants";

import ProductListData from "@/constants/products.json";

// Currency mainly based on Malaysia Ringgit, another module will be created
const SalesPage = () => {
    const param = getParam("id");

    const [productList, setProductList] = createSignal<ProductList[]>([]);

    createEffect(() => {
        const apiData: ProductData = ProductListData;
        const targetKey = param();
        const newProductList: ProductList[] = apiData[targetKey];
        setProductList(newProductList);
    })

    const updateProductList = () => {
        let newProductList = productList();
        newProductList.push({ id: 1, name: "New - In", price: 23 });
        setProductList([...newProductList]);
    };

    const addToCart = (id: number) => {
        const key = "cart";

        const cartList: number[] = getStorage(key, { parse: true }) ?? [];
        cartList.push(id);
        setStorage(key, cartList);
        
    };

    return (
        <>
            {(productList() ?? []).map((product: ProductList) => (
                <div>
                    <div>{product.name}</div>
                    <div>
                        <button
                            onClick={() => {
                                addToCart(product.id);
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default SalesPage;
