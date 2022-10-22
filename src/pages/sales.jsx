import { getParam } from "@/helper/getter";
import Layout from "@/layouts/default";

const SalesPage = () => {
    const param = getParam('id');
    
    // Currency mainly based on Malaysia Ringgit, another module will be created
    const ProductList = [
        { id: 1, name: 'Adidas Shoes Ultraboost 21', price: 23 },
        { id: 2, name: 'Nike Training MC trainers in dark blue', price: 45 },
        { id: 3, name: "Nike Blazer Mid '77 Jumbo trainers in white/black", price: 65 },
        { id: 4, name: 'Nike Training Air Zoom SuperRep 3 trainers in black', price: 33 },
        { id: 5, name: 'Nike Air Presto Mid Utility trainers in black', price: 10 },
    ];

    return (
        <Layout>
            {
                ProductList.map(product => (
                    <div>{product.name}</div>
                ))
            }
        </Layout>
    )
};

export default SalesPage;