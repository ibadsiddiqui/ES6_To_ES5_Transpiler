'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = function () {
    function Human() {
        _classCallCheck(this, Human);

        this.name = 'Leeroy Jenkins';
    }

    _createClass(Human, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('hi');
        }
    }]);

    return Human;
}();

var LeeroyJenkins = new Human();
console.log(LeeroyJenkins.name());
console.log(LeeroyJenkins.name());
