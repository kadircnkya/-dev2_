import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}
function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 62,
      puan: 6,
      id: 1,
    },
    {
      baslik: "React Native",
      url: "www.reactnative.dev",
      yazar: "Enes Bayram",
      yorum_sayisi: 8,
      puan: 5,
      id: 2,
    },
    {
      baslik: "W3Schools",
      url: "w3schools.com",
      yazar: "Kodlab",
      yorum_sayisi: 53,
      puan: 4,
      id: 2,
    },
    {
      baslik: "ChatGPT",
      url: "www.chatgpt.com",
      yazar: "Sam Altman",
      yorum_sayisi: 1453,
      puan: 9,
      id: 7,
    },
  ];

  
  const effectSearch = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) 
      ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });
  
  

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={effectSearch}/>
      </>
  );
}
export default App;