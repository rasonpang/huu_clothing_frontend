import Icon from "@/components/Icon";
import styles from "./style.module.css";

const TextInput = (props) => {
    // props: { type: "text" || "password" }

    const inputType = ["text", "password"].includes(props.type)
        ? props.type
        : "text";

    return (
        <div className={`${styles.container} full_center`}>
            <Icon icon="User" />
            <input
                className={styles.input}
                type={inputType}
                placeholder={props.placeholder ?? ""}
            />
        </div>
    );
};

export default TextInput;
