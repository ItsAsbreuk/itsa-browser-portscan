# itsa-browser-portscan

Lightweight Port Scanner that works in the browser.

No dependencies

## How it works:

`itsa-browser-portscan` inserts a hidden image in the dom and set its source to the defined host and port.
If the port is opened, the image onload *or* onerror event will be called within 10 seconds. Port 80 and 443
will call the onload, while other ports call onerror. In case a port is closed, no callback happens: the module uses a
10 second timeout to determine that in those cases the port is closed. The image will be removed from the dom
once the Promise is ready.

The only method `itsa-browser-portscan` provides is `checkPortStatus()`. It returns a Promise with either `true` or `false`.

* Open ports 80 and 443 will resolve `true` almost immediattely
* Other open ports will resolve `true` after 5-8 seconds
* Closed ports will resolve `false` after 10 seconds


## How to use:

```js
const checkPortStatus = require('itsa-browser-portscan');

const checkPort = async (host, port) => {
    portOpen = await checkPortStatus(host, port);
    console.log(`${host}:${port} open: ${portOpen}`);
};

checkPort('mydomain.com', 3000);

// or, use the 3rd argument to overrule the default timeout of 10000 miliseconds for determining closed ports:
// checkPort('mydomain.com', 3000, 15000);
```

Code is licensed under the [New BSD License](http://choosealicense.com/licenses/bsd-3-clause/).