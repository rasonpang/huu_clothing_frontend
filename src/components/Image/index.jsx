import { createSignal, lazy, onMount } from "solid-js";

const Image = (props) => {
    const [imgSrc, setImgSrc] = createSignal("/app/Loading.svg");

    onMount(async () => {
        if (props?.src) {
            const { ok, url } = await fetch(props.src);
            setImgSrc(ok ? url : "error.png");
        }
    });

    return <img src={imgSrc()} />;
};

export default Image;
