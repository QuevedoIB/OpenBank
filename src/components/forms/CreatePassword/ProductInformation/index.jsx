import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import * as Yup from 'yup';
import { Field } from 'formik';
import i18n from '@/locale';

import InformationSettingsImage from '@/assets/img/group.svg';
import InformationBoxImage from '@/assets/img/group-3.svg';

import './ProductInformation.scss';

export const validation = Yup.object().shape({
    terms: Yup.bool().oneOf([true], i18n.t('forms.errors.required')),
});

const Step1 = ({ errors }) => {
    const [t] = useTranslation();
    return (
        <>
            <div className="images-container">
                <div>
                    <img src={InformationSettingsImage} alt="Information" />
                    <p>{t('createPassword.step1.settingsImageFooter')}</p>
                </div>
                <div>
                    <img src={InformationBoxImage} alt="Seccurity" />
                    <p>{t('createPassword.step1.boxImageFooter')}</p>
                </div>
            </div>
            <div>
                <h2>{t('createPassword.step1.workLabel')}</h2>
                <p>{t('createPassword.common.workContent')}</p>
            </div>
            <div>
                <h2>{t('createPassword.step1.dataLabel')}</h2>
                <p>{t('createPassword.step1.dataContent')}</p>
            </div>
            <label>
                <Field type="checkbox" name="terms" />
                <Trans i18nKey="createPassword.step1.termsOfService">
                    <Link
                        to="/terms"
                        onClick={() =>
                            alert('No implementado, redirección a ToS')
                        }
                    />
                </Trans>
                <p className="error-message">{errors?.terms}</p>
            </label>
        </>
    );
};

export default Step1;
