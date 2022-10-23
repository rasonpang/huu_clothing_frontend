import { user, setUser } from '@/stores/user';
import styles from './style.module.css';

const Login = () => {
    return (
        <div onClick={() => { setUser.login() }}>
            Sign In
        </div>
    )
};

const Register = () => {
    return (
        <div>

        </div>
    )
};

const Profile = () => {
    return (
        <div>
            <div>
            {
                user.isLoggedIn
                ? `Hi ${user.name}!`
                : <Login />
            }
            </div>
        </div>
    )
};

export default Profile;