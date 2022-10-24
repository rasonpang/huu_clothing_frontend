import { createSignal, onMount } from "solid-js";
import styles from "./style.module.css";

const Carousel = (props) => {
    const [selectedKey, setSelectedKey] = createSignal(0);

    // Maximum 10 images
    const data = props.data.slice(0, 10);

    onMount(() => {
        assignObserverToSection();
    });

    // Intersection Observer
    const assignObserverToSection = () => {
        const imageSections = document.querySelectorAll("section");

        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newIndex = entry.target.getAttribute("index");
                        setSelectedKey(newIndex);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        imageSections.forEach((el) => imageObserver.observe(el));
    };

    return (
        <div className={styles.container}>
            <div className={styles.images_wrapper}>
                {data.map(({ imgSrc, url }, index) => (
                    <a className={styles.image_section} href={url}>
                        <section index={index}>
                            <img className={styles.image} src={imgSrc} />
                        </section>
                    </a>
                ))}
            </div>
            <div className={styles.indicator_wrapper}>
                {[...Array(data.length).keys()].map((i) => (
                    <span
                        className={`
                            ${styles.indicator}
                            ${
                                selectedKey() == i
                                    ? styles.indicator_selected
                                    : ""
                            }
                        `}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
