import React from "react";
import './styles.css'

interface IAvatarProps {
    style: {}
}

export const Avatar = (props: IAvatarProps) => {
    return (
            <div
                className={`transition-3 openline_avatar`}
                style={props.style}
            />
    )
}
