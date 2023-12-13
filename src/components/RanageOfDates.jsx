import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList.jsx";
import SearchBox from "./SearchMovie.jsx";

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
    const handelSearchValue = (e) => {
        setSearchValue(e.target.value);
    }
    const getMovies = async (serachValue) => {
        console.log("Helo")
        let url = 'https://movies-api14.p.rapidapi.com/movies';

        if (serachValue !== "") {
            url = `https://movies-api14.p.rapidapi.com/search?query=${serachValue}}`
        }
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '53387c7298msh6b609fe658ad83ep16fa8ajsn6f78dd534059',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };


        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (serachValue !== "") {
                setApiMovies(Object.values(result.contents));
            } else {
                setApiMovies(result.movies);
            }


        } catch (error) {
            console.error(error);
        }
    }

    let ValuFrom = new Date(fromDate)
    let valueTo = new Date(toDate)
    const handelOnSubmit = () => {
        console.log("date Values")
        const result = apiMovies.filter(x => {
            console.log(x.release_date)
            console.log(valueTo);
            console.log(ValuFrom);
            let value = new Date(x.release_date);
            return value >= ValuFrom && value <= valueTo
        })
        setApiMovies(result);
        console.log(apiMovies)

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
                    <SearchBox serachValue={serachValue} setSearchValue={setSearchValue} />
                </div>
            </div>


            <MoviesList moviesData={apiMovies} />
        </div>

    )
}
export default RangeOfdates;