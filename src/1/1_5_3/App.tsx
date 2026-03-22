// 1_5_3 Passing JSX in a children prop
/*
  Извлеките компонент Card из приведенной ниже разметки и 
	используйте параметр children для передачи ему различных JSX.
*/

type AvatarProps = {
	src:string,
	alt: string,
	size: number
}

function Avatar({src, alt, size}: AvatarProps) {
	return (
		<img
		className="avatar"
		src={src}
		alt={alt}
		width={size}
		height={size}
		/>
	)
}

function Card({ children }) {
  return (
    <>
      <div className="card">
        <div className="card-content">{children}</div>
      </div>
    </>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
				<Avatar
					src="OKS67lhm.jpg"
					alt="Aklilu Lemma"
					size={70}
				/>
      </Card>

      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
