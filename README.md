# itsa-browser-portscan

Lightweight Port Scanner that works in the browser.

No dependencies

## How to use:

```js
const checkPortStatus = require("itsa-browser-portscan");

const checkPort = async (host, port) => {
    portOpen = await checkPortStatus(host, port);
    console.log(`${host}:${port} open: `, portOpen);
};

checkPort('mydomain.com', 3000);
```

Code is licensed under the [New BSD License](http://choosealicense.com/licenses/bsd-3-clause/).