import { useTranslation } from 'react-i18next';
import { FiChevronRight } from 'react-icons/fi';

import Button from '@/components/common/Button';

import './CreatePassword.scss';

const Footer = ({ onCancelPress, steps, selectedStep }) => {
    const [t] = useTranslation();
    return (
        <footer className="footer-container">
            {steps?.[selectedStep - 1] && (
                <Button
                    role="secondary"
                    text={t('common.previous')}
                    onClick={onCancelPress}
                />
            )}
            {selectedStep !== steps.length - 1 && (
                <Button classes="footer-next" type="submit">
                    <>
                        <p>{t('common.next')}</p>
                        <FiChevronRight size={'1rem'} />
                    </>
                </Button>
            )}
        </footer>
    );
};

export default Footer;
