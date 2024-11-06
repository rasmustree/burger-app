/**
 * @jest-environment jsdom
 */

console.log("Running tests in environment:", global.window ? "jsdom" : "node"); // show env
require('whatwg-fetch'); // make fetch work
const Frontend_operations = require('./Frontend_operations')


test("Seeing if items are added", () => {
    selectedBurger = "Cheeseburgare";
    Frontend_operations.onOrderButtonClick();
    expect(order).toEqual(["Cheeseburgare"]);
});