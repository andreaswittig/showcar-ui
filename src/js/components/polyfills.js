module.exports = () => {
    'use strict';

    let isDom4Browser = document.head
        && ('matches' in document.head)
        && ('classList' in document.head)
        && 'CustomEvent' in window;

    let isEs5Browser = 'map' in Array.prototype
        && 'isArray' in Array
        && 'bind' in Function.prototype
        && 'keys' in Object
        && 'trim' in String.prototype;

    require('document-register-element');
    require('picturefill');
    require('array.from');

    if (!isDom4Browser) {
        require('dom4');
    }

    // TODO: check whether we need this
    //if (!isEs5Browser) {
    //    require('es5-shim/es5-shim.min.js');
    //}
};