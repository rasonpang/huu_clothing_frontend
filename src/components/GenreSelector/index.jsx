import { createMemo, createSignal, from } from "solid-js";
import styles from "./style.module.css";

import { genres as genreList } from "@/constants/genres.json";

const GenreSelector = (props) => {
    const [selectedGenre, setSelectedGenre] = createSignal(0);

    const selectedSubGenres = createMemo(
        () => genreList[selectedGenre()].subGenres
    );

    return (
        <div className={styles.container}>
            <div className={styles.main_selector}>
                {genreList.map((genre, genreIndex) => (
                    <div onClick={() => setSelectedGenre(genreIndex)}>
                        {genre.title +
                            (selectedGenre() == genreIndex ? "*" : "")}
                    </div>
                ))}
            </div>
            <div className={styles.sub_selector}>
                {/* Scrollables */}
                {selectedSubGenres().map((subGenre) => (
                    <a href={subGenre.url}>{subGenre.title}</a>
                ))}
            </div>
        </div>
    );
};

export default GenreSelector;
