"use strict";
//sem type alias
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a tittle as " + item);
}
//com type alias
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user + ".");
}
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform('IOS');
logDetails(123, "sapato");
logDetails("123", "sapato");
logDetails(123, "Alyson");
logDetails("123", "Alyson");
