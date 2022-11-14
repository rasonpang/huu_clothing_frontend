import { createEffect, createMemo, createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";

import { setting, setSetting } from "@/stores/setting";
import { user } from "@/stores/user";

import Icon from "@/components/Icon";
import GenreSelector from "@/components/GenreSelector";
import Login from "@/components/Login";
import Profile from "@/components/Profile";

import styles from "./style.module.css";

const Header = () => {
    const [menuStatus, setMenuStatus] = createSignal(false);
    const toggleMenuStatus = () => setMenuStatus(!menuStatus());

    const isLeftHanded = createMemo(() => setting().handed == "left");

    const directionStyle = createMemo(
        () => `direction: ${isLeftHanded() ? "ltr" : "rtl"};`
    );
    const panelStyle = createMemo(
        () =>
            `left: ${
                menuStatus() ? "0" : (isLeftHanded() ? "-" : "") + "100vw"
            };`
    );

    const pathname = createMemo(() => useLocation().pathname);
    createEffect(() => {
        setMenuStatus(false);

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
                    <Icon icon="Menu" onClick={toggleMenuStatus} />
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

            {/* Toggle Panel */}
            <div
                class={`${styles.panel} ${
                    menuStatus() ? styles.panel_active : ""
                }`}
                style={panelStyle() + directionStyle()}
            >
                <div class={styles.content}>
                    <div class={styles.profile}>
                        {user().authenticated ? <Profile /> : <Login />}
                    </div>
                    <div>
                        <GenreSelector />
                    </div>
                </div>
                <div class={styles.toggle_wrapper} onClick={toggleMenuStatus}>
                    <Icon icon="Menu" />
                </div>
            </div>
        </>
    );
};

export default Header;
