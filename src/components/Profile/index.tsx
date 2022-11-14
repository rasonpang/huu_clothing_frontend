import { createSignal } from "solid-js";
import { setting, setSetting } from "@/stores/setting";
import { user, setUser } from "@/stores/user";

import ToggleBtn from "@/components/ToggleBtn";

import styles from "./style.module.css";
import Image from "../Image";
import Icon from "../Icon";

const Profile = () => {
    const [showSettings, setShowSettings] = createSignal(false);
    const toggleShowSettings = () => {
        setShowSettings(!showSettings());
    };

    return (
        <div class={`${styles.container}`}>
            <div class={styles.icon_wrapper}>
                <Image src="" width="100%" />
            </div>

            <div>{user().name}</div>

            {showSettings() ? <ProfileSettings /> : <></>}

            <div
                class={styles.toggle_wrapper}
                data-toggle={showSettings() ? "true" : "false"}
                onClick={toggleShowSettings}
            >
                <Icon icon="Chevron" />
                {/* {showSettings() ? "Collapse" : "Expand"} */}
            </div>
        </div>
    );
};

const ProfileSettings = () => {
    return (
        <div class={styles.settings_container}>
            {/* Hand Position */}
            <div>
                <span>Hand Position</span>
                <span>
                    <ToggleBtn
                        value={setting().handed != "left"}
                        onClick={() => setSetting.setHanded()}
                    />
                </span>
            </div>
        </div>
    );
};

export default Profile;
