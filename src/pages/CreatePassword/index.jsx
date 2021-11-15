import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import Header from '@/components/common/StepperHeader';
import Separator from '@/components/common/Separator';
import steps from '@/components/forms/CreatePassword';
import StyledLink from '@/components/common/StyledLink';
import Footer from './Footer';

import CreatePasswordService from '@/services/CreatePassword';

import './CreatePassword.scss';

const INITIAL_STEP = 0;

const createPasswordInitialValues = {
    terms: false,
    password: '',
    repeatPassword: '',
    hint: '',
};

const CreatePassword = () => {
    const [step, setStep] = useState(INITIAL_STEP);
    const [submitRedirect, setSubmitRedirect] = useState(null);
    const [t] = useTranslation();

    const SelectedStep = useMemo(() => steps[step], [step]);

    const resetStep = useCallback(() => {
        setStep(INITIAL_STEP);
    }, []);

    const handlePrevious = useCallback(() => {
        setStep(currentStep => currentStep - 1);
    }, []);

    const handleSubmit = useCallback(async (data, bag) => {
        const isSubmitStep = step === steps.length - 2;

        console.log('STEP, isSubmitStep');

        if (!isSubmitStep) return setStep(currentStep => currentStep + 1);

        setSubmitRedirect(null);

        console.log('SUBMIT');

        try {
            //api call save form data
            const response = await CreatePasswordService.create(data);
            console.log(response, 'success');
            setSubmitRedirect({
                path: '/access',
                text: t(`createPassword.step3.link.access`),
            });
        } catch (error) {
            console.log(error, 'error');

            setSubmitRedirect({
                path: '/',
                text: t(`createPassword.step3.link.access`),
            });
        } finally {
            bag.setSubmitting(false);
            bag.resetForm();
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
                {({ submitForm, isSubmitting, isValid, dirty, ...form }) => (
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
                        >
                            {submitRedirect && (
                                <StyledLink
                                    to={submitRedirect?.path}
                                    classes="footer-right"
                                    onClick={resetStep}
                                >
                                    {submitRedirect?.text}
                                </StyledLink>
                            )}
                        </Footer>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default CreatePassword;
