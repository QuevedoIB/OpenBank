import { useMemo } from 'react';

import StepItem from './Step';

import './Header.scss';

const Header = ({ steps, selectedStep }) => {
    const headerSteps = useMemo(
        () =>
            steps.map((_, i) => (
                <StepItem key={i} selected={selectedStep} index={i} />
            )),
        [steps]
    );
    return (
        <header className="header-container">
            <ul>{headerSteps}</ul>
        </header>
    );
};

export default Header;
