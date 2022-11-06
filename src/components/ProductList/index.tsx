import { Product } from '@/interfaces/constants';
import ProductCard from '../ProductCard';
import style from './style.module.css';

interface ProductListProps {
	data: Product[]
}

const ProductList = (props: ProductListProps) => {
	return (
		<div class={style.container}>
			{(props.data ?? []).map((product: Product) => 
				<ProductCard data={product} />
			)}
		</div>
	)
};

export default ProductList;