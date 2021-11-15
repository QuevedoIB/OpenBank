import { useTranslation } from 'react-i18next';
import { BsCheck2Circle, BsExclamationTriangle } from 'react-icons/bs';

import FeedbackAlert from './FeedbackAlert';

const Step3 = ({ submitRedirect }) => {
    const [t] = useTranslation();
    const succeed = !submitRedirect.error;
    const baseTextKey = `createPassword.step3.${succeed ? 'success' : 'error'}`;
    return (
        <>
            <FeedbackAlert
                classes={succeed ? 'success' : 'error'}
                title={t(`${baseTextKey}.title`)}
                content={t(`${baseTextKey}.content`)}
                icon={
                    succeed ? (
                        <BsCheck2Circle size={'4rem'} />
                    ) : (
                        <BsExclamationTriangle size={'4rem'} />
                    )
                }
            />
        </>
    );
};

export default Step3;
