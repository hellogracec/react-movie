import React from "react";
import "./App.css";
import Ratings from "react-ratings-declarative";
import ShowMore from "react-show-more";

const API_KEY = "1c00c1b12b0e6338ebfa2508463a527b";
// const BASE_URL =
//   "http://api.themoviedb.org/3/discover/movie?api_key=" +
//   API_KEY +
//   "&primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-05-22" +
//   "&page=5&with_genres=16";

const GENRES =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  API_KEY +
  "&language=en-US";

let startDate = "";
let endDate = "";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      apiKey: API_KEY,
      movies: [],
      genres: [],
      selectedGenre: "",
      pageNum: 1,
      totalPage: ""
    };
    this.getMovies = this.getMovies.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  // Called when constructor is finished building component.
  componentDidMount() {
    let selectedGenre;
    selectedGenre = this.state.selectedGenre;

    let pageNum;
    pageNum = this.state.pageNum;

    this.setState({ pageNum: pageNum });
    // this.setState({ selectedGenre: selectedGenre });
    this.getMovies(selectedGenre, pageNum);
    this.getGenres();
  }

  handleGenreChange(e) {
    this.setState({ selectedGenre: e.target.value, pageNum: 1 });
    this.getMovies(e.target.value, this.state.pageNum);
  }

  previousPage() {
    if (this.state.pageNum > 1) {
      this.getMovies(this.state.selectedGenre, this.state.pageNum - 1);
      this.setState({ pageNum: this.state.pageNum - 1 });
    }
  }
  nextPage() {
    if (this.state.pageNum < this.state.totalPage) {
      this.getMovies(this.state.selectedGenre, this.state.pageNum + 1);
      this.setState({ pageNum: this.state.pageNum + 1 });
    }
  }

  checkDates() {
    var d = new Date();

    endDate =
      d.getFullYear() + "-" + (Number(d.getMonth()) + 1) + "-" + d.getDate();

    d.setDate(d.getDate() - 60);

    startDate =
      d.getFullYear() + "-" + (Number(d.getMonth()) + 1) + "-" + d.getDate();
  }

  getMovies(selectedGenre, pageNum) {
    this.checkDates();
    const URL =
      "http://api.themoviedb.org/3/discover/movie?api_key=" +
      API_KEY +
      "&primary_release_date.gte=" +
      startDate +
      "&primary_release_date.lte=" +
      endDate +
      "&page=" +
      pageNum +
      "&with_genres=" +
      selectedGenre;

    // Request and wait for data from remote server.
    fetch(URL)
      .then(response => response.json())
      // Data retrieved so parse it.
      .then(data => {
        this.setState({ movies: data.results });
        // console.log(JSON.stringify(data.results));
        // console.log(JSON.stringify(data));
        this.setState({ totalPage: data.total_pages });
        // console.log("Total pages= " + data.total_pages);
      })
      // Data is not retieved.
      .catch(error => {
        alert(error);
      });
  }

  getGenres() {
    // This code gets data from the remote server.
    fetch(GENRES)
      .then(response => response.json())

      // Data is retrieved.
      .then(data => {
        this.setState({ genres: data.genres });
        // console.log(JSON.stringify(data.genres));
      })
      // Data is not retrieved.
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="home-body">
        <p className="date-result">
          Date Range: {startDate} to {endDate}
        </p>
        {/* Genres */}
        <select
          type="text"
          value={this.state.selectedGenre}
          onChange={this.handleGenreChange}
        >
          <option value="" defaultValue="" disabled hidden>
            Choose Genre
          </option>
          {this.state.genres.map((item, index) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
          }
        </select>
        {/* Page Button */}
        <div className="page-number">
          <button onClick={this.previousPage}>&#10094;</button>
          &nbsp;{this.state.pageNum} / {this.state.totalPage}&nbsp;
          <button onClick={this.nextPage}>&#10095;</button>
        </div>
        {/* Movie Info */}
        <div className="container">
          <div className="grid-items">
            {this.state.movies.map((item, index) => (
              <div className="grid-item" key={item.id}>
                <img
                  // ? Why can't I direct to public repo?
                  // src="/public/error.png"
                  src={"http://image.tmdb.org/t/p/w185/" + item.poster_path}
                  alt={"poster of " + item.title}
                  // TODO Show alternative img on error
                  // onError={e => {
                  // alert("img cannot be found");
                  // e.target.onError = null;
                  // e.target.src = "error.png";
                  // }}
                />
                <h2>{item.title}</h2>
                <div className="starts-rating">
                  <span>
                    <Ratings
                      rating={item.vote_average / 2}
                      widgetDimensions="1.2em"
                      widgetSpacings="1px"
                    >
                      <Ratings.Widget
                        widgetRatedColor="#fff967"
                        widgetEmptyColor="#9A9191"
                      />
                      <Ratings.Widget
                        widgetRatedColor="#fff967"
                        widgetEmptyColor="#9A9191"
                      />
                      <Ratings.Widget
                        widgetRatedColor="#fff967"
                        widgetEmptyColor="#9A9191"
                      />
                      <Ratings.Widget
                        widgetRatedColor="#fff967"
                        widgetEmptyColor="#9A9191"
                      />
                      <Ratings.Widget
                        widgetRatedColor="#fff967"
                        widgetEmptyColor="#9A9191"
                      />
                    </Ratings>
                  </span>
                  <span>{item.vote_average}</span>
                </div>
                <div className="container-overview">
                  <div className="overview">
                    <ShowMore
                      lines={7}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-text"
                    >
                      {item.overview}
                    </ShowMore>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
