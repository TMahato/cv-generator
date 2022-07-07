import React, { Component }from 'react';
import DisplayCV from './DisplayCV';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tanmay Mahato',
      phone: '1231231234',
      email: 'email@gmail.com',
      github: 'https://github.com/TMahato',
      linkedin: 'https://www.linkedin.com/in/tanmay-mahato-2aaa25201/',
      skillNum: 2,
      projectNum: 2,
      experienceNum: 2,
      educationNum: 3,
    }
  }
  
  updateState = (e, key) => {
    const newState = Object.assign({}, this.state);
    newState[key] = e.target.value;
    this.setState(newState);
  }

  render() {
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
                onChange={(e) => this.updateState(e, 'name')}
              />
            </label>

            <label>
              Phone Number
              <input 
                type={'tel'}
                maxLength={10}
                onChange={(e) => this.updateState(e, 'phone')} 
              />
            </label>

            <label>
              Email
              <input
                type={'email'}
                onChange={(e) => this.updateState(e, 'email')}
              />
            </label>

            <label>
              GitHub Link (Must have https://)
              <input
                type={'url'}
                onChange={(e) => this.updateState(e, 'github')}
              />
            </label>

            <label>
              LinkedIn Link (Must have https://)
              <input
                type={'url'}
                onChange={(e) => this.updateState(e, 'linkedin')}
              />
            </label>
          </div>


          {/* Skills */}
          <div className='section-border'>
            <div className='section-title'>Skills</div>
            <label>
              no. of skills
              <select 
                onChange={(e) => this.updateState(e, 'skillNum')} 
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
                onChange={(e) => this.updateState(e, 'projectNum')} 
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
                onChange={(e) => this.updateState(e, 'experienceNum')} 
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
                onChange={(e) => this.updateState(e, 'educationNum')} 
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
        <DisplayCV 
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          github={this.state.github}
          linkedin={this.state.linkedin}
          projectNum={this.state.projectNum}
          skillNum={this.state.skillNum}
          experienceNum={this.state.experienceNum}
          educationNum={this.state.educationNum}
        />
      </div>
    );
  }
}

export default App;
