import { user, setUser } from '@/stores/user';

const Authorized = () => {
    return (
        <div onClick={setUser.logout}>
            {`Hi ${user.name}!`}
        </div>
    )
};

export default Authorized;