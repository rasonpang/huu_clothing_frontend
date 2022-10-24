import { createSignal, onMount } from 'solid-js';
import styles from './style.module.css';

const Carousel = () => {
    const [selectedKey, setSelectedKey] = createSignal(0);

    // Maximum 10 images
    const imageList = [
        'https://images.asos-media.com/products/reclaimed-vintage-inspired-front-logo-embroidery-cap-in-washed-grey/201505106-1-grey?$n_320w$&wid=317&fit=constrain',
        'https://images.asos-media.com/products/reclaimed-vintage-inspired-relaxed-t-shirt-with-woodland-animals-graphic-in-washed-blue/201721003-1-washedblue?$n_320w$&wid=317&fit=constrain',
        'https://images.asos-media.com/products/reclaimed-vintage-inspired-chain-necklace-in-silver/202617251-1-silver?$n_320w$&wid=317&fit=constrain'
    ].slice(0, 10);

    
    // Intersection Observer
    onMount(() => {
        const imageSections = document.querySelectorAll('section');
        // imageSections[0].getAttribute('index')

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const newIndex = entry.target.getAttribute('index');
                    setSelectedKey(newIndex);
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        });

        imageSections.forEach((el) => imageObserver.observe(el));
    });

    return (
        <div className={styles.container}>
            <div className={styles.images_wrapper}>
                {
                    imageList.map((imgSrc, index) => (
                        <section className={styles.image_section} index={index}>
                            <img className={styles.image} src={imgSrc} />
                        </section>
                    ))
                }
            </div>
            <div className={styles.indicator_wrapper}>
                {
                    [...Array(imageList.length).keys()].map((i) => (
                        <span className={`
                            ${styles.indicator}
                            ${selectedKey() == i ? styles.indicator_selected : ''}
                        `}></span>
                    ))
                }
            </div>
        </div>
    )    
};

export default Carousel;