import { createSignal } from 'solid-js';

import styles from './style.module.css';
import LoadingIcon from '@/assets/Loading.svg';

const Icon = (props) => {
	const [imageSrc, setImageSrc] = createSignal(LoadingIcon);

	(async () => {
		// In order to follow vite template, must use '../~.svg' as format
		const fileType = props.type ?? 'svg';
		const { default: newImageSrc } = await import(`../../assets/${props.icon}.${fileType}`);
		setImageSrc(newImageSrc);
	})();

	return (
		<span className={styles.toggleMenu} onClick={props.onClick}>
			<img src={imageSrc()} />
		</span>
	);
};

export default Icon;