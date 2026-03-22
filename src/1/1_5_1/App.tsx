// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. 
	Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. 
	Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

type ProfileType = {
	src: string,
	name: string,
	width: number,
	height: number,
	profession: string,
	awardsCount: number,
	awardsText: string,
	discovered: string
}

function Profile({
		src, name, 
		width, height, profession, 
		awardsCount, awardsText, discovered}: 
		ProfileType) {
	return ( 
		<>
		<section className="profile">
			<h2>{name}</h2>
			<img 
				className="avatar"
				src={src}
				alt={name}
				width={width}
				height={height}
			/>
			<ul>
				<li>
					<b>Profession: </b> 
					{profession}
				</li>
				<li>
					<b>Awards: {awardsCount} </b> 
					({awardsText})
				</li>
				<li>
					<b>Discovered: </b>
					{discovered}
				</li>
			</ul>
		</section>
	</>	
	);
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
			<Profile
				src={getImageUrl('Maria')}
				name="Maria Skłodowska-Curie"
				width={70}
				height={70}
				profession="physicist and chemist"
				awardsCount={4}
				awardsText="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
				discovered="polonium (chemical element)"
			/>
			<Profile
				name = "Katsuko Saruhashi"
				src={getImageUrl('KatsukoSaruhashi')}
				width={70}
				height={70}
				profession="geochemist"
				awardsCount={2}
				awardsText="(Miyake Prize for geochemistry, Tanaka Prize)"
				discovered="a method for measuring carbon dioxide in seawater"
			/>
    </div>
  );
}
