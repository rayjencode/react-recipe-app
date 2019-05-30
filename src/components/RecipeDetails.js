import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=3aa5c78d608a4c8fb12fb47f7adc91b3&rId=${
  //       this.props.id
  //     }`
  //   };
  // }

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();

  //     this.setState({ recipe: jsonData.recipe });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  state = {
    recipe: recipe
  };

  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=688e7de4b684086c11650f5a9931bf2d&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();

      this.setState(
        (state, props) => {
          return { recipe: jsonData.recipe };
        },
        () => {}
      );
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;
    const { handleIndex } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3">
            <button
              className="btn btn-warning mb-5 text-capitalize"
              onClick={() => handleIndex(1)}
            >
              back to recipe list
            </button>
            <img src={image_url} alt={title} className="d-block w-100" />
          </div>
          <div className="col-10 col-md-6 mx-auto my-3">
            <h5 className="text-uppercase">{title}</h5>
            <h6 className="text-slanted text-warning text-capitalize">
              provided by: {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-3 text-capitalize"
            >
              recipe url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
