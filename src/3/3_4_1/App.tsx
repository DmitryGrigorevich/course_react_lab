// 3_4_1 Fix disappearing input text
/*
  Этот пример показывает сообщение при нажатии на кнопку. 
	Однако при нажатии кнопки также происходит случайный сброс ввода. 
	Почему так происходит? Исправьте, чтобы нажатие кнопки не сбрасывало вводимый текст.
*/

import { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}

export default function App() {
  const [showHint, setShowHint] = useState(false);

  const handleShow = () => {
    setShowHint(!showHint);
  };

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <button onClick={handleShow}>
        {showHint ? "Hide hint" : "Show hint"}
      </button>
    </div>
  );
}
