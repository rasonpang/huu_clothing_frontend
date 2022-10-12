import styles from './style.module.css';

import OnLogo from '@/assets/Menu.svg';

const ToggleBtn = (props) => {

	return (
		<span className={styles.toggleMenu} onClick={props.onClick}>
			<img src={OnLogo} />
		</span>
	);
};

export default ToggleBtn;