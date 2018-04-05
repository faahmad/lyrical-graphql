import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSong from '../mutations/addLyricToSong';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: { songId: this.props.songId, content: this.state.content },
      })
      .then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
