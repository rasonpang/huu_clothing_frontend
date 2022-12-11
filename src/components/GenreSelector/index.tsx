import { createMemo, createSignal, from } from "solid-js";
import styles from "./style.module.css";

import { genres as genreList } from "@/constants/genres.json";
import { GenreData, SubGenre } from "@/interfaces/constants";

const GenreSelector = () => {
    const [selectedGenre, setSelectedGenre] = createSignal(0);

    const selectedSubGenres = createMemo(
        () => genreList[selectedGenre()].subGenres
    );

    return (
        <div class={styles.container}>
            <div class={styles.main_selector}>
                {genreList.map((genre: GenreData, index: number) => (
                    <div
                        class={selectedGenre() == index ? styles.selected : ""}
                        onClick={() => setSelectedGenre(index)}
                    >
                        {genre.title}
                    </div>
                ))}
            </div>
            <div class={styles.sub_selector}>
                {/* Scrollables */}
                {selectedSubGenres().map((subGenre: SubGenre) => (
                    <a href={subGenre.url}>{subGenre.title}</a>
                ))}
            </div>
        </div>
    );
};

export default GenreSelector;
