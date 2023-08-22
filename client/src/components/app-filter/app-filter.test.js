import React from "react";
import SearchPanel from "../search-panel/search-panel";
import { render, screen } from "@testing-library/react";
import AppFilter from "../app-filter/app-filter";
import selectEvent from "react-select-event";
import userEvent from "@testing-library/user-event";

const filter = "";
const selectorMonth = null;
const onFilterSelect = jest.fn();
const onSelectorMonth = jest.fn();

describe("onFilterSelect", () => {
  it("should call onFilterSelect and onSelectorMonth when data is correct", async () => {
    render(
      <AppFilter
        filter={filter}
        onFilterSelect={onFilterSelect}
        onSelectorMonth={onSelectorMonth}
        selectorMonth={selectorMonth}
      />
    );

    const btns = screen.getAllByRole("button");
    const monthElem = screen.getByText("Select...");

    expect(btns.map((item) => item.textContent)).toStrictEqual([
      "All people",
      "Presents",
      "Congratulations",
    ]);

    await selectEvent.select(monthElem, ["April"]);

    expect(onSelectorMonth).toHaveBeenCalledWith({
      label: "April",
      value: "April",
    });
    expect(onFilterSelect).toHaveBeenNthCalledWith(1, `month:April`);

    await userEvent.click(btns[0]);
    expect(onFilterSelect).toHaveBeenNthCalledWith(2, "all");
    await userEvent.click(btns[1]);
    expect(onFilterSelect).toHaveBeenNthCalledWith(3, "gift1");
    await userEvent.click(btns[2]);
    expect(onFilterSelect).toHaveBeenNthCalledWith(4, "congratulate");
  });
});
