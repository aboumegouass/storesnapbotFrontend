import React, { ReactElement } from 'react'
import Rating from '../Rating'

function index(props: any): ReactElement {
    const imageThumb = `url(${props.thumbnail})`
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
        <div className={`app-post ${switchClassHandle()} ${switchSizeHandle()}`}>
            <div className="app-post-thumbnail" style={{ backgroundImage: imageThumb }}></div>
            <div className="app-post-content">
                <ul className="nav app-post-meta">
                    {props.time &&
                        <li className='meta-time'>
                            <span className="material-icons material-icons-outlined">schedule</span>
                            {props.time}
                        </li>
                    }
                    {props.rate &&
                        <li className='meta-rate'>
                            <Rating rate={props.rate} />
                        </li>
                    }
                    {props.user &&
                        <li className='meta-user'>
                            <span className="material-icons material-icons-outlined">person_outline</span>
                            {props.user}
                        </li>
                    }
                </ul>
                <h4 className="title">{props.title}</h4>
                {props.excerpt && <p className="text">{props.excerpt}</p>}
            </div>
        </div>
    )
}

export default index