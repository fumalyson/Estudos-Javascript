"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: 'Assistir rick and morty de novo',
    description: 'Por que e muito bom',
    completed: false
};
console.log(todo);
// todo.completed = true
function upTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = upTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Dark",
    completed: false
};
var todo4 = {
    title: "Dark",
    completed: false
};
