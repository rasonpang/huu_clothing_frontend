import { createMemo, createSignal } from 'solid-js';
import styles from './style.module.css';

const GenreSelector = () => {
	const [selectedGenre, setSelectedGenre] = createSignal(0);

	const genreList = [
		{
			title: "Male",
			subGenres: [
				{ id: 1, title: "HOME", bg: "" },
				{ id: 2, title: "SALE: UP TO 80% OFF", bg: "" },
				{ id: 3, title: "NEW IN", bg: "" }
			],
		},
		{
			title: "Female",
			subGenres: [
				{ id: 4, title: "HOME", bg: "" },
				{ id: 5, title: "SALE: UP TO 80% OFF", bg: "" },
				{ id: 6, title: "NEW FEMALE CLOTHS", bg: "" }
			],
		}
	];

	const selectedSubGenres = createMemo(() => genreList[selectedGenre()].subGenres);

	return (
		<div className={styles.container}>
			<div className={styles.main_selector}>
				{genreList.map((genre, genreIndex) => (
					<span onClick={() => setSelectedGenre(genreIndex)}>
						{genre.title + (selectedGenre() == genreIndex ? '*' : '')}
					</span>
				))}
			</div>
			<div>
				{/* Scrollables */}
				{selectedSubGenres().map((subGenre) => (
					<div>{subGenre.title}</div>
				))}
			</div>
		</div>
	);
}

export default GenreSelector;