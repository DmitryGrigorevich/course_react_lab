// 3_6_1  Replace prop drilling with context
/*
  В этом примере переключение флажка изменяет параметр imageSize, 
	передаваемый каждому <PlaceImage>. 
	Состояние флажка хранится в компоненте верхнего уровня App, но каждый <PlaceImage> должен знать об этом.

  В настоящее время App передает imageSize в List, 
	который передает его в каждое Place, которое передает его в PlaceImage. 
	Удалите пропс imageSize, и вместо этого передавайте его из компонента App непосредственно в PlaceImage.
  Вы можете объявить контекст в файле Context.js.
*/

import { useState, useContext } from "react";
import { places, PlaceType } from "./data";
import { getImageUrl } from "./utils";
import { ImageSizeContext } from "./Context";

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }: { place: PlaceType }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

export function PlaceImage({ place }: { place: PlaceType }) {
	const size = useContext(ImageSizeContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={size}
      height={size}
    />
  );
}

export default function App() {
  const [isLarge, setIsLarge] = useState(false);

  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}
