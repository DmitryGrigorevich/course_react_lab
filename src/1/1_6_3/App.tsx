// 1_6_3 Refactor a series of ? : to if and variables 
/*
Этот компонент Drink использует серию ? : условий для отображения различной информации в зависимости от того, является ли name пропс "чай" или "кофе". Проблема в том, что информация о каждом напитке распределена по нескольким условиям. Переработайте этот код, чтобы использовать один оператор if вместо трех ? : условий.
*/

function Drink({ name }: { name: string }) {
  return (
      <section>
          <h1>{name}</h1>
          <dl>
              <dt>Part of plant</dt>
              <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
              <dt>Caffeine content</dt>
              <dd>
                  {name === 'tea'
                      ? '15–70 mg/cup'
                      : '80–185 mg/cup'}
              </dd>
              <dt>Age</dt>
              <dd>
                  {name === 'tea'
                      ? '4,000+ years'
                      : '1,000+ years'}
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