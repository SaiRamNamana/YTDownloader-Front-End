import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Spinner from '/home/rguktogole/Downloads/React/yt-downloader/src/Components/Spinner.js'
import { FaDownload } from 'react-icons/fa';

const DownloadForm = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [message, setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.get(`http://localhost:8082/api/download`, {
                params: { videoUrl }
            });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error downloading video. Please try again.');
            console.error(error);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <h1 className="anton-regular">YTDownloader</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter YouTube video URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                />
                <button onClick={handleDownload} className='download-btn'><FaDownload /> </button>
            </div>
            {loading ? <p><Spinner/></p>:<p>{message}</p>}
        </div>
    );
};

export default DownloadForm;