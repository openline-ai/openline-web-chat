import React, {CSSProperties} from "react";
import './styles.css'
import teamLogo from './teamLogo.png'

interface IAvatarProps {
    style: CSSProperties
}

export const Avatar = (props: IAvatarProps) => {
    return (
            <img
                alt=''
                src={teamLogo}
                className={`transition-3 openline_avatar`}
                style={props.style}
            />
    )
}
