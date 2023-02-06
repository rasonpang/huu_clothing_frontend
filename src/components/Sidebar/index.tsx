import { setUser, user } from "@/stores/user";
import { createMemo } from "solid-js";
import FormButton from "../Form/Button";
import GenreSelector from "../GenreSelector";
import Icon from "../Icon";
import LoginBtn from "../LoginBtn";
import Profile from "../Profile";
import styles from "./style.module.css";

interface SidebarProps {
    value: any;
    isLeftHanded: any;
    toggleSidebar: Function;
}

const LogOutBtn = () => {
    return (
        <div class={`${styles.log_out_container} full_center`}>
            <div class={styles.log_out_wrapper}>
                <FormButton
                    onClick={() => {
                        setUser.logout();
                    }}
                >
                    Log Out
                </FormButton>
            </div>
        </div>
    );
};

const Sidebar = (props: SidebarProps) => {
    const directionStyle = createMemo(
        () => `direction: ${props.isLeftHanded() ? "ltr" : "rtl"};`
    );
    const sidebarStyle = createMemo(
        () =>
            `left: ${
                props.value()
                    ? "0"
                    : (props.isLeftHanded() ? "-" : "") + "100vw"
            };`
    );

    return (
        <div
            class={`${styles.panel} ${
                props.value() ? styles.panel_active : ""
            }`}
            style={sidebarStyle() + directionStyle()}
        >
            <div class={styles.content}>
                {/* Profile */}
                {user().authenticated ? <Profile /> : <LoginBtn />}

                {/* Genre */}
                <GenreSelector />

                <hr style="margin-top: 0;" />

                {/* Others */}
                <div>Cart</div>
                <div>Settings</div>

                <hr />

                {/* Log out Button */}
                {user().authenticated ? <LogOutBtn /> : <></>}
            </div>

            <div
                class={styles.toggle_wrapper}
                onClick={() => {
                    props.toggleSidebar();
                }}
            >
                <Icon icon="Menu" />
            </div>
        </div>
    );
};

export default Sidebar;
