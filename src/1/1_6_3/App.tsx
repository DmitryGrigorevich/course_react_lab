// 1_6_3 Refactor a series of  : to if and variables 
/*
Этот компонент Drink использует серию  : условий для отображения различной информации 
в зависимости от того, является ли name пропс "чай" или "кофе". 
Проблема в том, что информация о каждом напитке распределена по нескольким условиям. 
Переработайте этот код, чтобы использовать один оператор if вместо трех  : условий.
*/


type DrinkData = {
	typeData: string,
	size: string,
	year: string
}

function Drink({ name }: { name: string }) {

	let dataInput: DrinkData;

	if (name === 'tea') {
		dataInput = {
			typeData: 'leaf',
			size: '15–70 mg/cup', 
			year: '4,000+ years'
		}
	}
	else {
		dataInput = {
			typeData: 'bean',
			size: '80–185 mg/cup', 
			year: '1,000+ years'
		}
	}

  return (
      <section>
          <h1>{name}</h1>
          <dl>
              <dt>Part of plant</dt>
              <dd>{dataInput.typeData}</dd>
              <dt>Caffeine content</dt>
              <dd>
                  {dataInput.size}
              </dd>
              <dt>Age</dt>
              <dd>
                  {dataInput.year}
              </dd>
          </dl>
      </section>
  );
}

export default function DrinkList() {
  return (
      <div>
          <Drink name="tea" />
          <Drink name="coffee" />
      </div>
  );
}