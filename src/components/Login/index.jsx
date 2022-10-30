import { setUser } from "@/stores/user";
import { useNavigate } from "@solidjs/router";
import styles from "./style.module.css";

const Login = () => {
    // const navigate = useNavigate();

    const onContainerClick = () => {
        // navigate("/login");
        setUser.login();
    };

    return (
        <div className={styles.container} onClick={onContainerClick}>
            Login
        </div>
    );
};

export default Login;
