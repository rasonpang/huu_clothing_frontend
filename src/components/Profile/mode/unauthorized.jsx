import Form from '@/components/Form';
import { debounce, onFormSubmit } from '@/helper/helper';
import { createSignal } from 'solid-js';
import styles from './style.module.css';

const Unauthorized = () => {
    const [mode, setMode] = createSignal(0);

    const Login = () => {
        const loginSubmit = onFormSubmit(() => {
            debounce(() => console.log('login'));
        });

        const SubmitBtn = () => <button type='submit'>Login</button>

        const formItems = [
            { type: 'text' },
            { type: 'password' },
            { element: SubmitBtn }
        ];

        return (
            <div>
                <Form
                    onSubmit={loginSubmit}
                    formItems={formItems}
                />
            </div>
        )
    };
    
    const Register = () => {
        const loginSubmit = onFormSubmit(() => {
            debounce(() => console.log('register'));
        });

        const SubmitBtn = () => <button type='submit'>Login</button>

        const formItems = [
            { type: 'text' },
            { type: 'password' },
            { element: SubmitBtn }
        ];

        return (
            <div>
                <Form
                    onSubmit={loginSubmit}
                    formItems={formItems}
                />
            </div>
        )
    };
    
    const ForgotPassword = () => {
        const loginSubmit = onFormSubmit(() => {
            debounce(() => console.log('forgot password'));
        });

        const SubmitBtn = () => <button type='submit'>Login</button>

        const formItems = [
            { type: 'text' },
            { type: 'password' },
            { element: SubmitBtn }
        ];

        return (
            <div>
                <Form
                    onSubmit={loginSubmit}
                    formItems={formItems}
                />
            </div>
        )
    };

    const formList = [
        <Login />,
        <Register />,
        <ForgotPassword />
    ];
    return (
        <div>
            { formList[mode()] }
        </div>
    )
};

export default Unauthorized;