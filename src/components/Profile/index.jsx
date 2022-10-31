import { createSignal } from "solid-js";
import { setting, setSetting } from "@/stores/setting";
import { user, setUser } from "@/stores/user";

import ToggleBtn from "@/components/ToggleBtn";

import styles from "./style.module.css";

const Profile = () => {
    const [showSettings, setShowSettings] = createSignal(false);
    const toggleShowSettings = () => {
        setShowSettings(!showSettings());
    };

    return (
        <div className={`${styles.container} full_center`}>
            <span>
                <div onClick={toggleShowSettings}>{`Hi ${user.name}!`}</div>
                <span
                    className={styles.settings}
                    style={showSettings() ? "height: 100%;" : ""}
                >
                    {/* Hand Position */}
                    <div>
                        <span>Hand Position</span>
                        <span>
                            <ToggleBtn
                                value={setting.handed == "right"}
                                onClick={() => setSetting.setHanded()}
                            />
                        </span>
                    </div>

                    <div>
                        <span
                            onClick={() => {
                                setUser.logout();
                            }}
                        >
                            Logout
                        </span>
                    </div>
                </span>
            </span>
        </div>
    );
};

export default Profile;
