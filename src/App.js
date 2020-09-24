import React from 'react';
import Experience from './components/Experience'
import Education from './components/Education'
import Info from './components/Info'
import Skill from './components/Skill'
import Repository from './components/Repository'
import data from './data/cv.json';

function App() {

  return (
    <main>
      <div class="body-wrapper">
        <div class="light-wrapper">
          <div class="container inner">
            <Info data={data.info} settings={data.settings} />
            <br />
            <div class="timeline">
              <Experience data={data.experiences} />
              <Education data={data.educations} />
              <Skill data={data.skills} />
              <Repository data={data.info.github} />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
