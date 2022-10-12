import styles from './style.module.css';

const GenreSelector = () => {
	return (
		<div>
			<div className={styles.main_selector}>
				<span>Male</span>
				<span>Female</span>
			</div>
			<div>
				{/* Scrollables */}
			</div>
		</div>
	);
}

export default GenreSelector;