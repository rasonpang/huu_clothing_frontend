import { user, setUser } from '@/stores/user';
import { setting, setSetting } from '@/stores/setting';
import styles from '@/styles/header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            Header
            <button onClick={() => setUser.name('')}>Test</button>
        </div>
    )
}

export default Header;