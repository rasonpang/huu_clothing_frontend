import { user } from '@/stores/user';
import Unauthorized from './mode/unauthorized';
import styles from './style.module.css';

const Profile = () => {
    return (
        <div className={styles.container}>
            {
                user.isLoggedIn()
                ? <Authorized />
                : <Unauthorized />
            }
        </div>
    )
};

export default Profile;