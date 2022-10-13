import ToggleBtn from "@/components/ToggleBtn";
import { setting, setSetting } from "@/stores/setting";

const Settings = () => {
    return (
        <span>
            <span>
                <span>Hand Position</span>
                <span>
                    <ToggleBtn
                        value={setting.handed == 'right'}
                        onClick={() => setSetting.setHanded()}
                    />
                </span>
            </span>
        </span>
    )
};

export default Settings;