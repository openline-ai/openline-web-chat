# openline-chat

## Install
There are 2 options to run the Web Chat
1. Use Openline's Oasis servers (recommended).
2. Install your own Oasis:

```
1. yarn install @openline-ai/openline-web-chat
```

```
2. Install oasis: 
https://github.com/openline-ai/openline-oasis
```

### Imports

```javascript
// CSS
import '@openline-ai/openline-web-chat/dist/esm/index.css'
```

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
