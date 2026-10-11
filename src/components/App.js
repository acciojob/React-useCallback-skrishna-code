
import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

function UseCallbackComp() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  const addSkill = useCallback(() => {
    const newSkill = skill.trim();

    if (!newSkill) return;

    if (
      skills.some(
        (item) => item.toLowerCase() === newSkill.toLowerCase()
      )
    ) {
      return;
    }

    setSkills((prevSkills) => [...prevSkills, newSkill]);
    setSkill("");
  }, [skill, skills]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((item) => item !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h1 id="heading">Skills List</h1>

      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter a skill"
      />

      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>

      <SkillList
        skills={skills}
        deleteSkill={deleteSkill}
      />
    </div>
  );
}

export default UseCallbackComp;
