import React, {useRef, useEffect, useState, RefObject, FunctionComponent, FC, MouseEventHandler} from "react";
import Avatar from "../Avatar/Avatar";

interface HelpChatProps {
}


export default class HelpChat extends React.Component<HelpChatProps> {
    wrapperRef = useRef<HTMLInputElement>(null);

    constructor(props: HelpChatProps) {
        super(props);
        this.state = {isVisible: false}
    }

    render() {
        return (
                <div>
                    <Avatar
                            onClick={() => {
                                this.setState({isVisible: false})
                            }}
                            style={{
                                position: 'fixed',
                                bottom: '24px',
                                right: '24px',
                            }}
                    />
                </div>
        )
    }
}