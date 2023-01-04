import React from "react";
import teamLogo from './teamLogo.png'
import './styles.css'

interface IAvatarProps {
    onClick: () => void,
}

export const AvatarButton = ({
        onClick,
 }: IAvatarProps) => {


    return (
        <div className='openline_avatar_wrapper'>
            <div
                className='transition-3 openline_avatar_tooltip'
            >
                {"Send us a message"}
            </div>
            <img
                alt='Send us a message'
                src={teamLogo}
                role="button"
                tabIndex={0}
                onClick={onClick}
                onKeyDown={({key}) => key === 'Enter' && onClick()}
                className='transition-3 openline_webchat_button'
            />
        </div>
    )
}
