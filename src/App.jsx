import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from '@/components/common/Navbar';
import Layout from '@/components/common/Layout';

import routes from '@/routes';
import { store } from '@/redux/store';

import './App.scss';

const App = () => {
    const page = useRoutes(routes);
    return (
        <Provider store={store}>
            <Navbar />
            <Layout>{page}</Layout>
        </Provider>
    );
};

export default App;
