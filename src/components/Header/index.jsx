// import { user, setUser } from '@/stores/user';
import { setting, setSetting } from '@/stores/setting';
import styles from './style.module.css';
import { createMemo, createSignal } from 'solid-js';

import ToggleBtn from '@/components/ToggleBtn';
import GenreSelector from './GenreSelector';

const Header = () => {
    const [menuStatus, setMenuStatus] = createSignal(false);
    const toggleMenuStatus = () => setMenuStatus(!menuStatus());
    
    const directionStyle = `direction: ${setting.handed == "left" ? "ltr" : "rtl"};`
    const panelStyle = createMemo(() => (`left: ${menuStatus() ? '0' : (setting.handed == 'left' ? '-' : '') + '100vw'};`));

    return (
        <>
            <div className={styles.container} style={directionStyle}>
                {/* Button Wrapper */}
                <div>
                    <ToggleBtn
                        icon="menu"
                        onClick={toggleMenuStatus}
                    />
                </div>
                {/* Logo Wrapper */}
                <div>
                    <div>Asos</div>
                </div>
            </div>

            <div 
                className={styles.panel} 
                style={
                    panelStyle() +
                    directionStyle
                }
            >
                <div className={styles.content}>
                    <GenreSelector />
                </div>
                <div onClick={toggleMenuStatus}>
                    <ToggleBtn
                        icon="cross"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}

export default Header;