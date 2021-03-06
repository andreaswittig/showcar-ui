require('../../vendor/zepto/zepto.min.js');
require('./components/polyfills.js')();

let warn = (msg) => {
    if (!window || !window.console) {
        return;
    }
    window.console.warn(msg);
};

window.Storage = require('../../vendor/showcar-storage/src/storage.js');
window.Pager = require('./components/pager.js');

require('../../vendor/showcar-icons/dist/showcar-icons.min.js');
require('./components/custom-dropdown.js');

Zepto(($) => {
    require('./components/navigation.js');
    require('./components/rotating-arrow.js')();
    require('./components/sticky.js')();
    require('./components/collapse.js')();
    require('./components/scroll.js');
});

if (!window.notification) {
    window.notification = require('./components/notification.js');
} else {
    warn('window.notification is already registered.');
}
