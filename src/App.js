import "./App.scss";
import $ from "jquery";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import React, { Component, Suspense } from "react";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    var resumePath = "res_primaryLanguage.json";
    this.loadResumeFromPath(resumePath);
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <div>
          <Header 
            sharedData={this.state.sharedData.basic_info} 
            sharedBasicInfo={this.state.sharedData.basic_info}
          />
          <About
            resumeBasicInfo={this.state.resumeData.basic_info}
            sharedBasicInfo={this.state.sharedData.basic_info}
          />
          <Projects
            resumeProjects={this.state.resumeData.projects}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Experience
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </Suspense>
    );
  }
}

export default App;
