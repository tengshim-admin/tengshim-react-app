import React, { useState } from "react";

const songs = [
  {
    id: 1,
    title: {
      uy: "Yarghul",
      tr: "Yarghul",
      zh: "亚尔古尔",
      ko: "야르굴"
    },
    artist: "Abdurehim Heyit",
    src: "/audio/yarghul.mp3"
  },
  {
    id: 2,
    title: {
      uy: "Qumluqta Yalghuz",
      tr: "Çölde Yalnız",
      zh: "沙漠孤独",
      ko: "사막의 고독"
    },
    artist: "Sanubar Tursun",
    src: "/audio/qumluq.mp3"
  }
];

const languages = ["uy", "tr", "zh", "ko"];

function App() {
  const [lang, setLang] = useState("uy");
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Tengshim</h1>
        <select
          className="border p-2 rounded"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {languages.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </header>

      <main>
        <h2 className="text-xl font-semibold mb-2">
          {lang === "uy"
            ? "ناخشىلار"
            : lang === "tr"
            ? "Şarkılar"
            : lang === "zh"
            ? "歌曲"
            : "노래"}
        </h2>
        <ul className="space-y-2">
          {songs.map((song) => (
            <li
              key={song.id}
              className="bg-white p-4 rounded shadow hover:bg-gray-50 cursor-pointer"
              onClick={() => setCurrentSong(song)}
            >
              <strong>{song.title[lang]}</strong> — {song.artist}
            </li>
          ))}
        </ul>
      </main>

      {currentSong && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex flex-col items-center">
          <div>
            ▶️ {currentSong.title[lang]} — {currentSong.artist}
          </div>
          <audio controls autoPlay className="w-full mt-2">
            <source src={currentSong.src} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </footer>
      )}
    </div>
  );
}

export default App;
