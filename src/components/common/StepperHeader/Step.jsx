import completedImage from '@/assets/img/check.svg';

const StepItem = ({ selected, index }) => {
    const completed = index < selected;
    const currentlySelected = index === selected;
    return (
        <li className={`step ${completed ? 'completed' : ''}`}>
            <div
                className={`circle-container  ${
                    currentlySelected ? 'selected' : ''
                }`}
            >
                <div className="circle">
                    {completed ? (
                        <img
                            src={completedImage}
                            className="check-image"
                            alt="completed"
                        />
                    ) : (
                        <p>{index + 1}</p>
                    )}
                </div>
                <div className="bar" />
            </div>
            {currentlySelected && <div className="triangle" />}
        </li>
    );
};

export default StepItem;
