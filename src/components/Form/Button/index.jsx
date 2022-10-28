import styles from "./style.module.css";

const FormButton = (props) => {
    return (
        <div className={styles.container} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default FormButton;
