import { createSignal, onMount } from "solid-js";
import { setIntersectionObserver } from "@/helper/helper";

import Image from "@/components/Image";
import styles from "./style.module.css";
import { EventData } from "@/interfaces/constants";

interface CarouselProps {
    data: any;
}

const Carousel = (props: CarouselProps) => {
    const [selectedKey, setSelectedKey] = createSignal(0);

    // Maximum 10 images
    const data = props.data.slice(0, 10);

    onMount(() => {
        const isIntersecting = (entry: IntersectionObserverEntry) => {
            const newIndex = entry.target.getAttribute("index");
            if (entry.isIntersecting && ![null, ""].includes(newIndex)) setSelectedKey(Number(newIndex));
        };

        setIntersectionObserver(".carousel-sections", isIntersecting);
    });

    return (
        <div class={styles.container}>
            <div class={styles.images_wrapper}>
                {data.map(({ imgSrc, url }: EventData, index: number) => (
                    <a
                        class={`${styles.image_section} full_center`}
                        href={url}
                    >
                        <section class="carousel-sections" index={index}>
                            <Image class={styles.image} src={imgSrc} />
                        </section>
                    </a>
                ))}
            </div>
            <div class="full_center">
                {[...Array(data.length).keys()].map((i) => (
                    <span
                        class={`
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
