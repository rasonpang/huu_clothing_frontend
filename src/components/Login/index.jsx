import { useNavigate } from "@solidjs/router";

import Icon from "@/components/Icon";

import styles from "./style.module.css";

const Login = () => {
    const navigate = useNavigate();

    const onContainerClick = () => {
        navigate("/login");
    };

    return (
        <div className={`${styles.container}`} onClick={onContainerClick}>
            <div className="full_center">
                <Icon icon="User" alt="user" />
            </div>
            <div>Sign In</div>
        </div>
    );
};

export default Login;
