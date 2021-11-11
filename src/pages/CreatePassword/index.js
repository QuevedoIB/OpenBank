import React from 'react';
import { Formik, Form, Field } from 'formik';

const CreatePassword = () => {
    return (
        <section>
            <Formik
                initialValues={{
                    toggle: false,
                }}
                onSubmit={async values => {
                    alert(JSON.stringify(values));
                }}
            >
                {({ values }) => (
                    <Form>
                        <label>
                            <Field type="checkbox" name="toggle" />
                            {`${values.toggle}`}
                        </label>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default CreatePassword;
