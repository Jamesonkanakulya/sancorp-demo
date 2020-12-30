import React,{useSta} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './form/FormikControl'
import TitleOne from './TitleOne'

function ConatctForm() {

    const initialValues = {
        name: '',
        email: '',
        massage: ''
    }

    const scheema = Yup.object({
        name: Yup.string().required('This field is required'),
        email: Yup.string().required('This field is required').email(),
        massage: Yup.string().required('This field is required').min(15),
    })

    const Submit = (values,onSubmitProps) => {
        console.log(values);
        // console.log(onSubmitProps);
        onSubmitProps.isSubmitting(false)
        onSubmitProps.resetForm()
    }

    const checkboxOptions = [
        { key: 'I agree that my submitted data is being collected and stored.', value: 'cOption1' },

    ]
    return (<div className="container contanct-form p-2">
        <TitleOne title="Get In Touch"/>

        <h6>HAVE A QUESTION FOR US?</h6>
        <Formik
            initialValues={initialValues}
            validationSchema={scheema}
            onSubmit={Submit}
            validateOnMount
        >
            {
                formik => (<Form>

                    <FormikControl
                        control='input'
                        type="text"
                        name='name'

                    />
                    <FormikControl
                        control='input'
                        type="email"
                        name="email"



                    />
                    <FormikControl
                        control='textarea'
                        type="textarea"
                        name="massage"



                    />

                    <FormikControl
                        control='checkbox'
                        type="checkbox"
                        name='checkboxOption'
                        options={checkboxOptions}
                    />

                    <button className={formik.isSubmitting || formik.isValid?"formik-button":"disable-button"} 
                    type='submit' disabled={formik.isSubmitting  || !formik.isValid }>Submit</button>



                </Form>

                )
            }


        </Formik>
    </div>

    )
}

export default ConatctForm
