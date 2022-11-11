import styles from './style.module.css';
import { getParam } from "@/helper/getter";

const ProductPage = () => {
	const param = getParam('id');

	return (
		<div>
			param {param()}
		</div>
	)
};

export default ProductPage;