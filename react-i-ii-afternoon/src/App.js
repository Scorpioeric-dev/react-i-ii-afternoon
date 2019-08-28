import React, { Component } from "react";
import "./App.css";
import ButtonPrev from "./Components/ButtonPrev";
import ButtonNext from "./Components/ButtonNext";
import data from "./Components/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: {},
      city: "",
      country: "",
      employer: "",
      title: "",
      favoriteMovies: [""],
      index: 0
    };
  }
  //This Fn setState to previous state passed as props to corresponding Component via props
  previous = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.state.index - 24
      });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };
  //This Fn setsState to nextState passed as props to corresponding Component via props
  next = () => {
    this.setState({
      index: this.state.index + 1
    });
  };

  //This dataFn is mapping over array of data and rendering
  render() {
    // console.log(data);
    // console.log(this.state.index)

    let dataFn = data.map(ele => {
      // console.log(ele.name)
      return (
        <div className="body">
        <div key={ele.id} className="user-info">
          <h3>
            {`FirstName: ${ele.name.first}`}
            </h3>
            <h3>
            {`LastName: ${ele.name.last}`}
          </h3>
          <h3>{`From: ${ele.city},${ele.country}`}</h3>
          <h3>{`Employer: ${ele.employer}`}</h3>
          <h3>{`Job Title: ${ele.title}`}</h3>
          <h3>{`Favorite Movies: ${ele.favoriteMovies}`}</h3>
          <ol className="movies">
            <li>{ele.favoriteMovies[0]}</li>
            <li>{ele.favoriteMovies[1]}</li>
            <li>{ele.favoriteMovies[2]}</li>
          </ol>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="head">Home</header>
        
        <ButtonPrev className="prev" previous={this.previous} />
        <ButtonNext className="next" next={this.next} />
        <div>{dataFn[this.state.index]}</div>
      </div>
    );
  }
}

export default App;
