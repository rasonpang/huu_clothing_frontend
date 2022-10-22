import Layout from '@/layouts/default';
import { user, setUser } from '@/stores/user';

const HomePage = () => {
    const toggleName = () => {
        setUser.name('');
    };

    return (
        <Layout>
            <div>{user.name}</div>
            <button onClick={toggleName}>Toggle</button>
        </Layout>
    )
}

export default HomePage;