// 1_7_3 Extracting a list item component
/*
  Этот компонент RecipeList содержит два вложенных вызова map. Чтобы упростить его, извлеките из него компонент Recipe, который будет принимать пропсы id, name и ingredients. Где вы разместите внешний key и почему?.
*/

import { recipes } from "./data";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
