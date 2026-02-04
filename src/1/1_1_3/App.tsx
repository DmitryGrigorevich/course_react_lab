// 1_1_3 Spot the mistake
/* 
  Исправьте ошибку в компоненте Profile.
  Вспомните, как react отличает компоненты от обычных HTML-тегов.
*/

function profile() {
    return (
      <img
        src="AlanHart.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <profile />
        <profile />
        <profile />
      </section>
    );
  }
  