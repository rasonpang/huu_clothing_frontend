// import { user, setUser } from '@/stores/user';
import { setting, setSetting } from '@/stores/setting';
import styles from './style.module.css';
import { createMemo, createSignal } from 'solid-js';

import Icon from '@/components/Icon';
import GenreSelector from './GenreSelector';
import Settings from './Settings';
import Profile from './Profile';

const Header = () => {
    const [menuStatus, setMenuStatus] = createSignal(false);
    const toggleMenuStatus = () => setMenuStatus(!menuStatus());

    const isLeftHanded = createMemo(() => setting.handed == "left");
    
    const directionStyle = createMemo(() => `direction: ${isLeftHanded() ? "ltr" : "rtl"};`)
    const panelStyle = createMemo(() => (`left: ${menuStatus() ? '0' : (isLeftHanded() ? '-' : '') + '100vw'};`));

    return (
        <>
            <div className={styles.container} style={directionStyle()}>
                {/* Button Wrapper */}
                <div>
                    <Icon
                        icon="menu"
                        onClick={toggleMenuStatus}
                    />
                </div>
                {/* Logo Wrapper */}
                <div>
                    <div>Asos</div>
                </div>
            </div>

            {/* Toggle Panel */}
            <div 
                className={styles.panel} 
                style={panelStyle() + directionStyle()}
            >
                <div className={styles.content}>
                    <div className={styles.settings}>
                        <Profile />
                        <Settings />
                    </div>
                    <div>
                        <GenreSelector />
                    </div>
                </div>
                <div onClick={toggleMenuStatus}>
                    <Icon
                        icon="cross"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </>
    )
}

export default Header;