import styles from "./style.module.css";

interface TextInputProps {
    id: string;
    type: "text" | "password";
    placeholder?: string;
}

const TextInput = (props: TextInputProps) => {
    const inputType = props.type ?? "text";

    return (
        <div class={styles.container}>
            <input
                id={props.id}
                class={styles.input}
                type={inputType}
                name={props.id}
                required
            />
            <label for={props.id} class={styles.placeholder}>
                {props.placeholder ?? ""}
            </label>
        </div>
    );
};

export default TextInput;
