import React from "react";
import teamLogo from './teamLogo.png'
import './styles.css'

interface IAvatarProps {
    onClick: () => void
    location?: string
}

export const AvatarButton = ({
        onClick,
        location
 }: IAvatarProps) => {


    return (
        <div className='openline_avatar_wrapper'
             style={{
                    ...{ left: location === "left" ? '24px' : 'unset',
                        right: location === "right" ? '24px' : 'unset'}
             }}>
            <div
                className='transition-3 openline_avatar_tooltip'
                style={{
                    ...{ left: location === 'right' ? 'calc(-100% - 55px - 28px)' : 'unset',
                        right: location === 'left' ? '-145px' : 'unset',
                        borderRadius: location === 'right' ? '24px 24px 4px 24px' : '24px 24px 24px 4px'}
                }}
            >
                {"How can we help?"}
            </div>
            <img
                alt='How can we help?'
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
