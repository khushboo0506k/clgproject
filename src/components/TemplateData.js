import React, { Component } from "react";
import Nav from "./Nav";
import Resume from "./Resume";
class TemplateData extends Component {

  constructor(props) {
    super(props);
    let employment = {
      jobTitles: {},
      emp: {},
      jobDesc: {},
      jobStartDate: {},
      jobEndDate: {},
    };
    let education = {
      qual: {},
      edu: {},
      eduDesc: {},
      eduStartDate: {},
      eduEndDate: {},
    };
    let project = {
      projectTitles: {},
      projectDesc: {},
      projectStartDate: {},
      projectEndDate: {},
    };

    this.state = {
      data: {},
      type: "two-column",
      headerColor: "#fff",
      headerTextColor: "black",
      empTemplate: [],
      eduTemplate: [],
      projectTemplate: [],
      empCount: 0,
      eduCount: 0,
      projectCount: 0,
      employment: employment,
      education: education,
      project: project,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmpClick = this.handleEmpClick.bind(this);
    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.handleEduClick = this.handleEduClick.bind(this);
  }

  handleEmpClick(e) {
    e.preventDefault();
    let i = this.state.empCount;
    ++i;

    const template = (
      <div className="w-4/5 p-2 m-2" key={`empKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobStartDate${i}`}
            name={`jobStartDate${i}`}
            onChange={this.handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobEndDate${i}`}
            name={`jobEndDate${i}`}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`jobTitle${i}`}
          name={`jobTitle${i}`}
          placeholder="Job Title"
          onChange={this.handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`emp${i}`}
          name={`emp${i}`}
          placeholder="Employer"
          onChange={this.handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`jobDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={this.handleChange}
        />
      </div>
    );

    const empArray = this.state.empTemplate;
    empArray.push(template);
    this.setState({ empTemplate: empArray, empCount: i });
  }

  handleProjectClick(e) {
    e.preventDefault();
    let i = this.state.projectCount;
    ++i;
    const template = (
      <div className="w-4/5 p-2 m-2" key={`projKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectStartDate${i}`}
            name={`projectStartDate${i}`}
            onChange={this.handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectEndDate${i}`}
            name={`projectEndDate${i}`}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`projectTitle${i}`}
          name={`projectTitle${i}`}
          placeholder="Project Title"
          onChange={this.handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`projectDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={this.handleChange}
        />
      </div>
    );

    const projectArray = this.state.projectTemplate;
    projectArray.push(template);
    this.setState({ projectTemplate: projectArray, projectCount: i });
  }

  handleEduClick(e) {
    e.preventDefault();
    let i = this.state.eduCount;
    ++i;
    const template = (
      <div className="w-4/5 p-2 m-2" key={`eduKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduStartDate${i}`}
            name={`eduStartDate${i}`}
            onChange={this.handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduEndDate${i}`}
            name={`eduEndDate${i}`}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`qual${i}`}
          name={`qual${i}`}
          placeholder="Qualification"
          onChange={this.handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`educ${i}`}
          name={`educ${i}`}
          placeholder="School/College"
          onChange={this.handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`eduDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={this.handleChange}
        />
      </div>
    );
    const eduArray = this.state.eduTemplate;
    eduArray.push(template);
    this.setState({ eduTemplate: eduArray, eduCount: i });
  }

  handleChange(e) {
    const userData = this.state.data;
    const empData = this.state.employment;
    const eduData = this.state.education;
    const projectData = this.state.project;

    if (e.target.name === "templates") {
      this.setState({ type: e.target.value });
      e.target.value === "minimalist"
        ? this.setState({ headerColor: "#F3F4F6", headerTextColor: "#1F2937" })
        : this.setState({ headerColor: "#7F1D1D", headerTextColor: "#ffffff" });
    } else if (e.target.name === "headerColor") {
      this.setState({ headerColor: e.target.value });
    } else if (e.target.name === "headerTextColor") {
      this.setState({ headerTextColor: e.target.value });
    } else if (e.target.name.includes("jobTitle")) {
      empData["jobTitles"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("emp")) {
      empData["emp"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobDesc")) {
      empData["jobDesc"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobStartDate")) {
      empData["jobStartDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobEndDate")) {
      empData["jobEndDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("qual")) {
      eduData["qual"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("educ")) {
      eduData["edu"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduDesc")) {
      eduData["eduDesc"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduStartDate")) {
      eduData["eduStartDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduEndDate")) {
      eduData["eduEndDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectTitle")) {
      projectData["projectTitles"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectDesc")) {
      projectData["projectDesc"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectStartDate")) {
      projectData["projectStartDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectEndDate")) {
      projectData["projectEndDate"][`${e.target.name}`] = e.target.value;
    } else {
      if (e.target.name === "name") {
        const result = e.target.value.match(/^[a-zA-Z ]+$/);
        userData[`${e.target.name}`] = result ? result[0] : "";
      }
      //enter only alphabates in clgname and qual
      else if (e.target.name === "clgname" || e.target.name === "qual") {
        const result = e.target.value.match(/^[a-zA-Z ]+$/);
        userData[`${e.target.name}`] = result ? result[0] : "";
      } 
      //enter only numbers in contact
      // else if (e.target.name === "contact") {
      //   const result = e.target.value.match(/^[0-9]+$/);
      //   userData[`${e.target.name}`] = result ? result[0] : "";
      // }   
      //enter only alphabates in clgcity
      else if (e.target.name === "clgcity") {
        const result = e.target.value.match(/^[a-zA-Z ]+$/);
        userData[`${e.target.name}`] = result ? result[0] : "";
      }
      //enter only alphabates in fathername
      else if (e.target.name === "fathername") {
        const result = e.target.value.match(/^[a-zA-Z ]+$/);
        userData[`${e.target.name}`] = result ? result[0] : "";
      }
      else {
        userData[`${e.target.name}`] = e.target.value;
      }

    }
    this.setState({
      data: userData,
      employment: empData,
      education: eduData,
      project: projectData,
    });
  }

  render() {
    return (
      <div className="w-screen h-full bg-gray-light text-gray-dark font-sans">
        <Nav showDownloadBtn={true} />
        <div className="flex p-3 print:p-0">
          <form className="w-2/5 flex flex-col justify-evenly print:hidden">
            <div className="w-4/5">
              <label className="m-2 text-xl block" htmlFor="header">
                Header-Text Color
              </label>
              <input
                className="mx-2 border-2 border-white rounded"
                type="color"
                id="headerTextColor"
                name="headerTextColor"
                onChange={this.handleChange}
                value={this.state.headerTextColor}
              />
            </div>
            <h3 className="w-4/5 m-2 text-xl">Personal Details</h3>
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="clgname"
              name="clgname"
              value={this.state.data.clgname}
              onChange={this.handleChange}
              placeholder="College Name"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="clgaddress"
              name="clgaddress"
              value={this.state.data.clgaddress}
              onChange={this.handleChange}
              placeholder="college address"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="clgcity"
              name="clgcity"
              value={this.state.data.clgcity}
              onChange={this.handleChange}
              placeholder="college city"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="name"
              name="name"
              value={this.state.data.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="fathername"
              name="fathername"
              value={this.state.data.fathername}
              onChange={this.handleChange}
              placeholder="Father's Name"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="number"
              id="clgid"
              name="clgid"
              value={this.state.data.clgid}
              onInput={(e) => e.target.value = e.target.value.slice(0, 8)}
              onChange={this.handleChange}
              placeholder="College Id"
            />
                <select
              className="w-4/5 p-2 m-2 rounded"
              value={this.state.data.program}
              onChange={this.handleChange}
              id="program"
              name="program"
            >
              <option value="">Select Your Program</option>
              <option value="Bachelor of Technology">Bachelor of Technology</option>
              <option value="Bachelor of Arts	">Bachelor of Arts</option>
              <option value="Bachelor of Commerce">Bachelor of Commerce</option>
              <option value="Bachelor of Science">Bachelor of Science</option>
              <option value="Bachelor of Computer Application">Bachelor of Computer Application</option>
              <option value="Bachelor of Business Administration">Bachelor of Business Administration</option>
              <option value="Bachelor of Architecture">Bachelor of Architecture</option>
              <option value="Bachelor of Fine Arts">Bachelor of Fine Arts</option>
              <option value="Bachelor of Law">Bachelor of Law</option>
              <option value="Master of Technology">Master of Technology</option>
              <option value="Ph. D">Ph. D</option>
              <option value="M. Tech">M. Tech</option>
              <option value="M. Sc">M. Sc</option>
            </select>

            <select
              className="w-4/5 p-2 m-2 rounded"
              value={this.state.data.branch}
              onChange={this.handleChange}
              id="branch"
              name="branch"
            >
              <option value="">Select Your Branch</option>
              <option value="Advertising">Advertising</option>
              <option value="Aerospace Engineering">Aerospace Engineering</option>
              <option value="Agricultural Engineering">Agricultural Engineering</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Agriculture and Food Science">Agriculture and Food Science</option>
              <option value="Agriculture and Forestry">Agriculture and Forestry</option>
              <option value="Agriculture and Horticulture">Agriculture and Horticulture</option>
              <option value="Agriculture and Natural Resources">Agriculture and Natural Resources</option>
              <option value="Agriculture and Plantation Management">Agriculture and Plantation Management</option>
              <option value="Agriculture and Rural Development">Agriculture and Rural Development</option>
              <option value="Agriculture and Rural Management">Agriculture and Rural Management</option>
              <option value="Agriculture and Veterinary Science">Agriculture and Veterinary Science</option>
              <option value="Agriculture and Water Management">Agriculture and Water Management</option>
              <option value="Agriculture and Wildlife Management">Agriculture and Wildlife Management</option>
              <option value="Agriculture and Wood Science">Agriculture and Wood Science</option>
              <option value="Agriculture and Wood Technology">Agriculture and Wood Technology</option>
              <option value="Agriculture and Woodworking">Agriculture and Woodworking</option>
              <option value="Civil">Civil</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical">Electrical</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Metallurgy">Metallurgy</option>
              <option value="Mining">Mining</option>
              <option value="Petroleum">Petroleum</option>
              <option value="Production">Production</option>
              <option value="Textile">Textile</option>
            </select>
            <select
              className="w-4/5 p-2 m-2 rounded"
              value={this.state.data.nationality}
              onChange={this.handleChange}
              id="nationality"
              name="nationality"
            >
              <option value="">Select Your Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Indian">Indian</option>
              



            </select>
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="date"
              id="dob"
              name="dob"
              value={this.state.data.dob}
              onChange={this.handleChange}
              placeholder="Date of Birth"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="number"
              id="contact"
              name="contact"
              onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
              value={this.state.data.contact}
              onChange={this.handleChange}
              placeholder="Contact No."
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              name="email"
              value={this.state.data.email}
              onChange={this.handleChange}
              placeholder="E-mail ID"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="skype"
              name="skype"
              value={this.state.data.skype}
              onChange={this.handleChange}
              placeholder="Skype ID"
            />
           
            <select
              className="w-4/5 p-2 m-2 rounded"
              value={this.state.data.address}
              onChange={this.handleChange}
              id="address"
              name="address"
            >
              <option value="">Select Your City</option>
              // list of indian city
              <option value="Alwar">Alwar</option>
              <option value="Banswara">Banswara</option>
              <option value="Baran">Baran</option>
              <option value="Barmer">Barmer</option>
              <option value="Bharatpur">Bharatpur</option>
              <option value="Bhilwara">Bhilwara</option>
              <option value="Bikaner">Bikaner</option>
              <option value="Bundi">Bundi</option>
              <option value="Chittorgarh">Chittorgarh</option>
              <option value="Churu">Churu</option>
              <option value="Dausa">Dausa</option>
              <option value="Dholpur">Dholpur</option>
              <option value="Dungarpur">Dungarpur</option>
              <option value="Hanumangarh">Hanumangarh</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Jaisalmer">Jaisalmer</option>
              <option value="Jalore">Jalore</option>
              <option value="Jhalawar">Jhalawar</option>
              <option value="Jhunjhunu">Jhunjhunu</option>
              <option value="Jodhpur">Jodhpur</option>
              <option value="Karauli">Karauli</option>
              <option value="Kota">Kota</option>
              <option value="Nagaur">Nagaur</option>
              <option value="Pali">Pali</option>
              <option value="Pratapgarh">Pratapgarh</option>
              <option value="Rajsamand">Rajsamand</option>
              <option value="Sawai Madhopur">Sawai Madhopur</option>
              <option value="Sikar">Sikar</option>
              <option value="Sirohi">Sirohi</option>
              <option value="Tonk">Tonk</option>
              <option value="Udaipur">Udaipur</option>

            </select>
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="linkedin"
              name="linkedin"
              value={this.state.data.linkedin}
              onChange={this.handleChange}
              placeholder="LinkedIn"
            />
            <h3 className="w-4/5 m-2 text-xl">Professional Details</h3>
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="language"
              name="language"
              value={this.state.data.language}
              onChange={this.handleChange}
              placeholder="Language Known"
            />
            <textarea
              className="w-4/5 p-2 m-2 rounded"
              name="summary"
              placeholder="Objective"
              rows="5"
              cols="15"
              value={this.state.data.summary}
              onChange={this.handleChange}
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="skills"
              name="skills"
              value={this.state.data.skills}
              onChange={this.handleChange}
              placeholder="Skills"
            />
            <input
              className="w-4/5 p-2 m-2 rounded"
              type="text"
              id="hobby"
              name="hobby"
              value={this.state.data.hobby}
              onChange={this.handleChange}
              placeholder="Hobbies"
            />
            <button
              className="w-4/5 rounded bg-blue text-white m-2 p-2 text-center"
              onClick={this.handleEmpClick}
            >
              Add Employment
            </button>
            {this.state.empTemplate.map((el) => el)}
            <button
              className="w-4/5 rounded bg-blue text-white m-2 p-2 text-center"
              onClick={this.handleProjectClick}
            >
              Add Project
            </button>
            {this.state.projectTemplate.map((el) => el)}
            <h3 className="w-4/5 m-2 text-xl">Educational Background</h3>
            <button
              className="w-4/5 rounded bg-blue text-white m-2 p-2 text-center"
              onClick={this.handleEduClick}
            >
              Add Education
            </button>
            {this.state.eduTemplate.map((el) => el)}
          </form>
          <Resume
            userData={this.state.data}
            empData={this.state.employment}
            empCount={this.state.empCount}
            eduData={this.state.education}
            eduCount={this.state.eduCount}
            projectData={this.state.project}
            projectCount={this.state.projectCount}
            type={this.state.type}
            headerColor={this.state.headerColor}
            headerTextColor={this.state.headerTextColor}
          />
        </div>
      </div>
    );
  }
}

export default TemplateData;
