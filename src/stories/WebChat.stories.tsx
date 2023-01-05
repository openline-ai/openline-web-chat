import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {WebChat as WebChatComponent} from "../components";
import "react-chat-elements/dist/main.css"

export default {
  title: 'Openline/WebChat',
  component: WebChatComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof WebChatComponent>;

const Template: ComponentStory<typeof WebChatComponent> = (args) => ( <WebChatComponent {...args}/>)

const commonArgs = {
        apikey: 'nobody-will-guess-this-api-key',
        httpServerPath: 'http://localhost:8013/api/v1',
        wsServerPath: 'ws://localhost:8013/api/v1',
        trackerEnabled: false,
        trackerId: '',
        trackerAppId: '',
        trackerCollectorUrl: '',
        trackerBufferSize: '',
        trackerHeartbeatDelay: '',
        trackerMinimumVisitLength: ''
}


export const OtterWebChat = Template.bind({});
OtterWebChat.args = { ...commonArgs };

export const CustomWebChat = Template.bind({});
CustomWebChat.args = { ...commonArgs, children: (<button>Click me</button>)};
