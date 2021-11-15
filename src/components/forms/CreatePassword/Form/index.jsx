import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import i18n from '@/locale';

import Input from '@/components/common/Input';

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 24;
const HINT_MAX_LENGTH = 240;

export const validation = Yup.object().shape({
    password: Yup.string()
        .required(i18n.t('forms.errors.required'))
        .min(
            PASSWORD_MIN_LENGTH,
            i18n.t('forms.errors.minLength', { value: PASSWORD_MIN_LENGTH })
        )
        .max(
            PASSWORD_MAX_LENGTH,
            i18n.t('forms.errors.maxLength', { value: PASSWORD_MAX_LENGTH })
        )
        .matches(
            /^(?=.*[A-Z])(?=.*\d).{0,}$/,
            i18n.t('forms.errors.password.format')
        ),
    repeatPassword: Yup.string()
        .required(i18n.t('forms.errors.required'))
        .oneOf(
            [Yup.ref('password'), null],
            i18n.t('forms.errors.password.notMatch')
        ),
    hint: Yup.string().max(
        HINT_MAX_LENGTH,
        i18n.t('forms.errors.maxLength', { value: HINT_MAX_LENGTH })
    ),
});

const Step2 = ({}) => {
    const [t] = useTranslation();
    return (
        <>
            <p>{t('createPassword.common.workContent')}</p>
            <div>
                <Input
                    name="password"
                    label={t('createPassword.step2.passwordLabel', {
                        action: t('common.create'),
                        type: t('createPassword.common.master'),
                    })}
                    placeholder={t('createPassword.step2.passwordLabel', {
                        action: t('common.type'),
                    })}
                    secureTextEntry
                />
                <Input
                    name="repeatPassword"
                    label={t('createPassword.step2.passwordLabel', {
                        action: t('common.repeat'),
                        type: t('createPassword.common.master'),
                    })}
                    placeholder={t('createPassword.step2.passwordLabel', {
                        action: t('common.repeat'),
                    })}
                    secureTextEntry
                />
            </div>
            <p>{t('createPassword.step2.passwordFooter')}</p>
            <Input
                name="hint"
                label={t('createPassword.step2.hintLabel')}
                placeholder={t('createPassword.step2.hintPlaceholder')}
            />
        </>
    );
};

export default Step2;
