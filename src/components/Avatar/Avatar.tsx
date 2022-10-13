import React, {useState} from "react";
import {styles} from './styles'

interface AvatarState {
    isHovered: boolean,
    onClick: () => void,
    style: {}
}

interface IAvatarProps {
    onClick: () => void,
    style: {}
}

export default class Avatar extends React.Component<IAvatarProps> {
    state:AvatarState
    constructor(props: IAvatarProps) {
        super(props);
        this.state = {isHovered: false, onClick: props.onClick, style: props.style}
    }

    render() {
        return (
                <div style={this.state.style}>
                    <div
                            className='transition-3'
                            style={{
                                ...styles.avatarHello,
                                ...{opacity: this.state.isHovered ? '1' : '0'}
                            }}
                    >
                        {" Send us a message"}
                    </div>
                    <div
                            onMouseEnter={() => this.setState({isHovered: true})}
                            onMouseLeave={() => this.setState({isHovered: false})}
                            onClick={() => this.state.onClick && this.state.onClick()}
                            className='transition-3'
                            style={{
                                ...styles.chatWithOpenlineButton,
                                ...{border: this.state.isHovered ? '1px solid #f9f0ff' : '4px solid #7a39e0'}
                            }}
                    />
                </div>
        )
    }
}
