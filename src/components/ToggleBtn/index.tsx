import { createMemo, createSignal } from "solid-js";
import styles from "./style.module.css";

interface ToggleBtnProps {
    value: string;
    onClick: Function;
}

const ToggleBtn = (props: ToggleBtnProps) => {
    const value = createMemo(() => props.value);
    const onClick = props.onClick;

    return (
        <div
            class={styles.container}
            style={`background-color: ${value() ? "green" : "red"};`}
            onClick={() => onClick()}
        >
            <div
                class={styles.value}
                style={`margin-left: ${value() ? "var(--size)" : "0"};`}
            ></div>
        </div>
    );
};

export default ToggleBtn;
