import { createSignal, onMount } from "solid-js";

interface ImageProps {
    class?: string;
    src?: string;
    alt?: string;

    width?: string;
    height?: string;
}

const Image = (props: ImageProps) => {
    const [imgSrc, setImgSrc] = createSignal("/app/Loading.svg");

    onMount(async () => {
        if (props?.src) {
            const { ok, url } = await fetch(props.src);
            setImgSrc(ok ? url : "error.png");
        }
    });

    return (
        <img
            class={props.class ?? ''}
            src={imgSrc()} alt={props.alt ?? "Image"}
            style={{
                width: props.width ?? "317px",
                height: props.height ?? "405px"
            }}
        />
    );
};

export default Image;