import React from "react";
import SearchPanel from "../search-panel/search-panel";
import { render, screen, fireEvent } from "@testing-library/react";


const onUpdateSearchApp = jest.fn()
describe('SearchPanel', () => {
  it('should call SearchPanel when data is correct',  () => {
    render(<SearchPanel onUpdateSearchApp={onUpdateSearchApp} />)
    const input = screen.getByTestId('Search-Input')
 
    fireEvent.change(input, { target: { value: 'Mom' } })

    expect(screen.getByTestId('Search-Input').value).toBe('Mom')
    expect(onUpdateSearchApp).toHaveBeenCalledWith('Mom')

  })


})
