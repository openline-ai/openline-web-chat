import React, {useEffect} from 'react';
import {enableActivityTracking, newTracker, trackPageView} from '@snowplow/browser-tracker';
import {enableLinkClickTracking, LinkClickTrackingPlugin} from '@snowplow/browser-plugin-link-click-tracking';
import {BrowserTracker} from "@snowplow/browser-tracker-core";

interface OpenlineTrackerProps {
    enabled: boolean
    trackerId: string
    appId: string
    collectorUrl: string
    bufferSize: string
    minimumVisitLength: string
    heartbeatDelay: string
    userEmail?: string | null | undefined
}

export default function OpenlineTracker(props: OpenlineTrackerProps) {

    const [browserTracker, setBrowserTracker] = React.useState<BrowserTracker | null>(null)

    function propertyOrDefault<T>(propertyValue: T, defaultValue: T) {
        if (propertyValue !== undefined) {
            return propertyValue;
        }
        return defaultValue;
    }

    useEffect(() => {
        if (props.enabled) {
            console.log('enabled')
            let bt = newTracker(props.trackerId, props.collectorUrl, {
                appId: props.appId,
                discoverRootDomain: true,
                cookieSecure: true,
                cookieSameSite: "None",
                eventMethod: "post",
                postPath: "/ai.openline.sp/tp2",
                platform: "web",
                bufferSize: parseInt(propertyOrDefault<string>(props.bufferSize, "1")),
                contexts: {
                    webPage: true
                },
                plugins: [LinkClickTrackingPlugin()],
            });

            console.log('in tracker in constructor')
            console.log(props.userEmail)

            if (props.userEmail) {
                bt.setUserId(props.userEmail);
            }

            setBrowserTracker(bt);

            enableActivityTracking({
                minimumVisitLength: parseInt(propertyOrDefault(props.minimumVisitLength, "30")),
                heartbeatDelay: parseInt(propertyOrDefault(props.heartbeatDelay, "30"))
            });

            enableLinkClickTracking({
                pseudoClicks: true,
                //denylist: ['untracked'],
                trackContent: true
            });

            trackPageView({}, [props.trackerId]);
        }
    }, []);

    useEffect(() => {
        console.log('in widget in useEffect')
        console.log(browserTracker)
        console.log(props.userEmail)
        if (browserTracker && props.userEmail) {
            console.log('in tracker in listener')
            console.log(props.userEmail)
            browserTracker.setUserId(props.userEmail);
        }

    }, [browserTracker, props.userEmail])

    return (
            <></>
    )
}