import styles from './style.module.css';

import MenuLogo from '@/assets/Menu.svg';

const Icon = (props) => {

	const iconList = {
		menu: MenuLogo,
		cross: MenuLogo,
	};

	return (
		<span className={styles.toggleMenu} onClick={props.onClick}>
			<img src={iconList[props.icon]} />
		</span>
	);
};

export default Icon;