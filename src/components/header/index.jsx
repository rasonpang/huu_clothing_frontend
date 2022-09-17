import { user, setUser } from '@/stores/user';

const Header = () => {
    return (
        <div>
            Header
            <button onClick={() => setUser.name('')}>Test</button>
        </div>
    )
}

export default Header;