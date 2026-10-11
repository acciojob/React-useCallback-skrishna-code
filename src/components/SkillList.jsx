
import React from "react";

const SkillList = React.memo(function SkillList({
  skills,
  deleteSkill,
}) {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          id={`skill-number-${idx}`}
          key={skill}
          onClick={() => deleteSkill(skill)}
          style={{ cursor: "pointer" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
