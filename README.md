# itsa-browser-portscan

Lightweight Port Scanner that works in the browser.

No dependencies

## How it works:

checkPortStatus() returns a Promise with either `true` or `false`.

* Open ports 80 and 443 will resolve almost immediattely
* Other open ports will resolve after 5-8 seconds
* Closed ports will reolve after 10 seconds


## How to use:

```js
const checkPortStatus = require('itsa-browser-portscan');

const checkPort = async (host, port) => {
    portOpen = await checkPortStatus(host, port);
    console.log(`${host}:${port} open: ${portOpen}`);
};

checkPort('mydomain.com', 3000);
```

Code is licensed under the [New BSD License](http://choosealicense.com/licenses/bsd-3-clause/).