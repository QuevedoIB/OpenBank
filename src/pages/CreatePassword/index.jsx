import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import Header from '@/components/common/StepperHeader';

import steps from '@/components/forms/CreatePassword';

const CreatePassword = () => {
    const [step, setStep] = useState(0);
    const [t] = useTranslation();

    const SelectedStep = useMemo(() => steps[step], [step]);

    return (
        <section>
            <Header steps={steps} selectedStep={step} />
            <h1>{t('createPassword.title')}</h1>
            <Formik
                initialValues={{
                    terms: false,
                }}
                onSubmit={async values => {
                    alert(JSON.stringify(values));
                }}
            >
                {({ values }) => (
                    <Form>
                        {<SelectedStep values={values} />}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default CreatePassword;
