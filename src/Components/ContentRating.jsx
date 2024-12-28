
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      total: 0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
        this.setState((prevState) => ({
          total: prevState.total + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
        this.setState((prevState) => ({
          total: prevState.total - 1
        }));
      }
    };
  };
  render() {
    return (
     <>
     <div className='content-rating'>
        <h1>Do you like this content?</h1>
        <div className='rating-buttons'>
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button"onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p>Total likes are: {this.state.total}</p>
    </div>
    </>
    );
  }
}

export default ContentRating;
