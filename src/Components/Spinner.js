import React from 'react'
import loading from '/home/rguktogole/Downloads/React/yt-downloader/src/91 (1).gif'
const Spinner = () => {
    return (
      <div >
        <img className="my-3" src={loading} alt="loading..."/>
      </div>
    )
}
export default Spinner