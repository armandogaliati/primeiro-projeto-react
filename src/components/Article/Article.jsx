import React from "react";

import "./styles.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={this.props.pic} alt="" />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dolorem odit sit neque reiciendis pariatur velit! Quam assumenda
            doloremque alias.
          </p>
        </div>
      </article>
    );
  }
}
