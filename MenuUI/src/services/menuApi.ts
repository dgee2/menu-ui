import { components, paths } from "@/generated/open-api/menu-api"
import { Fetcher } from "@qdrant/openapi-typescript-fetch"

const fetcher = Fetcher.for<paths>()

fetcher.configure({
  baseUrl: "https://localhost:44347"
})

const getRecipesInternal = fetcher.path("/api/recipe").method("get").create();
export const getRecipes = async () => await getRecipesInternal({})
export type Recipe = components["schemas"]["Recipe"];
