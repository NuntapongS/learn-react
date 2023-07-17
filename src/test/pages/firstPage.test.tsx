import { useState } from "react";
import ButtonCount from "../../components/Countbutton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("firstPage", () => {
  test("when user click increase button count should plus 1", () => {
    const TestComponents = () => {
      const [count, setCount] = useState(0);
      return (
        <div>
          <ButtonCount
            message={"Increase"}
            onClick={() => setCount((count) => count + 1)}
          />
          <div className="flex justify-center">count: {count}</div>
        </div>
      );
    };
    render(<TestComponents />);
    expect(screen.getByText("count: 0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Increase"));
    expect(screen.getByText("count: 1")).toBeInTheDocument();
  });
});
