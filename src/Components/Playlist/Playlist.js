import React from 'react'
import './playlist.css';

function Playlist() {
  return (
    <div className='main'>
      <div className='playlist'>
        Playlists
      </div>

      <div className='playlists-heading'>
        Level up by watching playlists from the best in the industry
      </div>


      <div className='videos'>
        <div className='videos1'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="videotext">
          <p id="title"> Basics of Stock Market for Begineers </p>
          <p id="title1">CA Rachana Ranade </p>
          </div>
        </div>


        <div className='videos2'>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLLbfvOX935JHqy97J6wCETwqDExwabjLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="videotext">
          <p id="title">How to Invest in your 20's!</p>
          <p id="title1">Ankur Warikoo</p>
          </div>
        </div>



      </div>





    </div>
  )
}

export default Playlist
