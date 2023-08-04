import React from "react";
import BirthdayAddForm from "../birthday-add-form/birthday-add-form";
import { render, screen } from "@testing-library/react";
import selectEvent from 'react-select-event'
import userEvent from '@testing-library/user-event'

const onAdd = jest.fn()
describe('BirthdayAddForm', () => {
  it('should call onAdd when data is correct', async () => {
    render(<BirthdayAddForm onAdd={onAdd} />)
    const personElem = screen.getByTestId('Person-Input')
    const birthdayDateElem = screen.getByTestId('Birthday-Input')
    const monthElem = screen.getByText('Select...')
    const addBtn = screen.getByTestId('Add-Btn')


    await userEvent.type(personElem, 'Test User Name')
    await userEvent.type(birthdayDateElem, '12')
    // screen.debug(birthdayDateElem)
    // screen.getByText('xzckjchvdksj')
    await selectEvent.select(monthElem, ['March'])
    await userEvent.click(addBtn)
    expect(onAdd).toHaveBeenCalledWith('Test User Name', 12, 'March')

    expect(screen.getByTestId('Person-Input').value).toBe('')
    expect(screen.getByTestId('Birthday-Input').value).toBe('')

  })
  it('should not call onAdd when data is incorrect', async () => {
    render(<BirthdayAddForm onAdd={onAdd} />)
    const personElem = screen.getByTestId('Person-Input')
    const birthdayDateElem = screen.getByTestId('Birthday-Input')
    const monthElem = screen.getByText('Select...')
    const addBtn = screen.getByTestId('Add-Btn')

    await userEvent.type(personElem, '_')
    await userEvent.type(birthdayDateElem, '0')
    // screen.debug(birthdayDateElem)
    // screen.getByText('xzckjchvdksj')
    await selectEvent.select(monthElem, ['April'])
    await userEvent.click(addBtn)


    expect(onAdd).not.toHaveBeenCalled()

  })
})