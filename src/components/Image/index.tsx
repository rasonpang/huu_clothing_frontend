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
            setImgSrc(ok ? url : "/app/Missing.svg");
        }
    });

    return (
        <img
            class={props.class ?? ""}
            src={imgSrc()}
            alt={props.alt ?? "Image"}
            style={{
                width: props.width ?? "auto",
                height: props.height ?? "auto",
            }}
        />
    );
};

export default Image;
