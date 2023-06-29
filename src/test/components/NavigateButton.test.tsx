import * as navigateButton from "../../components/NavigateButton";

describe("navigate button", () => {
  test("User should see navigate button background is back and text white", () => {
    const actaul = navigateButton.styleButton();
    expect(actaul).toBe(
      "justify-center items-center bg-black text-white rounded-lg h-11 w-36"
    );
  });
});
