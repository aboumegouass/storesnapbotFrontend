import 'bootstrap/dist/css/bootstrap.min.css'
import "antd/dist/antd.css";
import '../styles/app.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import Cookies from 'js-cookie'
import axios from '../lib/axios'
import i18n from "i18next";
import en from '../langs/en/en.json'
import ar from '../langs/ar/ar.json'
import { initReactI18next } from "react-i18next";
import { useEffect } from 'react'
import { ConfigProvider } from "antd";

const locales = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  const token = Cookies.get('botToken')
  const lang = Cookies.get('lang')
  useEffect(() => {
    if (!lang) {
      Cookies.set('lang', 'ar')
    }
  }, []);
  i18n.use(initReactI18next)
    // passes i18n down to react-i18next  
    .init({
      // the translations    
      // (tip move them in a JSON file and import them,    
      // or even better, manage them via)
      resources: locales,
      lng: lang,
      // if you're using a language detector, do not define the lng option    
      fallbackLng: "ar",
      interpolation: {
        escapeValue: false
        // react already safes from xss =>-function/interpolation#unescape    
      }
    });
  const tt: any = i18n.dir()
  useEffect(() => {
    if (tt == "ltr") {
      import("../styles/ltr" + ".css");
    }
  }, []);
  return (
    <SWRConfig value={{
      fetcher: async (url: string) => await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      }).then((r: any) => r.data)
    }}>
      <ConfigProvider direction={tt}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SWRConfig>
  )
}

export default MyApp