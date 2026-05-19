// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. 
	Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. 
	Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/

import { useState, useRef } from "react";
import { flushSync } from "react-dom";

type PlaceType = {
  id: number;
  imageUrl: string;
};

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`,
  });
}

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const tmpRef = useRef<(HTMLImageElement | null)[]>([]);

  return (
    <>
      <nav>
        <button
          onClick={() => {
						const nextIndex = index < catList.length - 1 
							? index + 1
							: 0;

						flushSync(() => {
							setIndex(nextIndex)
						});
						tmpRef.current[nextIndex]?.scrollIntoView({
							behavior: "smooth",
              block: "nearest",
              inline: "center",
						});

          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
								ref={(node) => {
									tmpRef.current[i] = node;
								}}
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
