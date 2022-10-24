import { user, setUser } from '@/stores/user';

const HomePage = () => {
    const toggleName = () => {
        setUser.name('');
    };

    return (
        <>
            <div>{user.name}</div>
            <button onClick={toggleName}>Toggle</button>
        </>
    )
}

export default HomePage;