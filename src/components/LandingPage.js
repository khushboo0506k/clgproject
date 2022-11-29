import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.emphandleClick = this.emphandleClick.bind(this);

  }

  handleClick(e) {
    let url = "/templates";
    this.props.history.push(url);
  }
  emphandleClick(e) {
    let url = "/employee";
    this.props.history.push(url);
  }
  thirdhandleClick(e) {
    let url = "/thirdtemp";
    this.props.history.push(url);
  }
  render() {
    return (
      <div className="flex flex-col lg:flex-row w-screen h-screen bg-gray-light font-sans">
        <img
          className="h-auto lg:h-full bg-blue p-0 m-0"
          src="https://careeramaze.com/wp-content/uploads/2021/01/Profile-data.gif"
          alt="tech-resume-logo"
        ></img>
        <div className="flex flex-col justify-center h-full text-gray-dark mx-auto p-7 lg:p-10">
          <h1 className="text-9xl lg:text-7xl text-blue">Online Resume Builder</h1>
          <h3 className="text-xl lg:text-3xl">
            Effortlessly make a job-worthy resume
          </h3>
          <div className="flex justify-center">
            <button
              id="get-started"
              className="rounded bg-blue text-white hover:shadow-xl m-6 mt-10 px-6 py-4 text-center"
              onClick={this.handleClick}
            >
             Template 1
            </button>
            <button
            id="get-started"
            className="rounded bg-blue text-white hover:shadow-xl m-6 mt-10 px-6 py-4 text-center"
            onClick={this.emphandleClick}
          >
            Template 2
          </button>
          <div className="rounded bg-blue text-white hover:shadow-xl m-6 mt-10 px-6 py-4 text-center"
          >
            <a href="https://kbhresumethird.netlify.app/">Template 3</a>
            
          </div>
          
          </div>
        </div>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark border-b border-gray-dark tracking-widest">
            <ul>
            <li>DesignedBy: Khushboo Kumari</li>
            <li>Branch: B.Tech CSE Core</li>
            </ul>
            </div>
        </section>
      </div>
    );
  }
}

export default withRouter(LandingPage);
