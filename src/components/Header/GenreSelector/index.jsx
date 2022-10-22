import { createMemo, createSignal } from 'solid-js';
import styles from './style.module.css';

const GenreSelector = () => {
	const [selectedGenre, setSelectedGenre] = createSignal(0);

	const genreList = [
		{
			title: "Male",
			subGenres: [
				{ id: 1, title: "HOME", bg: "", url: '/' },
				{ id: 2, title: "SALE: UP TO 80% OFF", bg: "", url: '/sales/sales-slug' },
				{ id: 3, title: "NEW IN", bg: "", url: '/sales/new-in' }
			],
		},
		{
			title: "Female",
			subGenres: [
				{ id: 4, title: "HOME", bg: "", url: '/' },
				{ id: 5, title: "SALE: UP TO 80% OFF", bg: "", url: '/sales/sales-slug' },
				{ id: 6, title: "NEW FEMALE CLOTHS", bg: "", url: '/sales/new-female' }
			],
		}
	];

	const selectedSubGenres = createMemo(() => genreList[selectedGenre()].subGenres);

	return (
		<div className={styles.container}>
			<div className={styles.main_selector}>
				{genreList.map((genre, genreIndex) => (
					<div onClick={() => setSelectedGenre(genreIndex)}>
						{genre.title + (selectedGenre() == genreIndex ? '*' : '')}
					</div>
				))}
			</div>
			<div className={styles.sub_selector}>
				{/* Scrollables */}
				{selectedSubGenres().map((subGenre) => (
					<div>
						<a href={subGenre.url}>{subGenre.title}</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default GenreSelector;