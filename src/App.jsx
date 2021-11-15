import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from '@/components/common/Navbar';
import Layout from '@/components/common/Layout';

import routes from '@/routes';
import { store } from '@/redux/store';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Navbar />
                <Layout>
                    <Routes>
                        {routes.map(route => (
                            <Route key={route.path} {...route} />
                        ))}
                    </Routes>
                </Layout>
            </Provider>
        </Router>
    );
};

export default App;
