"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo',"foo",`foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array ('type'[])
var items;
items = ['alyson', 'felipe'];
var values;
values = [1, 2, 3];
//tuple (tipo um array, mas vc sabe exatamente quanto e quais itens tem)
var title;
tittle: [1, 'alyson', 'felipe'];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NAO E VIAVEL!
var coisa;
coisa = [1];
//void
function logger() {
    console.log('foo');
}
//never (nunca vai retornar)
function error() {
    throw new Error('error');
}
//object
var cart;
cart = {
    key: 'fi'
};
