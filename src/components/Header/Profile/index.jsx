import { user, setUser } from '@/stores/user';
import styles from './style.module.css';

const Profile = () => {
    return (
        <div>
            <div>{
                user.isLoggedIn
                ? `Hi ${user.name}!`
                : 'Sign In'  
            }</div>
        </div>
    )
};

export default Profile;