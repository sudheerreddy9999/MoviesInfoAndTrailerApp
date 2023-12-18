import React, { useState} from "react";
import YoutubeVideo1 from './YoutubeVideo';

function MoviesList(props) {

    console.log(props.moviesData);
    const [selectedImage, setSelectedImage] = useState(null);
    const [youtubeTrailerData, setYoutubeTrailerData] = useState(false);
    const [genres, setGernes] = useState([]);
    const uparraow = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXIC4jnkkxqsRXPzu-QFqVhENvO5vLK1m-Q&usqp=CAU";
    function handelClickTrailer() {
        setYoutubeTrailerData(true);
      }
      const  handelChangeFromYoutube = (data)=>{
        setYoutubeTrailerData(data);
      }
      function handelCloseModel(){
        setSelectedImage(null);
      }
    const handelImageClick = (img) => {
        setSelectedImage((prevSelectedImage) => (prevSelectedImage === img ? null : img));
        setGernes(img.genres)
    };
    return (
        <div className="mainContainer">

            <div className="modelConatiner">
            {selectedImage !== null && (
                <div className="MymodelOverview">
                    <div className="HeadingDivOfModel">
                        <div className="div1"><h2 className="headingOverView">{selectedImage.original_title}</h2></div>
                        <div className="div2"><button type="button" onClick={handelCloseModel}>Close</button></div>
                    </div>
                    <hr></hr>
                    <div className="overviewOfFilim">
                        <h3>Overview Of A Filim</h3>
                        <div className="overViewContent"><p>{selectedImage.overview}</p></div>
                        
                        <div className='genres'>
                            {genres.map((x, index) => (
                                <p key={index}><ul><li>{x}</li></ul></p>
                            ))}
                            {youtubeTrailerData ? <YoutubeVideo1
                                handelChangeFromYoutube={handelChangeFromYoutube}
                                youtubeURL={selectedImage.youtube_trailer}
                            /> : <></>}
                        </div>
                    </div>

                    <button className="overViewWatchTrailer" onClick={handelClickTrailer}> Watch Trailer</button>
                    {props.moviesData.find((image) => image._id === selectedImage) && (
                        <p>{`Other details: ${props.moviesData.find((image) => image._id === selectedImage).info}`}</p>
                    )}
                </div>
            )}
            </div>
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
                    <img className="movieImage" src={`${x.poster_path}`} alt="MovieImage" tag="Adventure" onClick={() => handelImageClick(x)}></img>
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

        </div>
        
    )
}

export default MoviesList;