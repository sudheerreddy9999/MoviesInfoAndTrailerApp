

import React, { useState, Children } from 'react';
import YoutubeVideo1 from './YoutubeVideo';

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handelImageClick() {
    setIsModalOpen(true);
  }
  function handleClose() {
    console.log("handleClose");
    setIsModalOpen(false);

  }
  const array = Object.values(props)
  const genres = Children.toArray(array[0].genres);

  return (
    <div >
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${array[0]._id}`}>
        More info...
      </button>
      <div className="modal" id={`id${array[0]._id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{array[0].original_title}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div class="modal-body">
              <h4>OverView Of A Film</h4>
              <p>{array[0].overview}</p>
              {isModalOpen ? <YoutubeVideo1 open={isModalOpen}
                handelClose={handleClose}
                handelImageClick={handelImageClick}
                youtubeURL={array[0].youtube_trailer}
              /> : <></>}
              <div>
                <div className='genres'>
                  {genres.map((x, index) => (
                    <p key={index}><ul><li>{x}</li></ul></p>
                  ))}
                </div>
              </div>

              <button className='Trailer' type='button' onClick={handelImageClick}>Watch Trailer</button>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Modal;
