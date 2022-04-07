import Navigation from './Navigation'
import { ReactElement, useEffect, useState } from 'react'
import Router from 'next/router'
import PropTypes from "prop-types";
import Cookies from 'js-cookie'
import { motion } from 'framer-motion'
const AppLayout = ({ children }: any): ReactElement => {
    const token = Cookies.get('storeToken')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token) {
            Router.push('/login')
        }
        const handleStart = (url: any) => {
            url !== Router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = () => setLoading(false);

        Router.events.on("routeChangeStart", handleStart);
        Router.events.on("routeChangeComplete", handleComplete);
        Router.events.on("routeChangeError", handleComplete);
    }, [Router]);
    return (
        <>
            {token &&
                <div className="row justify-content-md-center">
                    <div className="col-md-9 p-0">
                        <Navigation />
                        {/* Page Content */}
                        <main className={loading ? 'is-loading-page' : ''}>
                            <div className="position-fixed-loading">
                                {loading && <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="spinner-border" style={{ width: 55, height: 55 }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </motion.div>}
                            </div>

                            {children}
                        </main>
                    </div>
                </div>
            }
        </>
    )
}
AppLayout.propTypes = {
    children: PropTypes.any,
}
export default AppLayout