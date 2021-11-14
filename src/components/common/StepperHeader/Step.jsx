import completedImage from '@/assets/img/check.svg';

const StepItem = ({ selected, index }) => {
    const completed = index < selected;
    return (
        <li className={`step ${completed ? 'completed' : ''}`}>
            <div className="circle-container">
                <div
                    className={`circle ${
                        selected === index ? 'selected' : 'not-selected'
                    }`}
                >
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
            {selected === index && <div className="triangle" />}
        </li>
    );
};

export default StepItem;
