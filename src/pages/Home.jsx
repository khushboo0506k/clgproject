import React, { useState} from "react";
import PersonalDetails from "../component/PersonalDetails";
import Education from "../component/Education";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import Interest from "../component/Interest";
import Resume from "../component/Resume";

function Home() {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);
  let forms = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <Education
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <Skills data={data} step={step} setData={setData} setStep={setStep} />
        );
      case 4:
        return (
          <Experience
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 5:
        return (
          <Interest
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 6:
        return <Resume data={data} step={step} setStep={setStep} />;
      default:

    }
  };
  return (
    <div className="container home">
      <h2 style={{ marginBottom: "1rem" }}>Resume Generator for Employee</h2>
      {forms()}
    </div>
  );
}

export default Home;
