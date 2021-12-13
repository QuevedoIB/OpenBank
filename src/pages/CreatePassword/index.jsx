import { useState, useMemo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import Header from '@/components/common/StepperHeader';
import Separator from '@/components/common/Separator';
import steps from '@/components/forms/CreatePassword';
import StyledLink from '@/components/common/StyledLink';
import Footer from './Footer';

import CreatePasswordService from '@/services/CreatePassword';
import { editUser } from '@/redux/reducers/userReducer';

import './CreatePassword.scss';

import { INITIAL_STEP } from '@/constants';

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
    const dispatch = useDispatch();
    const formRef = useRef();

    const hasPassword = useSelector(state => state.user.user.hasMasterPassword); //redux usage example

    const SelectedStep = useMemo(() => steps[step], [step]);

    const resetStep = useCallback(() => {
        setStep(INITIAL_STEP);
    }, []);

    const handlePrevious = useCallback(() => {
        setStep(currentStep => currentStep - 1);
        formRef.current.setErrors({});
    }, []);

    const handleSubmit = useCallback(
        async (data, bag) => {
            const isSubmitStep = step === steps.length - 2;

            if (!isSubmitStep) return setStep(currentStep => currentStep + 1);

            setSubmitRedirect(null);

            try {
                //api call save form data
                const response = await CreatePasswordService.create(data);
                dispatch(editUser(response.data)); //redux usage example
                setSubmitRedirect({
                    path: '/access',
                    text: t(`createPassword.step3.success.actionText`),
                });
            } catch (error) {
                setSubmitRedirect({
                    path: '/',
                    text: t(`createPassword.step3.error.actionText`),
                    error,
                });
            } finally {
                bag.setSubmitting(false);
                bag.resetForm();
                setStep(currentStep => currentStep + 1);
            }
        },
        [step]
    );

    return (
        <section className="create-password-container">
            <Header steps={steps} selectedStep={step} />
            <h1 className="title">{t('createPassword.title')}</h1>
            <Formik
                innerRef={formRef}
                validationSchema={SelectedStep?.validation}
                initialValues={createPasswordInitialValues}
                onSubmit={handleSubmit}
            >
                {({ submitForm, isSubmitting, isValid, dirty, ...form }) => (
                    <Form>
                        <div className="form-body">
                            {
                                <SelectedStep.component
                                    {...form}
                                    submitRedirect={submitRedirect}
                                />
                            }
                        </div>
                        <Separator />
                        <Footer
                            onCancelPress={handlePrevious}
                            steps={steps}
                            selectedStep={step}
                            disabled={!isValid}
                            loading={isSubmitting}
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
