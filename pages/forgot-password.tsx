import { FormInput } from '../components/Forms'
import PageHeader from '../components/PageHeader'
import axios from '../lib/axios'
import { useFormik } from 'formik'
import { Alert } from '../components/Alert/Alert'
import React, { useState } from 'react'
import LoginLayout from '../layouts/LoginLayout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../components/Button'
import { useTranslation } from "react-i18next";

function ForgotPassword() {
    const { t } = useTranslation();

    const router = useRouter()
    const [validationsErrors, setValidationsErrors]: any = useState({})
    const [validationsGeneral, setValidationsGeneral]: any = useState({})
    const [isSuccess, setIsSuccess]: any = useState()
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        isInitialValid: true,
        enableReinitialize: true,
        onSubmit: async values => {
            setIsSuccess(false)
            try {
                setValidationsErrors({})
                setValidationsGeneral({})
                const res = await axios.post(`dashboard/password/forget/sendResetLink`, values)
                // Authentication was successful.
                if (res.status === 200) {
                    setIsSuccess(true)
                }
            } catch (error: any) {
                setIsSuccess(false)
                if (error.response && error.response.data && error.response.data.errors) {
                    setValidationsErrors(error.response.data.errors);
                }
                if (error.response && error.response.data) {
                    setValidationsGeneral(error.response.data);
                }
            }

        }
    });
    return (
        <LoginLayout>
            <PageHeader title={t('restore_title')} />
            {isSuccess && <Alert type="success">{t('sent_link_msg')}</Alert>}
            {validationsGeneral.msg && <Alert type="error">{validationsGeneral.msg}</Alert>}
            <form onSubmit={formik.handleSubmit}>
                {/* Email Address */}
                <FormInput
                    title={t('email_text')}
                    name='email'
                    isLoading={formik.isSubmitting}
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                    validationsErrors={validationsErrors && validationsErrors.email && validationsErrors.email[0]}
                />
                <div className="d-flex items-center justify-end mt-4">
                    <Button title={t('restore_text')} isLoading={formik.isSubmitting} handleClick={formik.handleSubmit} />
                    <Link href="/login">
                        <a className="text-linked me-auto">
                            {t('login_title')}
                        </a>
                    </Link>
                </div>
            </form>
        </LoginLayout>
    )
}

export default ForgotPassword