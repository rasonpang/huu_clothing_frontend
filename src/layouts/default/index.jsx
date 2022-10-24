import styles from "./style.module.css";
import Header from "@/components/Header";

const Layout = (props) => {
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

export default Layout;
