import styles from "./style.module.css";

const TextInput = (props) => {
    return (
        <div className={`${styles.container} full_center`}>
            <input className={styles.text_input} type={props.type} />
        </div>
    );
};

export default TextInput;
