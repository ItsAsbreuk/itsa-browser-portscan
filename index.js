/**
 * Tool for checking port status in the browser
 *
 *
 * <i>Copyright (c) 2020 Its Asbreuk - http://itsasbreuk.nl</i><br>
 * BSD-3 License
 *
 *
 * @module itsa-browser-portscan.js
 * @class ItsaBrowserPortScan
 * @since 0.0.1
*/

const TIMEOUT_CLOSED_PORT = 10000; // 10 seconds

(function(win) {
    const DOCUMENT = win.document;

    /**
     * Checks for a host:port to be open.
     *
     * @method checkPortStatus
     * @param host {String} host or ip
     * @param port {number} port to check if it is opened
     * @param [closedTimeout] {number} optional timeout (ms) to determine if a port is closed
     * @return {Promise} resoves with a boolean value: whether the port on the host is open
     * @since 0.0.1
    */
    const checkPortStatus = (host, port, closedTimeout) => {
        if (!DOCUMENT) {
            return Promise.reject('This module should only be used in the browser');
        }
        return new Promise(resolve => {
            const img = DOCUMENT.createElement('img');

            // time determines if the port is open
            const timer = setTimeout(() => {
                img.src = ''; // cancel request
                resolve(false);
            }, closedTimeout || TIMEOUT_CLOSED_PORT);

            img.onload = img.onerror = function() {
                clearTimeout(timer);
                resolve(true);
            };

            // set the source of the image, which will trigger the callbacks:
            img.src = 'http' + ((port == 443) ? 's'  : '') + '://' + host + ':' + port;
        });
    };

    // export checkPortStatus:
    module.exports = checkPortStatus;

}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));
