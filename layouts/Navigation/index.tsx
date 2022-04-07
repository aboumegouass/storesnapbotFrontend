import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import axios from '../../lib/axios'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import { useTranslation } from "react-i18next";

function index(): ReactElement {
    const { t } = useTranslation();
    const lang = Cookies.get('lang')
    const [switchLang, setSwitchLang] = useState(lang || '')
    function switchLanguage(e: any) {
        if (e.target.value) {
            setSwitchLang(e.target.value)
            Cookies.set('lang', e.target.value)
            Router.reload()
        }
    }

    const navs = [
        {
            id: 1,
            name: t('home_text'),
            icon: 'home',
            href: '/'
        },
        {
            id: 2,
            name: t('categories_text'),
            icon: 'local_offer',
            href: '/categories'
        },
        {
            id: 3,
            name: t('products_text'),
            icon: 'style',
            href: '/products'
        },
        {
            id: 4,
            name: t('orders_text'),
            icon: 'collections_bookmark',
            href: '/orders'
        },
    ]

    const token = Cookies.get('botToken')
    const [isLoading, setIsLoading] = useState(false);
    const path = useRouter()

    const logoutHandle = async () => {
        setIsLoading(true)
        try {
            const res: any = await axios.post(`dashboard/logout`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.status === 200) {
                setIsLoading(false)
                Cookies.remove('botToken')
                Router.reload()
            }
        } catch (error: any) {
            setIsLoading(false)
        }
    }
    return (
        <div className="app-sidebar">
            <div className="app-logo pt-1">
                <Link href={'/'}>
                    <a>
                        <Image src={Logo} width={93} height={34} alt="Snapbot" />
                    </a>
                </Link>
            </div>
            <div className="nav-sidebar">
                <ul className="app-nav">
                    {navs.map((e: any) => (
                        <li className={e.href == path.route ? 'active' : ''}>
                            <Link href={e.href}>
                                <a>
                                    <span className={"material-icons" + (e.href == path.route ? '' : ' material-icons-outlined')}>{e.icon}</span> {e.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right-nav d-flex py-1">
                <button onClick={logoutHandle} disabled={isLoading} className='btn butt-xs mx-1 butt-red-out flex-center'>
                    {t('logout_text')}
                </button>
                <select className='switch-lang switch-lang-link' name="switchLang" id="switchLang" value={switchLang} onChange={switchLanguage}>
                    <option value="">اختر اللغة</option>
                    <option value="ar">عربي</option>
                    <option value="en">English</option>
                </select>
            </div>
        </div>
    )
}

export default index