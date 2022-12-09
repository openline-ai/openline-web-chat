import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {WebChat} from "../components";
import "react-chat-elements/dist/main.css"

export default {
  title: 'Openline/WebChat',
  component: WebChat,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof WebChat>;

const Template: ComponentStory<typeof WebChat> = (args) => <WebChat {...args} />;

export const LocalOasis = Template.bind({});
LocalOasis.args = {
    apikey: 'nobody-will-guess-this-api-key',
    httpServerPath: 'http://localhost:8013/api/v1',
    wsServerPath: 'ws://localhost:8013/api/v1',
    trackerEnabled: false,
    trackerId: '',
    trackerAppId: '',
    trackerCollectorUrl: '',
    trackerBufferSize: '',
    trackerHeartbeatDelay: '',
    trackerMinimumVisitLength: '',
};