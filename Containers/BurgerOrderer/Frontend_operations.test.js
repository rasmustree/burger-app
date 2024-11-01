const Frontend_operations = require('./Frontend_operations')

test("Seeing if items are added", () => {
    selectedBurger = "Cheeseburgare";
    Frontend_operations.onOrderButtonClick();
    expect(order).toEqual(["Cheeseburgare"]);
});