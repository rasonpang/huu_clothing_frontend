import { getParam } from "@/helper/getter";
import ProductList from '@/constants/products.json';

// Currency mainly based on Malaysia Ringgit, another module will be created
const SalesPage = () => {
    const param = getParam('id');
    
    return (
        <>
            {
                ProductList[param()].map(product => (
                    <div>{product.name}</div>
                ))
            }
        </>
    )
};

export default SalesPage;