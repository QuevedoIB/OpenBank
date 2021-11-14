import { useTranslation } from 'react-i18next';
import { Field } from 'formik';

import InformationSettingsImage from '@/assets/img/group.svg';
import InformationBoxImage from '@/assets/img/group-3.svg';

import './ProductInformation.scss';

const Step1 = ({ values }) => {
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
                <h4>{t('createPassword.step1.workLabel')}</h4>
                <p>{t('createPassword.common.workContent')}</p>
            </div>
            <div>
                <h4>{t('createPassword.step1.dataLabel')}</h4>
                <p>{t('createPassword.step1.dataContent')}</p>
            </div>
            <label>
                <Field type="checkbox" name="terms" checked={values.terms} />
                {t('')}
            </label>
        </>
    );
};

export default Step1;
