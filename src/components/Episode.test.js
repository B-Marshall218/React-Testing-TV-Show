import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

export const episodeFixture = [
    {
        "id": 2993,
        "url": "http://www.tvmaze.com/shows/2993/stranger-things",
        "name": "Stranger Things",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama", "Fantasy", "Science-Fiction"
        ],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-07-15",
        "officialSite": "https://www.netflix.com/title/80057281",
        "schedule": { "time": "", "days": ["Thursday"] },
        "rating": { "average": 8.7 },
        "weight": 99,
        "network": null,
    }]

test("Episodes renders episode data", () => {
    // expect(true).toBe(true);
    const { queryAllByTestId, rerender } = render
        (<Episodes error="" episodes={[]} />)
    expect(queryAllByTestId("episodes")).toStrictEqual([])
    expect(queryAllByTestId("episodes")).toHaveLength(0);
    rerender(<Episodes error="" episodes={episodeFixture} />)

    expect(queryAllByTestId("episodes")).toHaveLength(1);
})