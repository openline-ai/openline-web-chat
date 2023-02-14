import React, {useState} from "react";
import EmailForm from "./EmailForm";
import './styles.css'
import ChatEngine from "./ChatEngine";

interface WebChatWindowProps {
    visible: boolean
    apikey: string
    httpServerPath: string
    wsServerPath: string
    userEmail?: string | null | undefined
    userEmailSet: (email: string) => void
    location?: string
}


export default function SupportWindow(props: WebChatWindowProps) {
    const [user, setUser] = useState<string>(props.userEmail || '')

    const handleUserEmail = (userEmail: string) => {
        setUser(userEmail)
        props.userEmailSet(userEmail)
    }

    return (
            <>
                {
                        props.visible &&
                        <>
                            <div className='support_window_border transition-5'
                                 style={{
                                     ...{
                                         opacity: props.visible ? '1' : '0',
                                         zIndex: props.visible ? '100' : '-1',
                                         left: props.location === 'left' ? '22px' : 'unset',
                                         right: props.location === 'right' ? '22px' : 'unset'
                                     }
                                 }}>
                                <div
                                        className='support_window transition-5'
                                        style={{
                                            ...{
                                                opacity: props.visible ? '1' : '0',
                                                zIndex: props.visible ? '100' : '-1',
                                                left: props.location === 'left' ? '24px' : 'unset',
                                                right: props.location === 'right' ? '24px' : 'unset'
                                            }
                                        }}
                                >
                                    <EmailForm visible={user === ""}
                                               onSetUser={(userEmail: string) => handleUserEmail(userEmail)}
                                               apikey={props.apikey}
                                               httpServerPath={props.httpServerPath}
                                    />

                                    {user !== "" && <ChatEngine user={user}
                                                                apikey={props.apikey}
                                                                httpServerPath={props.httpServerPath}
                                                                wsServerPath={props.wsServerPath}
                                    />}
                                </div>
                            </div>
                        </>
                }
            </>
    )
}