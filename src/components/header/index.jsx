// import { user, setUser } from '@/stores/user';
// import { setting, setSetting } from '@/stores/setting';
import styles from './style.module.css';
import { createSignal } from 'solid-js';

import ToggleBtn from '@/components/ToggleBtn';

const Header = () => {
    
    const [menuStatus, setMenuStatus] = createSignal(false);
    const toggleMenuStatus = () => setMenuStatus(!menuStatus());

    return (
        <>
            <div className={styles.container}>
                <ToggleBtn
                    status="on"
                    onClick={toggleMenuStatus}
                />
                <span>Asos {menuStatus() ? 'true' : 'false'}</span>
            </div>

            <div className={styles.panel} style={menuStatus() ? 'left: 0;' : ''}>
                <span className={styles.content}>1</span>
                <ToggleBtn
                    status="off"
                    onClick={toggleMenuStatus}
                />
            </div>
        </>
    )
}

export default Header;