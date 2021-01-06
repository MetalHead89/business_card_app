import React from "react";
import "./skillsScreen.scss";
import SkillBlock from "../skillBlock/skillsBlock";

class SkillsScreen extends React.Component {
  render() {
    return (
      <div className='skillsScreen'>
        <SkillBlock style='fab fa-react'/>
      </div>
    );
  }
}

export default SkillsScreen;
