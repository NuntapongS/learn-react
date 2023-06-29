import * as buttonCount from "../../components/Countbutton";

describe("button count", () => {
  test("user should see background button is black and text white", () => {
    const actual = buttonCount.styleButton();
    expect(actual).toBe(
      "flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6"
    );
  });
});
