import { Product } from '@/interfaces/constants';
import { useNavigate } from '@solidjs/router';
import Image from '../Image';
import styles from './style.module.css';

interface ProductCardProps {
	data: Product;
}

const ProductCard = (props: ProductCardProps) => {
	const product = props.data;
	const navigate = useNavigate();

	const redirect = () => { navigate('/product/' + product.id) };
	const likeProduct = () => { console.log('Liked: ' + product.id); }

	return (
		<div class={styles.container}>
			<div class={styles.image_wrapper} onClick={redirect}>
				<Image src='' height='100%' width='100%' />
			</div>
			<div class={styles.name_wrapper} onClick={likeProduct}>
				<div>{product.name}</div>
			</div>
			<div class={styles.price_wrapper} onClick={redirect}>
				<div>RM {product.price}</div>
			</div>
		</div>
	)
};

export default ProductCard;