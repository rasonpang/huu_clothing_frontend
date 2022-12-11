import Image from "../Image";
import styles from "./style.module.css";

const Profile = () => {
    return (
        <div class={styles.container}>
            <span>
                <Image width="50px" height="50px" />
            </span>
            <span>Name</span>
        </div>
    );
};

export default Profile;
