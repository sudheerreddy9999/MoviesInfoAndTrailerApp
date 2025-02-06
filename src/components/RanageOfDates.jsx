import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList.jsx";

function RangeOfdates() {

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [serachValue, setSearchValue] = useState("");
    const [apiMovies, setApiMovies] = useState([]);

    function handelFromChange(e) {
        setFromDate(e.target.value);
    }
    const handelToChange = (e) => {
        setToDate(e.target.value);
    }
    const getMovies = async (serachValue) => {
        let url = 'https://movies-api14.p.rapidapi.com/movies';

        if (serachValue !== "") {
            url = `https://movies-api14.p.rapidapi.com/search?query=${serachValue}}`
        }
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c8f6466e7bmshf81bd08aa0aff62p14422ajsn342661f98cd7',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (serachValue !== "") {
                console.log(result);
                setApiMovies(result.contents);
            } else {
                console.log("Sudheer")
                console.log(result)
                setApiMovies(result.movies);
            }
        } catch (error) {
            console.error(error);
        }
    }
    let ValuFrom = new Date(fromDate)
    let valueTo = new Date(toDate)
    const handelOnSubmit = () => {
        console.log(`I got clicked `)
        const result = apiMovies.filter(x => {
            let value = new Date(x.release_date);
            return value >= ValuFrom && value <= valueTo
        })
        setApiMovies(result);
    }
    useEffect(() => {
        getMovies(serachValue);
    }, [serachValue])

    return (
        <div className="MainDiv">
            <div className="inputValues">
                <div className="datesForm">
                    <p>From</p>
                    <input type="date" className="inputDate" onChange={handelFromChange} value={fromDate}  ></input>
                    <p>To</p>
                    <input type="date" className="inputDate" onChange={handelToChange} value={toDate} />
                    <button className="buttonSubmit" onClick={handelOnSubmit}>Submit</button>
                </div>
                <div className="searchValue">
                    <div>
                        <input
                            className='form-control'
                            value={serachValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            placeholder='Search By Movie Name.....'
                        ></input>
                    </div>
                </div>
            </div>
            <MoviesList moviesData={apiMovies} />
        </div>
    )
}
export default RangeOfdates;