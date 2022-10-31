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

    const isLeftHanded = createMemo(() => setting.handed == "left");

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
            <div className={styles.container} style={directionStyle()}>
                {/* Button Wrapper */}
                <div className="full_center">
                    <Icon icon="Menu" onClick={toggleMenuStatus} />
                </div>
                {/* Logo Wrapper */}
                <div className={`${styles.logo_wrapper} full_center`}>
                    <a href="/">
                        <img
                            src="/manifest/pwa-192.png"
                            alt="Home Logo"
                            height="100%"
                            width="auto"
                        />
                    </a>
                </div>
            </div>

            {/* Toggle Panel */}
            <div
                className={`${styles.panel} ${
                    menuStatus() ? styles.panel_active : ""
                }`}
                style={panelStyle() + directionStyle()}
            >
                <div className={styles.content}>
                    <div className={styles.profile}>
                        {user.isLoggedIn() ? <Profile /> : <Login />}
                    </div>
                    <div>
                        <GenreSelector />
                    </div>
                </div>
                <div
                    className={styles.toggle_wrapper}
                    onClick={toggleMenuStatus}
                >
                    <Icon icon="Menu" />
                </div>
            </div>
        </>
    );
};

export default Header;
