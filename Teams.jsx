import { useState } from "react";

export default function Teams() {
  const [teamMember, setTeamMember] = useState(11);
  //   const handleGrowTeam = () => {
  //     const newTeamMember = teamMember + 1;
  //     setTeamMember(newTeamMember);
  //   };
  const teamStyle = {
    border: "2px solid gold",
    margin: "15px",
    borderRadius: "7px",
    padding: "15px",
  };

  const btnStyle = {
    margin: "5px",
    padding: "8px",
    backgroundColor: "tomato",
    border: "none",
  };

  return (
    <div style={teamStyle}>
      <h3>teamMember: {teamMember}</h3>
      <button style={btnStyle} onClick={() => setTeamMember(teamMember + 1)}>
        GrowTeamMember
      </button>
      <button style={btnStyle} onClick={() => setTeamMember(teamMember - 1)}>
        DownTeamMember
      </button>
    </div>
  );
}
