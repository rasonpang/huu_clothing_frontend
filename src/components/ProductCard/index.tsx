import { getStorage, setStorage } from '@/helper/storage';
import { Product } from '@/interfaces/constants';
import Image from '../Image';
import styles from './style.module.css';

interface ProductCardProps {
	data: Product;
}

const ProductCard = (props: ProductCardProps) => {
	const product = props.data;

	const addToCart = (id: number) => {
        const key = "cart";

        const cartList: number[] = getStorage(key, { parse: true, defaultValue: [] });
        cartList.push(id);
        setStorage(key, cartList);
    };

	return (
		<div class={styles.container}>
			<div>
				<Image src='' height='100%' width='100%' />
			</div>
			<div class={styles.content}>
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
		</div>
	)
};

export default ProductCard;