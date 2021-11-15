import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import Header from '@/components/common/StepperHeader';
import Footer from './Footer';
import Separator from '@/components/common/Separator';

import steps from '@/components/forms/CreatePassword';

import './CreatePassword.scss';

const createPasswordInitialValues = {
    terms: false,
    password: '',
    repeatPassword: '',
    hint: '',
};

const CreatePassword = () => {
    const [step, setStep] = useState(0);
    const [t] = useTranslation();

    const SelectedStep = useMemo(() => steps[step], [step]);

    const handlePrevious = useCallback(() => {
        setStep(currentStep => currentStep - 1);
    }, []);

    const handleSubmit = useCallback(async (data, bag) => {
        const isLastStep = step === steps.length - 1;

        if (!isLastStep) return setStep(currentStep => currentStep + 1);

        try {
            //api call save form data
        } catch (error) {
            bag.setSubmitting(false);
        }
    }, []);

    return (
        <section className="create-password-container">
            <Header steps={steps} selectedStep={step} />
            <h1 className="title">{t('createPassword.title')}</h1>
            <Formik
                validationSchema={SelectedStep?.validation}
                initialValues={createPasswordInitialValues}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, isValid, dirty, ...form }) => (
                    <Form>
                        <div className="form-body">
                            {<SelectedStep.component {...form} />}
                        </div>
                        <Separator />
                        <Footer
                            onCancelPress={handlePrevious}
                            steps={steps}
                            selectedStep={step}
                            disabled={isSubmitting || !isValid || !dirty}
                        />
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default CreatePassword;
