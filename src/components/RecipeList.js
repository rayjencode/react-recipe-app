import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      handleChange,
      handleSubmit,
      value,
      error
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          <div className="row">
            <div className="col-10 col-md-6 text-center mx-auto text-capitalize mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          <div className="row">
            {error ? (
              <h2 className="text-danger text-center mx-auto">{error}</h2>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={handleDetails}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
