import { useTranslation } from 'react-i18next';
import { Field } from 'formik';

import InformationSettingsImage from '@/assets/img/group.svg';
import InformationBoxImage from '@/assets/img/group-3.svg';

const Step1 = ({values}) => {
    const [t] = useTranslation();
    return (
        <>
            <div>
                <img src={InformationSettingsImage} alt="Information" />
                <p>{t("createPassword.step1.settingsImageFooter")}</p>
            </div>
            <div>
                <img src={InformationBoxImage} alt="Seccurity" />
                <p>{t("createPassword.step1.boxImageFooter")}</p>
            </div>
            <div>
                <h6>{t("createPassword.step1.workLabel")}</h6>
                <p>{t("createPassword.common.workContent")}</p>
            </div>
            <div>
                <h6>{t("createPassword.step1.dataLabel")}</h6>
                <p>{t("createPassword.step1.dataContent")}</p>
            </div>
            <label>
                <Field type="checkbox" name="terms" checked={values.terms} />
                {t("")}
            </label>
        </>
    );
};

export default Step1;
