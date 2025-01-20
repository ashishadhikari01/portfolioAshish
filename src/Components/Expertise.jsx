import React from 'react';

export default function Expertise() {
  return (
    <div className="expertise-wrapper">
      {/* Experience section */}
      <div className="experience">
        <h1>Experience</h1>
        <div className="exp0">
          <div className="logo">
            <img
              src="/aksharalayaLanguageFoundation.png"
              alt="Aksharalaya Language Foundation logo"
              width="135px" height="135px"
            />
          </div>
          <div className="content">
            <h3>Aksharalaya Language Foundation</h3>
            <h3 style={{ color: 'red' }}>Social Media Manager</h3>
            <h3>2022-2023 AD</h3>
          </div>
        </div>
      </div>

      {/* Education section */}
      <div className="education">
        <h1>Education</h1>
        <div className="edu1">
          <div className="logo">
            <img
              src="/tribhuvanUniversity.png"
              alt="Tribhuvan University logo"
            />
          </div>
          <div className="content">
            <h3>Tribhuvan University</h3>
            <h3>Saraswati Multiple Campus</h3>
            <h3 style={{ color: 'red' }}>Bachelor's in Computer Application</h3>
            <h3>2022-2026 AD</h3>
          </div>
        </div>

        <div className="edu0">
          <div className="logo">
            <img
              src="/National-Examinations-Board.png"
              alt="National Examination Board logo"
            />
          </div>
          <div className="content">
            <h3>National Examination Board</h3>
            <h3>Canvas International Secondary School</h3>
            <h3 style={{ color: 'red' }}>
              School Leaving Certificate in Physical Science
            </h3>
            <h3>2019-2021 AD</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
