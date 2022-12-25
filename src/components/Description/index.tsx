import styles from "./style.module.css";

interface DescriptionProps {
    children: any;
}

const Description = (props: DescriptionProps) => {
    return (
        <div>
            <div class={styles.container}>{props.children}</div>
            <input class={styles.expand_btn} type="checkbox" />
        </div>
    );
};

export default Description;
