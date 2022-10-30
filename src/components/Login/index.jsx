import { useNavigate } from "@solidjs/router";

import Icon from "@/components/Icon";

import styles from "./style.module.css";

const Login = () => {
    const navigate = useNavigate();

    const onContainerClick = () => {
        navigate("/login");
    };

    return (
        <div className={styles.container} onClick={onContainerClick}>
            <Icon icon="User" alt="user" />
            Sign In
        </div>
    );
};

export default Login;
