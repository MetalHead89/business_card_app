import React from "react";
import "./skillsScreen.scss";
import SkillBlock from "../skillBlock/skillsBlock";

class SkillsScreen extends React.Component {
  render() {
    return (
      <div className="skillsScreen">
        <div className="skillsScreen__skills">
          <SkillBlock style="fab fa-react" />
          <SkillBlock style="fab fa-js" />
          <SkillBlock style="fab fa-git" />
          <SkillBlock style="fab fa-html5" />
          <SkillBlock style="fab fa-css3-alt" />
          <SkillBlock style="fab fa-sass" />
        </div>
      </div>
    );
  }
}

export default SkillsScreen;
