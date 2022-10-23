import styles from './style.module.css';

import { createSignal, onMount } from 'solid-js';

const Icon = (props) => {
	const [imageSrc, setImageSrc] = createSignal(null);

	onMount(async () => {
		// In order to follow vite template, must use '../~.svg' as format
		const { default: newImageSrc } = await import(`../../assets/${props.icon}.svg`);
		setImageSrc(newImageSrc);
	});

	return (
		<span className={styles.toggleMenu} onClick={props.onClick}>
			<img src={imageSrc()} />
		</span>
	);
};

export default Icon;