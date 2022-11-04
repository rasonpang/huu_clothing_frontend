import { createSignal, For, onMount } from "solid-js";
import { getParam } from "@/helper/getter";
import ProductListData from "@/constants/products.json";
import { getStorage, setStorage } from "@/helper/storage";

// Currency mainly based on Malaysia Ringgit, another module will be created
const SalesPage = () => {
    const param = getParam("id");

    const [productList, setProductList] = createSignal([]);

    onMount(() => {
        setProductList(ProductListData[param()] ?? []);
    });

    const updateProductList = () => {
        let newProductList = productList();
        newProductList.push({ id: 1, name: "New - In", price: 23 });
        setProductList([...newProductList]);
    };

    const addToCart = (id) => {
        const key = "cart";

        const cartList = getStorage(key, { parse: true }) ?? [];
        cartList.push(id);

        setStorage(key, cartList);
    };

    return (
        <>
            {productList().map((product) => (
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
