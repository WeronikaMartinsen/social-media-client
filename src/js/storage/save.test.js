import { save } from "./save.js";

global.localStorage = {
  setItem: jest.fn((key, value) => {
    global.localStorage[key] = value;
  }),
  getItem: jest.fn((key) => {
    return global.localStorage[key];
  }),
  removeItem: jest.fn((key) => {
    delete global.localStorage[key];
  }),
};

describe("save", () => {
  it("save a value to local storage", () => {
    const theKey = "A key";
    const theValue = 123;

    save(theKey, theValue);

    expect(localStorage[theKey]).toEqual(JSON.stringify(theValue));
    expect(localStorage.setItem).toHaveBeenCalledWith(
      theKey,
      JSON.stringify(theValue),
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
