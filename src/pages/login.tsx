import TextInput from "@/components/Form/TextInput";

const LoginPage = () => {
    return (
        <div>
            <form>
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
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
