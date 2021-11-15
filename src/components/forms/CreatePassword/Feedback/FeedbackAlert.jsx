import './Feedback.scss';

const FeedbackAlert = ({ title, content, icon, classes = '' }) => {
    return (
        <div className={`feedback-container ${classes}`}>
            {icon}
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default FeedbackAlert;
