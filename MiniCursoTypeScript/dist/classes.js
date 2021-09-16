"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " have " + this.age + " years old");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nick, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nick = nick;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.charDetails = function () {
        console.log("The player " + this.name + " have " + this.age + " years old your nickname is " + this.nick + " and have level " + this.level);
    };
    return CharAccount;
}(UserAccount));
var alys = new UserAccount('Alyson', 18);
console.log(alys);
console.log(alys.age);
alys.logDetails();
var felipe = new CharAccount('Felipe', 23, 'paetzoldfelipe', 8001);
felipe.charDetails();
