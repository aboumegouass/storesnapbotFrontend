import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import LoginLayout from '../layouts/LoginLayout'
import Button from '../components/Button'
import { FormInput } from '../components/Forms'
import PageHeader from '../components/PageHeader'
import Cookies from 'js-cookie'
import axios from '../lib/axios'
import { useFormik } from 'formik'
import { Alert } from '../components/Alert/Alert'
import { useTranslation } from "react-i18next";

function Login() {
    const router = useRouter()
    const [validationsErrors, setValidationsErrors]: any = useState({})
    const [validationsGeneral, setValidationsGeneral]: any = useState({})
    const { t } = useTranslation();
    const lang: any = Cookies.get('lang')
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        isInitialValid: true,
        enableReinitialize: true,
        onSubmit: async values => {
            try {
                setValidationsErrors({})
                const res = await axios.post(`dashboard/login`, values, {
                    headers: {
                        "X-localization": lang
                    }
                })
                // Authentication was successful.
                if (res.status === 200) {
                    Cookies.set('storeToken', res.data.data, { expires: 365 });
                    router.push('/')
                }

            } catch (error: any) {
                if (error.response && error.response.data && error.response.data.errors) {
                    setValidationsErrors(error.response.data.errors);
                }
                if (error.response && error.response.data) {
                    setValidationsGeneral(error.response.data);
                }
                console.log(error.response && error.response.data);
            }
        }
    });
    return (
        <LoginLayout>
            <PageHeader title={t('login_title')} />
            {validationsGeneral.msg && <Alert type="error">{validationsGeneral.msg}</Alert>}
            <form onSubmit={formik.handleSubmit}>
                {/* Email Address */}
                <FormInput
                    title={t('phone_or_email_text')}
                    name='email'
                    isLoading={formik.isSubmitting}
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                    validationsErrors={validationsErrors && validationsErrors.email && validationsErrors.email[0]}
                />

                {/* Password */}
                <FormInput
                    title={t('password_text')}
                    type='password'
                    name='password'
                    isLoading={formik.isSubmitting}
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                    validationsErrors={validationsErrors && validationsErrors.password && validationsErrors.password[0]}
                />

                <div className="flex-center mt-4">
                    <Button title={t('login_title')} isLoading={formik.isSubmitting} handleClick={formik.handleSubmit} />
                    <Link href="/forgot-password">
                        <a className="text-linked me-auto">
                            {t('forget_password_text')}
                        </a>
                    </Link>
                </div>
            </form>
        </LoginLayout>
    )
}

export default Login