import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Rating from './Rating'

function UserPost(props: any) {
    return (
        <li className={`sub-sidebar-list-item ${props.isActive && ' active'}`}>
            <Link href={`/conversation/${props.id}`}>
                <a>
                    <div className="sub-sidebar-list-item-img">
                        <Image width={40} height={40} src={props.avatar} alt={props.full_name} />
                    </div>
                    <div className="sub-sidebar-list-item-content">
                        <h4 className="title">
                            {props.full_name}
                        </h4>
                        <ul className="meta nav">
                            <li className="meta-stars">
                                <Rating rate={props.rate} />
                            </li>
                        </ul>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default UserPost