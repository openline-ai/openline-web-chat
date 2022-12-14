import React, {useEffect, useRef, useState} from "react";
import {AvatarButton} from "../Avatar";
import WebChatWindow from "../WebChatWindow/WebChatWindow";
import OpenlineTracker from "./OpenlineTracker";

interface WebChatProps {
    apikey: string
    httpServerPath: string
    wsServerPath: string
    trackerEnabled: boolean
    trackerAppId: string
    trackerId: string
    trackerCollectorUrl: string
    trackerBufferSize: string
    trackerMinimumVisitLength: string
    trackerHeartbeatDelay: string
    children?: React.ReactElement | undefined
    userEmail?: string | null
    location?: 'left' | 'right'
}

export default function WebChat({
                                    apikey,
                                    httpServerPath,
                                    wsServerPath,
                                    trackerEnabled,
                                    trackerAppId,
                                    trackerId,
                                    trackerCollectorUrl,
                                    trackerBufferSize,
                                    trackerMinimumVisitLength,
                                    trackerHeartbeatDelay,
                                    userEmail,
                                    children,
                                    location,

}: WebChatProps) {
    const componentRef = useRef();

    const [userEmailInternal, setUserEmailInternal] = useState<string>(userEmail || '')

    const [visible, isVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);

        function handleClick(e: any) {
            if (componentRef && componentRef.current) {
                const ref: any = componentRef.current
                if (!ref.contains(e.target)) {
                    isVisible(false)
                }
            }
        }
    }, []);

    const handleToggleChatWindow = () => visible ? isVisible(false) : isVisible(true)

    return (
        <div ref={componentRef as any} style={{position: "relative"}}>
            <WebChatWindow visible={visible}
                           apikey={apikey}
                           httpServerPath={httpServerPath}
                           wsServerPath={wsServerPath}
                           userEmail={userEmailInternal}
                           userEmailSet={(newUserEmail: any) => setUserEmailInternal(newUserEmail)}
                           location={location}
            />

            {children ? React.cloneElement(children, { onClick: handleToggleChatWindow }) :
                <AvatarButton
                    onClick={handleToggleChatWindow}
                    location={location}
            />}

            <OpenlineTracker
                enabled={trackerEnabled}
                appId={trackerAppId}
                trackerId={trackerId}
                collectorUrl={trackerCollectorUrl}
                bufferSize={trackerBufferSize}
                minimumVisitLength={trackerMinimumVisitLength}
                heartbeatDelay={trackerHeartbeatDelay}
                userEmail={userEmailInternal}
            />

        </div>
    )

}