// 4_1_2  Fix a component failing to re-render
/*
  Эта кнопка должна переключаться между отображением "Вкл" и "Выкл". 
	Однако она всегда показывает "Выкл". Что не так с этим кодом? Исправьте это.
*/
import { useState } from 'react';

export default function Toggle() {
  const [isOnOff, setIsOnOff] = useState(false);

  return (
    <button onClick={() => {
      setIsOnOff(!isOnOff);
    }}>
      {isOnOff ? 'Вкл' : 'Выкл'}
    </button>
  );
}