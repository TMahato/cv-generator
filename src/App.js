import React, { useState } from 'react';
import DisplayCV from './DisplayCV';
import './styles/app.css';

function App() {
  const [name, setName] = useState('Tanmay Mahato');
  const [phone, setPhone] = useState('1231231234');
  const [email, setEmail] = useState('email@gmail.com');
  const [github, setGithub] = useState('https://github.com/TMahato');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/tanmay-mahato-2aaa25201/');
  const [skillNum, setSkillNum] = useState(2);
  const [projectNum, setProjectNum] = useState(2);
  const [experienceNum, setExperienceNum] = useState(2);
  const [educationNum, setEducationNum] = useState(3);

  const handleName = (e) => setName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleGithub = (e) => setGithub(e.target.value);
  const handleLinkedin = (e) => setLinkedin(e.target.value);
  const handleSkillNum = (e) => setSkillNum(e.target.value);
  const handleProjectNum = (e) => setProjectNum(e.target.value);
  const handleExperienceNum = (e) => setExperienceNum(e.target.value);
  const handleEducationNum = (e) => setEducationNum(e.target.value);

  return (
    <div className='app'>
      <form>
        <div>
          {/* Instructions */}
          <div className='section-border'>
            <div className='section-title'>Instructions</div>
            <ol>
              <li>Enter information in the form below</li>
              <li>Click on each section in the resume to edit details</li>
              <li>Click Print/Save to PDF</li>
            </ol>
          </div>
        </div>

        {/* Contact Information */}
        <div className='section-border'>
          <div className='section-title'>Contact Information</div>
          <label>
            Name
            <input 
              type={'name'} 
              onChange={handleName}
            />
          </label>

          <label>
            Phone Number
            <input 
              type={'tel'}
              maxLength={10}
              onChange={handlePhone} 
            />
          </label>

          <label>
            Email
            <input
              type={'email'}
              onChange={handleEmail}
            />
          </label>

          <label>
            GitHub Link (Must have https://)
            <input
              type={'url'}
              onChange={handleGithub}
            />
          </label>

          <label>
            LinkedIn Link (Must have https://)
            <input
              type={'url'}
              onChange={handleLinkedin}
            />
          </label>
        </div>

        {/* Skills */}
        <div className='section-border'>
          <div className='section-title'>Skills</div>
          <label>
            no. of skills
            <select 
              onChange={handleSkillNum} 
              defaultValue={2}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>
        </div>

        {/* Relevant Projects */}
        <div className='section-border'>
          <div className='section-title'>Relevant Projects</div>
          <label>
            no. of Relevant Projects
            <select 
              onChange={handleProjectNum} 
              defaultValue={2}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>
        </div>

        {/* Relevant Experience */}
        <div className='section-border'>
          <div className='section-title'>Relevant Experience</div>
          <label>
            no. of Relevant Experience
            <select 
              onChange={handleExperienceNum} 
              defaultValue={2}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>
        </div>

        {/* Relevant Education */}
        <div className='section-border'>
          <div className='section-title'>Relevant Education</div>
          <label>
            no. of Relevant Education
            <select 
              onChange={handleEducationNum} 
              defaultValue={3}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>
        </div>

        {/* print CV */}
        <div className='button-cont'>
          <button onClick={(e) => {
            e.preventDefault();
            window.print();
          }}>
            Print/Save to PDF
          </button>
        </div>
      </form>

      {/* display resume on screen */}
      <DisplayCV 
        name={name}
        phone={phone}
        email={email}
        github={github}
        linkedin={linkedin}
        projectNum={projectNum}
        skillNum={skillNum}
        experienceNum={experienceNum}
        educationNum={educationNum}
      />
    </div>
  );
}

export default App;
