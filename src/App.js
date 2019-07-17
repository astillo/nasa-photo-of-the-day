import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/title/title';
import Author from './components/author/author';
import Content from './components/content/content';
import DateC from './components/date/date';
import Image from './components/img/img';
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

  }
  return (
    <div className="App">
      <Title titleContent={title} />
      <Author authContent={author} />
      <DateC dateCont={date} />
      <Image src={img} />
      <Content Content={content} />


    </div>
  );
}

export default App;
