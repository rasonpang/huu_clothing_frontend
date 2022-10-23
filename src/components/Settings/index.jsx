import { createSignal } from "solid-js";
import { setting, setSetting } from "@/stores/setting";
import { user, setUser } from '@/stores/user';

import ToggleBtn from "@/components/ToggleBtn";
import Profile from "@/components/Profile";

import styles from './style.module.css';

const Settings = () => {
    const [showSettings, setShowSettings] = createSignal(false);
    const toggleShowSettings = () => {
        if (user.id !== null) setShowSettings(!showSettings())
        else setUser.login();
    };

    return (
        <span>
            <div onClick={toggleShowSettings}>
                <Profile />
            </div>
            <span
                className={styles.settings}
                style={showSettings() ? 'height: 100%;' : ''}
            >
                {/* Hand Position */}
                <div>
                    <span>Hand Position</span>
                    <span>
                        <ToggleBtn
                            value={setting.handed == 'right'}
                            onClick={() => setSetting.setHanded()}
                        />
                    </span>
                </div>

                <div>
                    <span onClick={() => console.log('Logout')}>
                        Logout
                    </span>
                </div>
                
            </span>
        </span>
    )
};

export default Settings;