import { ProductSize } from "@/pages/product";
import { Accessor } from "solid-js";
import styles from "./style.module.css";

interface SizeSelectorProps {
    sizes: ProductSize[];
    onClick: (newVal: number) => void;
    value: Accessor<number>;
}

const SizeSelector = (props: SizeSelectorProps) => {
    return (
        <div class={styles.container}>
            {props.sizes.map((i: ProductSize, index: number) => (
                <span
                    class={
                        (props.value() == index ? styles.size_selected : "") +
                        " " +
                        styles.size
                    }
                    onClick={() => {
                        props.onClick(index);
                    }}
                >
                    {i.name}
                </span>
            ))}
        </div>
    );
};

export default SizeSelector;
