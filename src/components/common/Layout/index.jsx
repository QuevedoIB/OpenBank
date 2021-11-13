import React from 'react';

import './Layout.scss';

const Layout = ({ children }) => {
    return <section className="layout-container">{children}</section>;
};

export default Layout;
