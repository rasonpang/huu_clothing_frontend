import styles from "./style.module.css";
import Header from "@/components/Header";
import OrderBar from "@/components/OrderBar";
import { useLocation, useParams } from "@solidjs/router";
import { createEffect, createMemo, createSignal } from "solid-js";

const Layout = (props: any) => {
    const [pageName, setPageName] = createSignal("");

    const pathname = createMemo(() => useLocation().pathname);
    createEffect(() => {
        const [_, newPageName] = pathname().split("/");
        setPageName(newPageName);
    });

    return (
        <div>
            <div class={styles.header}>
                <Header />
            </div>
            <div class={styles.content}>{props.children}</div>
            {pageName() == "product" ? <OrderBar /> : ""}
        </div>
    );
};

export default Layout;
