import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/title/title';
import Author from './components/author/author';
import Content from './components/content/content';
import DateC from './components/date/date';
import Img from './components/img/img';
function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("")

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
      .then(res =>
        setStuff(res))
  }, []);

  function setStuff(obj) {
    setTitle(obj.data.title)
    setAuthor(obj.data.copyright)
    setDate(obj.data.date)
    setImg(obj.data.url)
    setContent(obj.data.explanation)
    console.log(obj)
  }
  return (
    <div className="App">
      {/* <Title titleContent={title} />
      <Author authContent={author} />
      <DateC dateCont={date} />
      <Img src={img} /> */}
      <div className="cont"><Content Content={content} Title={title} Author={author} DateC={date} Img={img} /></div>


    </div>
  );
}

export default App;
