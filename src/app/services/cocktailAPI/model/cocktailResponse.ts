/**
 * The Cocktail DataBase
 * An open API to handle cocktail recepies. Drink thumbnails and images Add /preview to the end of the cocktail image URL. (100x100) Ingredients www.thecocktaildb.com/images/ingredients/gin-Small.png (100x100) www.thecocktaildb.com/images/ingredients/gin-Medium.png (350x350) www.thecocktaildb.com/images/ingredients/gin.png (700x700)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Cocktail } from './cocktail';
import { Ingredient } from './ingredient';

export interface CocktailResponse { 
    drinks?: Array<Cocktail>;
    ingredients?: Array<Ingredient>;
}