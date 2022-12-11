import { createEffect, createMemo, createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";

import { setting } from "@/stores/setting";

import Icon from "@/components/Icon";

import styles from "./style.module.css";
import Sidebar from "../Sidebar";

const Header = () => {
    const [sidebar, setSidebar] = createSignal(false);
    const toggleSidebar = () => setSidebar(!sidebar());

    const isLeftHanded = createMemo(() => setting().handed == "left");

    const pathname = createMemo(() => useLocation().pathname);
    createEffect(() => {
        setSidebar(false);

        // Watch this value for changes
        pathname();
    });

    return (
        <>
            <div
                class={styles.container}
                style={{
                    direction: isLeftHanded() ? "ltr" : "rtl",
                    background: `linear-gradient(${
                        isLeftHanded() ? "" : "-"
                    }45deg, rgba(131,58,180,1) 0%, var(--bg-secondary) 50%, rgba(252,176,69,1) 100%)`,
                }}
            >
                {/* Button Wrapper */}
                <div class="full_center">
                    <Icon icon="Menu" onClick={toggleSidebar} />
                </div>
                {/* Logo Wrapper */}
                <div class={`${styles.logo_wrapper} full_center`}>
                    <a href="/">
                        <Icon
                            icon="pwa-192"
                            source="manifest"
                            type="png"
                            alt="Home Logo"
                        />
                    </a>
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar
                value={sidebar}
                isLeftHanded={isLeftHanded}
                toggleSidebar={toggleSidebar}
            />
        </>
    );
};

export default Header;
