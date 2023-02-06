import styles from "./style.module.css";

interface DescriptionProps {
    children: any;
}

const Description = (props: DescriptionProps) => {
    return (
        <div class={styles.container}>
            <div class={styles.description}>{props.children}</div>
            <div class={styles.expand_btn}>
                <input type="checkbox" />
            </div>
        </div>
    );
};

export default Description;
