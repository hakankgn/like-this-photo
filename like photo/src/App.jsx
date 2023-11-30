import { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [img, setImg] = useState([]);
  const [sizeCounter, setSizeCounter] = useState(20);
  const [clickedImg, setClickedImg] = useState("");

  const handleClick = useCallback(() => {
    const id = Math.floor(Math.random() * 600);
    setImg((prevImg) => [
      ...prevImg,
      {
        src: `https://picsum.photos/id/${id}/200/300`,
        id: crypto.randomUUID(),
      },
    ]);
  }, []);

  const handleSizeClick = useCallback(
    (index) => {
      if (clickedImg === index) {
        setSizeCounter((p) => p + 5);
      } else {
        setClickedImg(index);
        setSizeCounter(20);
      }
    },
    [clickedImg],
  );

  return (
    <div className="App">
      <button onClick={handleClick}>Resim Ekle</button>
      <div className="img-list">
        {img.map((src, id) => (
          <div
            onClick={() => handleSizeClick(id)}
            className="img-div"
            key={src.id}
          >
            <img src={src.src} alt="random" />
            <p
              style={{
                fontSize: clickedImg === id ? sizeCounter : 20,
              }}
            >
              👍
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
