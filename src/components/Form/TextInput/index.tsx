import Icon from "@/components/Icon";
import styles from "./style.module.css";

interface TextInputProps {
    type: "text" | "password";
    placeholder?: string;
}

const TextInput = (props: TextInputProps) => {
    const inputType = props.type ?? "text";

    return (
        <div class={`${styles.container} full_center`}>
            <Icon icon="User" />
            <input
                class={styles.input}
                type={inputType}
                placeholder={props.placeholder ?? ""}
            />
        </div>
    );
};

export default TextInput;
