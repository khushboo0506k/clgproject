import React, { Component } from "react";
class Minimalist extends Component {
  
  state = {
    file: '',
    imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    name:'',
    status:'',
    active: 'edit'
  }

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          margin: "0 auto",
          width: "8.5in",
          height: "12in",
          backgroundColor: "#fff",
          boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
        }}
      >
        {" "}
        <div>
          <div
            style={{
              width: "33%",
              height: "33%",
              float: "left",
              padding: "20px",
              borderRadius: "50%!important",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
          <label htmlFor="photo-upload" className="custom-file-upload fas">
          <div className="img-wrap img-upload" >
            <img height={100} width={100} style={{borderRadius:"50%"}} for="photo-upload" src={this.state.imagePreviewUrl} alt="logo"/>
          </div>
          <input style={this.file ==="" ? {display:"block" } :{display:"none"}} id="photo-upload" type="file" onChange={this.photoUpload}/> 
        </label>
          </div>
          <div
            style={{
              width: "33%",
              float: "left",
              padding: "20px",
              backgroundColor: "#fff", 
              textAlign: "center",
            }}
          >
            <b>{this.props.user.clgname}</b>
            <br />
            <b>{this.props.user.clgaddress}</b>
            <br />
            <b>{this.props.user.clgcity}</b>
            <br />
          </div>
        </div>
        <header
          style={{
            backgroundColor: `${this.props.headerColor}`,
            color: `${this.props.headerTextColor}`,
            marginTop: "5%",
          }}
          className="flex justify-between items-center font-sans w-full h-1/6"
        >
          <div className="flex flex-col px-5">
            <div className="text-lg pt-3">Name: {this.props.user.name}</div>
            <div className="text-lg pt-3">
              College ID: {this.props.user.clgid}
            </div>
            <div className="text-lg pt-3">Branch: {this.props.user.branch}</div>
            <div className="text-lg pt-3">
              Date of Birth: {this.props.user.dob}
            </div>
            <div className="text-lg pt-3">City: {this.props.user.address}</div>
            <div className="text-lg pt-3">
              LinkedIn: {this.props.user.linkedin}
            </div>
          </div>
          <div className="flex flex-col px-5">
            <div className="text-lg pt-3">
              Father Name: {this.props.user.fathername}
            </div>
            <div className="text-lg pt-3">
              Programme: {this.props.user.program}
            </div>
            <div className="text-lg pt-3">
              Nationality: {this.props.user.nationality}
            </div>
            <div className="text-lg pt-3">
              E-Mail ID: {this.props.user.email}
            </div>
            <div className="text-lg pt-3">
              Contact: {this.props.user.contact}
            </div>
            <div className="text-lg pt-3">Skype: {this.props.user.skype}</div>
          </div>
          <div></div>
        </header>
        <br />
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark pt-3 border-b border-gray-dark tracking-widest">
            <b>Objective</b>
          </div>
          {!this.props.user.summary || 0 === this.props.user.summary.length ? (
            ""
          ) : (
            <div className="text-sm pt-3 text-black">
              {this.props.user.summary}
            </div>
          )}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark border-b border-gray-dark tracking-widest">
            <b>EDUCATION</b>
          </div>
          {[...Array(this.props.eduCount)].map((e, i) => (
            <div className="flex flex-col" key={`emp${i}`}>
              <div className="flex justify-between">
                <div className="text-sm pt-3 text-gray-dark">
                  <b>{this.props.education.edu[`educ${i + 1}`]}</b>
                </div>
                <div>
                  <div className="inline-block text-sm pt-3 text-gray-dark">
                    {this.props.education.eduStartDate[`eduStartDate${i + 1}`]}{" "}
                    -
                  </div>
                  <div className="inline-block text-sm pt-3 pl-3 text-gray-dark">
                    {this.props.education.eduEndDate[`eduEndDate${i + 1}`] ===
                    undefined
                      ? "Present"
                      : this.props.education.eduEndDate[`eduEndDate${i + 1}`]}
                  </div>
                </div>
              </div>
              <div className="text-sm pt-3 text-gray-dark">
                {this.props.education.qual[`qual${i + 1}`]}
              </div>
              <div className="text-sm pt-3 text-gray-dark">
                {this.props.education.eduDesc[`eduDesc${i + 1}`]}
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark border-b border-gray-dark tracking-widest">
            <b>SKILLS</b>
          </div>
          <div>
            {this.props.user.skills == null
              ? ""
              : this.props.user.skills.split(",").map((skill) => (
                  <div
                    className="inline-block px-1 mt-3 mx-1 bg-gray-dark text-sm text-white"
                    key={skill}
                  >
                    {skill}
                  </div>
                ))}
          </div>
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark border-b border-gray-dark tracking-widest">
            <b>PROFESSIONAL EXPERIENCE</b>
          </div>
          {[...Array(this.props.empCount)].map((e, i) => (
            <div className="flex flex-col" key={`emp${i}`}>
              <div className="flex justify-between">
                <div className="text-sm pt-3 text-gray-dark">
                  <li>{this.props.employment.jobTitles[`jobTitle${i + 1}`]}</li>
                </div>
                <div>
                  <div className="inline-block text-sm pt-3 text-gray-dark">
                    {this.props.employment.jobStartDate[`jobStartDate${i + 1}`]}{" "}
                    -
                  </div>
                  <div className="inline-block text-sm pt-3 pl-3 text-gray-dark">
                    {this.props.employment.jobEndDate[`jobEndDate${i + 1}`] ===
                    undefined
                      ? "Present"
                      : this.props.employment.jobEndDate[`jobEndDate${i + 1}`]}
                  </div>
                </div>
              </div>
              <div className="text-sm pt-3 text-gray-dark">
                {this.props.employment.emp[`emp${i + 1}`]}
              </div>
              <div className="text-sm pt-3 text-gray-dark">
                {this.props.employment.jobDesc[`jobDesc${i + 1}`]}
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark border-b border-gray-dark tracking-widest">
            <b>PROJECTS</b>
          </div>
          {[...Array(this.props.projectCount)].map((e, i) => (
            <div className="flex flex-col" key={`emp${i}`}>
              <div className="flex justify-between">
                <div className="text-sm pt-3 text-gray-dark">
                  <li>
                    {this.props.project.projectTitles[`projectTitle${i + 1}`]}
                  </li>
                </div>
                <div>
                  <div className="inline-block text-sm pt-3 text-gray-dark">
                    {
                      this.props.project.projectStartDate[
                        `projectStartDate${i + 1}`
                      ]
                    }{" "}
                    -
                  </div>
                  <div className="inline-block text-sm pt-3 pl-3 text-gray-dark">
                    {this.props.project.projectEndDate[
                      `projectEndDate${i + 1}`
                    ] === undefined
                      ? "Present"
                      : this.props.project.projectEndDate[
                          `projectEndDate${i + 1}`
                        ]}
                  </div>
                </div>
              </div>
              <div className="text-sm pt-3 text-gray-dark">
                {this.props.project.projectDesc[`projectDesc${i + 1}`]}
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark border-b border-gray-dark tracking-widest">
            <b>Hobbies</b>
          </div>
          <div>
            {this.props.user.hobby == null
              ? ""
              : this.props.user.hobby.split(",").map((hobby) => (
                  <div
                    className="inline-block px-1 mt-3 mx-1 bg-gray-dark text-sm text-white"
                    key={hobby}
                  >
                    {hobby}
                  </div>
                ))}
          </div>
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark pt-3 border-b border-gray-dark tracking-widest">
            <b>Language Known</b>
          </div>

          <div className="text-sm pt-3 text-black">
            {this.props.user.language}
          </div>
        </section>
        <section className="flex flex-col font-sans text-white w-full mb-5 px-5">
          <div className="text-md text-gray-dark pt-3 border-b border-gray-dark tracking-widest">
            <br /> <br /> <br />
            <p>
              I hereby declare that all the above given information is true to
              best of my knowledge. I am responsible for any discrepancy found.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Minimalist;
