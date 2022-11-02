import styles from "./style.module.css";
import Header from "@/components/Header";

const Layout = (props: any) => {
    return (
        <div>
            <div class={styles.header}>
                <Header />
            </div>
            <div class={styles.content}>{props.children}</div>
        </div>
    );
};

export default Layout;
