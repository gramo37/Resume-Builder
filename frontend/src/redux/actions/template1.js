module.exports = ({
    name,
    subTitle,
    educationalDetail,
    skills,
    workExperience,
    projects,
    extracurriculars,
  }) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Template 1</title>
    </head>
    <style>
      body {
        padding: 40px;
      }
  
      .name {
        text-align: center;
        margin: 0px;
        margin-top: 40px;
        padding: 0%;
        color: #1F3864;
        font-size: 4rem;
      }
  
      .personal-details {
        text-align: center;
        margin: 0px;
        padding: 0%;
        font-weight: 200;
        font-style: italic;
        font-size: 1.7rem;
      }
  
      .heading-1 {
        color: #2e75b5;
        margin: 14px 5px;
        margin-bottom: 2px;
        padding: 0%;
        font-size: 2.5rem;
      }
  
      .sub-heading-1 {
        margin: 5px 3px;
        padding: 0%;
        font-size: 1.6rem;
        font-weight: 700;
      }
  
      .sub-heading-2 {
        margin: 0px 3px;
        padding: 0%;
        font-weight: 400;
        font-size: 1.8rem;
        font-style: italic;
      }
  
      .text {
        font-size: small;
        margin: 0px;
        padding: 0%;
        font-size: 1.4rem;
      }
  
      .name-date-box {
        margin: 15px 0px;
        padding: 0%;
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
      }
  
      .skills-box {
        display: -webkit-flex;
        -webkit-justify-content: flex-start;
        -webkit-align-items: center;
      }
  
      ul {
        padding: 0px;
        padding-left: 19px;
        margin: 0px;
      }
  
      li {
        margin: 10px 0px;
      }
    </style>
  
    <body>
      <h1 class="name">${name}</h1>
      <h4 class="personal-details">
        ${subTitle}
      </h4>
      <h3 class="heading-1">Education</h3>
      <hr style="margin: 0px" />
      <div class="educational-details">
      ${educationalDetail
        .map((item) => {
          return `<div>
          <div class="name-date-box">
            <h5 class="sub-heading-1">
              ${item.collegename}
            </h5>
            <h5 class="sub-heading-1">${item.duration}</h5>
          </div>
          <ul>
            <li>
              <p class="text">
                ${item.degree} | CGPA: <strong>${item.grade}/10</strong>
              </p>
            </li>
          </ul>
        </div>`;
        })
        .join("\n")}
  
      <h3 class="heading-1">Skills</h3>
      <hr style="margin: 0px" />
      <div>
        <div class="skills-box">
          <h5 class="sub-heading-1">Proficient:</h5>
          <p class="text">
            ${skills?.proficient
              ?.map((item) => {
                return `${item}`;
              })
              .join(" | ")}
          </p>
        </div>
        <div class="skills-box">
          <h5 class="sub-heading-1">Familiar:</h5>
          <p class="text">
          ${skills?.familiar
            ?.map((item) => {
              return `${item}`;
            })
            .join(" | ")}
          </p>
        </div>
      </div>
  
      <h3 class="heading-1">Work Experience</h3>
      <hr style="margin: 0px" />
      ${workExperience
        .map((item) => {
          return `<div>
        <div class="name-date-box">
          <div class="skills-box">
            <h5 class="sub-heading-1">${item.CompanyName} |</h5>
            <p class="text">${item.designation}</p>
          </div>
          <h5 class="sub-heading-1">${item.duration}</h5>
        </div>
        <ul>
          ${item.description
            .map((item) => {
              return `
            <li>
            <p class="text">
              ${item}
            </p>
          </li>`;
            })
            .join("\n")}
        </ul>
      </div>`;
        })
        .join("\n")}
      
      <h3 class="heading-1">Projects</h3>
      <hr style="margin: 0px" />
      <div>
      ${projects
        .map((item) => {
          return `
        <div style="margin-top: 15px">
          <div class="name-date-box">
            <h5 class="sub-heading-1">${item.projectName}</h5>
            <h5 class="sub-heading-1">${item.duration}</h5>
          </div>
          <h5 class="sub-heading-2">
            ${item.maintitle}
          </h5>
          <ul style="margin-top: 4px">
          ${item.description
            .map((item) => {
              return `
            <li>
            <p class="text">
              ${item}
            </p>
          </li>`;
            })
            .join("\n")}
          </ul>
        </div>`;
        })
        .join("\n")}
      
      </div>
      <h3 class="heading-1">Academic and Extracurricular Achievements</h3>
      <hr style="margin: 0px" />
      <div>
        <ul style="margin-top: 4px">
        ${extracurriculars
          .map((item) => {
            return `<li>
        <p class="text">
          ${item}
        </p>
      </li>`;
          })
          .join("\n")}
        </ul>
      </div>
    </body>
  </html>
  `;
  };
  