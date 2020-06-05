import React from 'react';
import { render, fireEvent, waitFor, getByDisplayValue, } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import userEvent from "@testing-library/user-event";
import App from './App';


import { episodeFixture } from "./components/Episode.test";

jest.mock("./api/fetchShow");

test("App fetches and renders episodes", async () => {
    mockFetchShow.mockResolvedValueOnce({ data: episodeFixture })
    //is data: a banana?
    expect(true).toBe(true);
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />)
    expect(mockFetchShow).toHaveBeenCalledTimes(1)

    await waitFor(() => {
        userEvent.click(getByTestId(/selectSeason/i))
        userEvent.click(getByPlaceholderText(/Select an option/i))

    })
    await waitFor(() => {
        expect(queryAllByTestId("episodes")).toHaveLength(0);
    })

})