import { useTranslation } from 'react-i18next';
import { FiChevronRight } from 'react-icons/fi';

import Button from '@/components/common/Button';
import Spinner from '@/components/common/Spinner';

import './CreatePassword.scss';

const Footer = ({
    onCancelPress,
    steps,
    selectedStep,
    disabled,
    loading,
    children,
}) => {
    const isLastStep = selectedStep === steps.length - 1;
    const hasPreviousStep = steps?.[selectedStep - 1];

    const [t] = useTranslation();
    return (
        <footer className="footer-container">
            {isLastStep ? (
                children
            ) : (
                <>
                    {hasPreviousStep && (
                        <Button
                            role="secondary"
                            text={t('common.previous')}
                            onClick={onCancelPress}
                            disabled={loading}
                        />
                    )}
                    <Button
                        classes="footer-right"
                        type="submit"
                        disabled={disabled || loading}
                    >
                        <>
                            <p>{t('common.next')} </p>
                            {loading ? (
                                <Spinner />
                            ) : (
                                <FiChevronRight size={'1rem'} />
                            )}
                        </>
                    </Button>
                </>
            )}
        </footer>
    );
};

export default Footer;
