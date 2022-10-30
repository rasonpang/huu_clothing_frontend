import Form from "@/components/Form";
import FormButton from "@/components/Form/Button";
import TextInput from "@/components/Form/TextInput";

const LoginPage = () => {
    const formItems = [
        { type: "text" },
        { type: "password" },
        { element: <FormButton>Log In</FormButton> },
    ];

    return (
        <div>
            <Form formItems={formItems}></Form>
        </div>
    );
};

export default LoginPage;
