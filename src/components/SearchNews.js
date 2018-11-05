import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { doFetchNews } from "../actions/Article";

 const applyQueryState = query => () => ({
  query,
});

 class SearchNews extends Component {
  constructor(props) {
    super(props);
     this.state = {
      query: "",
    };

     this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange({ target }) {
    this.setState(applyQueryState(target.value));
  }

  onSubmit(event) {
    const { query } = this.state;
     if (query) {
      this.props.onFetchNews(query);
       this.setState(applyQueryState(""));
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.query} onChange={this.onChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

 const mapDispatchToProps = dispatch => ({
  onFetchNews: query => dispatch(doFetchNews(query)),
});

 export default connect(null, mapDispatchToProps)(SearchNews);