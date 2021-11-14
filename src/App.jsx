import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from '@/routes';

import Navbar from '@/components/common/Navbar';
import Layout from '@/components/common/Layout';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Layout>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
