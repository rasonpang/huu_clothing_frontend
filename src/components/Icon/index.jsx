import { createSignal } from "solid-js";
import styles from "./style.module.css";

const Icon = (props) => {
    // props: { icon: String, type: String, parentPath: String, onClick: Function, alt: String, width: String, height: String }
    const iconSize = "2.5em";

    const [imageSrc, setImageSrc] = createSignal("/Loading.svg");

    (async () => {
        // In order to follow vite template, must use '../~.svg' as format
        const fileType = props.type ?? "svg";
        const parentPath = props.parentPath ?? "app";

        const newImageSrc = `/${parentPath}/${props.icon}.${fileType}`;
        setImageSrc(newImageSrc);
    })();

    return (
        <span className={styles.toggle_menu} onClick={props.onClick}>
            <img
                src={imageSrc()}
                alt={props.alt ?? "Icon"}
                style={{
                    width: props.width ?? iconSize,
                    height: props.height ?? iconSize,
                }}
            />
        </span>
    );
};

export default Icon;
