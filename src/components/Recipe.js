import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;

    const { handleDetails } = this.props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card my-3">
          <div className="card-img-top">
            <img src={image_url} alt={title} className="w-100" />
          </div>
          <div className="card-body">
            <h6>{title}</h6>
            <p className="text-slanted text-warning">
              Provided by: {publisher}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => handleDetails(0, recipe_id)}
            >
              Details
            </button>
            <a
              className="btn btn-success"
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe URL
            </a>
          </div>
        </div>
      </div>
    );
  }
}
