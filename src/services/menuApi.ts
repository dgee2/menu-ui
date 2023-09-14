import { components, paths } from "@/generated/open-api/menu-api"
import { Fetcher } from "@qdrant/openapi-typescript-fetch"

const fetcher = Fetcher.for<paths>()

fetcher.configure({
  baseUrl: "https://localhost:44347"
})

const getRecipesInternal = fetcher.path("/api/recipe").method("get").create();
export const getRecipes = async () => await getRecipesInternal({})
export type Recipe = components["schemas"]["Recipe"];

export type NewRecipe = components["schemas"]["NewRecipe"]

export const putRecipe = fetcher.path("/api/recipe/{recipeId}").method("put").create();

export const postRecipe = fetcher.path("/api/recipe").method("post").create();
