import Link from 'next/link'
import React, { ReactElement } from 'react'
import PropTypes from "prop-types";
import LastSeen from './LastSeen';
import { useTranslation } from "react-i18next";

function OrderPost({ id, time, type, title }: any): ReactElement {
    const { t } = useTranslation();

    function switchType() {
        switch (type) {
            case 0:
                return (<span className="app-label primary">{t('processing_text')}</span>)
                
            case 1:
                return (<span className="app-label orange">{t('delivering_text')}</span>)

            case 2:
                return (<span className="app-label blue">{t('completed_text')}</span>)

            case 3:
                return (<span className="app-label pink">{t('cancelled_text')}</span>)

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
                <h4 className="title d-flex">
                    {title} <span className='me-auto'>{switchType()}</span>
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
    title: PropTypes.any,
}