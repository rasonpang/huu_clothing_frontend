import TextInput from "@/components/Form/TextInput";

const LoginPage = () => {
    return (
        <div>
            <form>
                <div>
                    <TextInput type="text" placeholder="Username" />
                </div>
                <div>
                    <TextInput type="password" placeholder="Password" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
