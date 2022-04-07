import Link from 'next/link'
import React, { ReactElement } from 'react'
import PropTypes from "prop-types";
import LastSeen from './LastSeen';
import { useTranslation } from "react-i18next";

function OrderPost({ id, time, type }: any): ReactElement {
    const { t } = useTranslation();

    function switchType() {
        switch (type) {
            case 0:
                return (<span className="app-label primary">{t('pending_text')}</span>)

            case 1:
                return (<span className="app-label orange">{t('pending_text')}</span>)

            case 2:
                return (<span className="app-label blue">{t('pending_text')}</span>)

            case 3:
                return (<span className="app-label pink">{t('pending_text')}</span>)

            default:
                break;
        }
    }
    return (
        <Link href={`/orders/${id}`}>
            <a className='post-item post-order'>
                <p className="meta-text">
                    <span className="material-icons material-icons-outlined">
                        schedule
                    </span>
                    <LastSeen date={time} />
                </p>
                <h4 className="title">
                    {switchType()}
                </h4>
            </a>
        </Link>
    )
}

export default OrderPost
OrderPost.propTypes = {
    id: PropTypes.any,
    time: PropTypes.any,
    type: PropTypes.any,
}