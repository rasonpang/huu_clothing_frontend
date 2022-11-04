import FormButton from "@/components/Form/Button";
import TextInput from "@/components/Form/TextInput";
import { UserCredential } from "@/interfaces/stores";
import { setUser } from "@/stores/user";
import { useNavigate } from "@solidjs/router";
import styles from './style.module.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        
        const { username, password } = e.target;

        const credential: UserCredential = {
            username: username.value,
            password: password.value
        };
        
        setUser.login(credential)
            .then(() => { navigate('/') })
            .catch((err) => { console.log(err); });
    }

    return (
        <div>
            <form class={styles.form} onsubmit={onFormSubmit}>
                <div>
                    <TextInput 
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <FormButton>Submit</FormButton>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
