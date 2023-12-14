import React, { useState } from "react";
import Modal from "./ShowModel";

function MoviesList(props) {

    console.log(props.moviesData);
    const [openModel, setOpenModel] = useState(false);
    const uparraow = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXIC4jnkkxqsRXPzu-QFqVhENvO5vLK1m-Q&usqp=CAU";
    function handelModel() {
        setOpenModel(!openModel);
    }
    return (
        <div className="moviesListContainer">

            {props.moviesData.map((x, i) => (
                <div className={`movieContainer ${x.vote_average ? '' : 'smallMovieContainer'}`} key={x._id}>
                    <div className="valueContainer">
                        <p className="itemP">{i + 1}</p>
                        {x.vote_average && (
                            <>
                                <p className="valueContainerBrac">（</p>
                                <img src={uparraow} className="arrowContainer" alt="arrow" />
                                <p>{x.vote_average.toFixed(1)}</p>
                                <p className="valueContainerBrac">）</p>
                            </>
                        )}


                    </div>
                    <img className="movieImage" src={`${x.poster_path}`} alt="MovieImage" tag="Adventure" onClick={handelModel}></img>
                    <Modal data={x} />
                    {x.vote_average ? (
                        <div className="rateConatiner">
                            <img src="https://freepngimg.com/thumb/star/22-star-png-image.png" className="usersrating" alt="FilledStar" />
                            <p className="VoteRate">{x.vote_average}</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3af7504xosd25VtEIq8deAtVNUqHKQPKEw&usqp=CAU" className="usersrating2" alt="unfilledStar" />
                            <p className="rateContainerP">Rate</p>
                        </div>
                    ) : null}

                    <div className="ContainerMovieName">
                        <p>{x.original_title}</p>
                    </div>
                    <div className="timeConatiner">
                        <p>2 hr 35Min</p>
                    </div>

                    <div className="dateContainer"><p>Released On : {x.release_date}</p></div>

                </div>
            ))
            }


        </div>
    )
}

export default MoviesList;