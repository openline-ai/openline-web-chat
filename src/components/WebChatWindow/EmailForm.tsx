import React, {useState} from "react"
import './styles.css'
import {LoadingOutlined} from '@ant-design/icons'
import {Avatar} from '../index';

interface EmailPros {
    onSetUser: (user: string) => void
    visible: boolean
    apikey: string
    httpServerPath: string
}

export default function EmailForm(props: EmailPros) {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback: any) {
        fetch(`${props.httpServerPath}/webchat/?email=${email}`, {
            headers: {
                "Content-Type": "application/json",
                'WebChatApiKey': `${props.apikey}`
            },
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(response => {
            callback(response.username)
        }).catch(error => {
            console.log(error);
        });

    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        getOrCreateUser(
            (user: string) => {
                setLoading(false)
                props.onSetUser(user)
            }
        )
    }

    return (
        <div
            className='email_form_window'
            style={{
                ...{
                    height: props.visible ? '100%' : '0px',
                    opacity: props.visible ? '1' : '0'
                }
            }}
        >
            <div style={{height: '0px'}}>
                <div className='stripe'/>
            </div>

            <div
                className='loading_div transition-5'
                style={{
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
            <LoadingOutlined
                className='loading_icon transition-5'
                style={{
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)',
                    }
                }}
            />

            <div style={{position: 'absolute', height: '100%', width: '100%', textAlign: 'center'}}>
                <Avatar
                       style={{
                          position: 'relative',
                          top: '10%',
                       }}
                />

                <div className='top_text'>
                    Welcome to Openline 👋
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{position: 'relative', width: '100%', top: '19.75%'}}
                >
                    <input
                        placeholder='Your Email'
                        onChange={e => setEmail(e.target.value)}
                        className='email_input'
                        type="email"
                    />
                </form>

                <div className='bottom_text'>
                    Enter your email <br/> to get started.
                </div>
            </div>
        </div>
    )
}