import { user, setUser } from '@/stores/user';
import { setting, setSetting } from '@/stores/setting';
import styles from './style.module.css';
import { createSignal } from 'solid-js';

const Header = () => {
    
    const [menuStatus, setMenuStatus] = createSignal(false);
    const toggleMenuStatus = () => setMenuStatus(!menuStatus());

    return (
        <>
            <div className={styles.container}>
                <span className={styles.toggleMenu} onClick={toggleMenuStatus}>
                    <img src='assets/menu.svg' />
                </span>
                <span>Asos {menuStatus() ? 'true' : 'false'}</span>
            </div>

            <div className={styles.panel} style={menuStatus() ? 'left: 0;' : ''}>
                <span className={styles.content}>1</span>
                <span className={styles.toggleMenu} onClick={toggleMenuStatus}>
                    <img src='assets/menu.svg' />
                </span>
            </div>
        </>
    )
}

export default Header;