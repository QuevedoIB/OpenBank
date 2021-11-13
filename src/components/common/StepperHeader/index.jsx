import { useMemo } from 'react';
import './Header.scss';

const Header = ({ steps, selectedStep }) => {
    const headerSteps = useMemo(
        () =>
            steps.map((_, i) => (
                <div key={i} className="step">
                    <div
                        className={`circle ${
                            selectedStep === i ? 'selected' : 'not-selected'
                        }`}
                    >
                        <p>{i + 1}</p>
                    </div>
                    {selectedStep === i && <div className="triangle" />}
                </div>
            )),
        [steps]
    );
    return <header className="header-container">{headerSteps}</header>;
};

export default Header;
