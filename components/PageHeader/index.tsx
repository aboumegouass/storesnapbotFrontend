import Link from 'next/link'
import React, { ReactElement } from 'react'
import PropTypes from "prop-types";

function index(props: any): ReactElement {
    const switchClassHandle = () => {
        switch (props.type) {
            case 'light':
                return 'light'

            case 'dark':
                return 'dark'

            case 'primary':
                return 'primary'

            default:
                return 'primary'
        }
    }
    const switchSizeHandle = () => {
        switch (props.size) {
            case 'xs':
                return 'xs'

            case 'sm':
                return 'sm'

            case 'md':
                return 'butt-md'

            default:
                return 'sm'
        }
    }
    return (
        <div className={`app-header ${switchClassHandle()} ${switchSizeHandle()} d-flex`}>
            <h4 className="title">{props.title}</h4>
            {props.showAllText && <Link href={props.link}>
                <a
                    className={`btn butt-${switchSizeHandle()} butt-${switchClassHandle()}`}
                >
                    {props.showAllText}
                </a>
            </Link>}
        </div>
    )
}

index.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    showAllText: PropTypes.string,
};
export default index