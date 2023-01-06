# openline-web-chat

## Select (and install) backend
There are 2 options to run the backend of the webchat:

### 1. Use Openline's Oasis servers (recommended).

We recommend using Openline Cloud as it is overall easier to setup and use.

To do this 

### 2. Install your own Oasis using the Openline CLI

1. Install the package to your project:
```
yarn add @openline-ai/openline-web-chat
```
2. Install and run [Openline Oasis](https://github.com/openline-ai/openline-oasis) via the [Openline CLI](https://www.openline.ai/docs/guides/installing-customer-os)

## Install Webchat to your application

### Imports

```javascript
// CSS
import '@openline-ai/openline-web-chat/dist/esm/index.css'
```

### Webchat Component

```javascript
<WebChat apikey="get-this-from-openline-or-run-oasis" 
         httpServerPath="get-this-from-openline-or-run-oasis" 
         wsServerPath="get-this-from-openline-or-run-oasis" 
         trackerEnabled={true} 
         trackerAppId="get-this-from-openline-or-run-oasis" 
         trackerId="get-this-from-openline-or-run-oasis" 
         trackerCollectorUrl="get-this-from-openline-or-run-oasis" 
         trackerBufferSize="1" 
         trackerMinimumVisitLength="10" 
         trackerHeartbeatDelay="10"
         userEmail="populate this if you know the user and want to skip the provide email step"
    ></WebChat>
```

### Docusaurus and polyfills
webpack >= 5 does not include polyfills. 
If using docusaurus for building, polyfills must be added as a plugin:

Install docusaurus-node-polyfills:
```bash
npm install docusaurus-node-polyfills --save-dev
or
yarn add docusaurus-node-polyfills --dev
```

Include the pluging in the docusaurus.config.js
```javascript
plugins: ['docusaurus-node-polyfills']
```

## Storybook

To test the component outside of your application you can see it in Storybook, use Node.js version 16.16 and run the following command:

```yarn storybook```
