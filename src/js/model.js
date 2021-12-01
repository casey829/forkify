export const state = {
    recipe: {}
};

export const loadRecipe = async (id) => {
    try {

        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();
        console.log(res, data)

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        const { recipe } = data.data


        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            image: recipe.image_url,
            cookingTime: recipe.cooking_time,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            ingredients: recipe.ingredients
            

        }

        console.log("state.recipe",state.recipe)



    } catch (error) {
        console.log(error)
    }




};
