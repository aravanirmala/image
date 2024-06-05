import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRef, useState } from 'react';
const Bot = () => {
  const [name, setName] = useState('flowers')
  const [imgg, setImgg] = useState('https://loremflickr.com/1600/800/dog')
  const url = "https://loremflickr.com/1600/800/"
  const data = useRef()

  function image() {
    console.log(url + data.current.value)
    setName(data.current.value)
    setImgg(url + data.current.value)
  }

  return (
    <div className='bot-container'>
      <div className='left-container'>
        <div className='left-container-content'>
          <h1>JHC BOT</h1>
          <button className='left-btn'>+ New Chat</button>
        </div>

        <div>
          <button className='simple-btn'>cars</button>
        </div>
        <div>
          <button className='simple-btn'>Food</button>
        </div>
        <div>
          <button className='simple-btn'>Flowers</button>
        </div>
        <div>
          <button className='simple-btn'>Bikes</button>
        </div>
        <div>
          <button className='simple-btn'>Buildings</button>
        </div>

      </div>

      <div className='right-container'>
        <div className='right-container-content'>
          <div className="alert alert-warning alert-dismissible fade show bot-alert" role="alert">
            <strong>Don't Search!</strong> any abusing content
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div className='solution'>
            <h1>{name}</h1>
            <img src={imgg}></img>
          </div>
          <div className='chat-container'>
            <input type="text" placeholder='ex:pig ,donkey.....' ref={data}></input>
            <button onClick={image}>Search</button>
          </div>
        </div>
      </div>
    </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Bot />);

