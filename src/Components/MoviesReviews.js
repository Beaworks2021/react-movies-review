import React, { Component } from 'react'

export default class MoviesReviews extends Component {
    constructor() {
        super();
        this.state = {
          review: [],
          term: "everything",
          isLoading: true
        };
      }
      async getReview() {
        fetch(
          `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.term}&api-key=vcxfMGWpn2o5XtPHCZAVlKuzlSW9FYG0`
        )
          .then((response) => response.json())
          .then((review) => {
            this.setState({ review: review.results, isLoading: false });
          });
      }
    
      componentDidMount() {
        this.getReview();
      }
    
      componentWillUnmount() {
        this.setState({ review: [] });
      }
    
      render() {
        return (
          <div style={{textAlign: "center", borderColor: "gray", borderWidth:"2px"}}> <h1> MOVIES REVIEW </h1>
            {this.state.isLoading ? (
              <p className="isLoading">Loading...</p>
            ):(
              this.state.review.map((item, index) => {
                const { byline, display_title, critics_pick, headline } = item;
                return (
                    
                    
                  <div key={index} style={{backgroundColor: 'lightgray', width: 'auto', height: 'auto', margin: "2px", padding: "2px"}}>
                      <div>
                        <h3>Headling:</h3>
                        {headline}
                      </div>
                      <div>
                        <h3>Title:</h3>
                        {display_title}
                      </div>
                      <div>
                        <h3>Byline:</h3>
                        {byline}
                      </div>
                      <div>
                        <h3>Critic:</h3>
                        {critics_pick}
                      </div>
                  </div>
                  
                );
              })
            )}
          </div>
        );
      }
    }