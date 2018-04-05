import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongList from '../queries/fetchSongList';
import addSong from '../mutations/addSong';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchSongList }],
      })
      .then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Song title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(SongCreate);
