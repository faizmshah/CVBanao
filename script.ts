
function togglePersonalInfo(): void {
  // Get the Personal Information section and button elements
  const personalInfoSection = document.getElementById("personalInfoSection") as HTMLElement;
  const personalInfoButton = document.getElementById("personalInfoButton") as HTMLElement;

  // Toggle visibility
  if (personalInfoSection.style.display === "none") {
      personalInfoSection.style.display = "block";
      personalInfoButton.textContent = "Save";
  } else {
      personalInfoSection.style.display = "none";
      personalInfoButton.textContent = "Edit Personal Information";
  }
}

function ProfileBtn(): void {
  // Get the Personal Information section and button elements
  const professionalInfoSection = document.getElementById("professionalInfoSection") as HTMLElement;
  const professionalInfoButton = document.getElementById("professionalInfoButton") as HTMLElement;

  // Toggle visibility
  if (professionalInfoSection.style.display === "none") {
      professionalInfoSection.style.display = "block";
      professionalInfoButton.textContent = "Save Profile";
  } else {
      professionalInfoSection.style.display = "none";
      professionalInfoButton.textContent = "Edit Profile";
  }
}

function EducationBtn(): void {
  // Get the Personal Information section and button elements
  const educatioSection = document.getElementById("educatioSection") as HTMLElement;
  const educationButton = document.getElementById("educationButton") as HTMLElement;

  // Toggle visibility
  if (educatioSection.style.display === "none") {
      educatioSection.style.display = "block";
      educationButton.style.display = "none";
  } else {
      educatioSection.style.display = "none";      
  }
}

function WorkBtn(): void {
  // Get the Personal Information section and button elements
  const workSection = document.getElementById("workSection") as HTMLElement;
  const workButton = document.getElementById("workButton") as HTMLElement;

  // Toggle visibility
  if (workSection.style.display === "none") {
      workSection.style.display = "block";
      workButton.style.display = "none";
  } else {
      workSection.style.display = "none";       
  }
}

function SkillBtn(): void {
  const skillsSection = document.getElementById("skillsSection") as HTMLElement;
  const skillButton = document.getElementById("skillButton") as HTMLElement;

  if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
      skillButton.style.display = "none";
  } else {
      skillsSection.style.display = "none";
  }
}

function ProjectBtn(): void {
  const projectsSection = document.getElementById("projectsSection") as HTMLElement;
  const projectButton = document.getElementById("projectButton") as HTMLElement;

  if (projectsSection.style.display === "none") {
      projectsSection.style.display = "block";
      projectButton.style.display = "none";
  } else {
      projectsSection.style.display = "none";
  }
}

function CertificateBtn(): void {
  const certuficatesSection = document.getElementById("certificatesSection") as HTMLElement;
  const CertificateButton = document.getElementById("CertificateButton") as HTMLElement;

  if (certuficatesSection.style.display === "none") {
    certuficatesSection.style.display = "block";
      CertificateButton.style.display = "none";
  } else {
    certuficatesSection.style.display = "none";
  }
}

function OrganizationBtn(): void {
  const OrganizationSection = document.getElementById("organizationsSection") as HTMLElement;
  const organizationButton = document.getElementById("organizationButton") as HTMLElement;

  if (OrganizationSection.style.display === "none") {
    OrganizationSection.style.display = "block";
    organizationButton.style.display = "none";
  } else {
    OrganizationSection.style.display = "none";
  }
}


function saveWorkBtn(): void {
  const workSection = document.getElementById("workSection") as HTMLElement;
  const saveWorkButton = document.getElementById("saveWorkButton") as HTMLElement;
  const workButton = document.getElementById("workButton") as HTMLElement;

  // Toggle visibility
  if (workButton.style.display === "none") {
      workButton.style.display = "block";
      workSection.style.display = "none";       
      workButton.textContent = "Edit Work";
      saveWorkButton.textContent = "Save";
  } else {
      workButton.style.display = "none";  
      workSection.style.display = "block";      
  }   
}

function saveEducationBtn(): void {
  const educatioSection = document.getElementById("educatioSection") as HTMLElement;
  const saveEducationButton = document.getElementById("saveEducationButton") as HTMLElement;
  const educationButton = document.getElementById("educationButton") as HTMLElement;

  // Toggle visibility
  if (educationButton.style.display === "none") {
      educationButton.style.display = "block";
      educatioSection.style.display = "none";       
      educationButton.textContent = "Edit Education";
      saveEducationButton.textContent = "Save";
  } else {
      educationButton.style.display = "none";  
      educatioSection.style.display = "block";      
  }   
}

function saveSkillBtn(): void {
  const skillsSection = document.getElementById("skillsSection") as HTMLElement;
  const saveSkillButton = document.getElementById("saveSkillButton") as HTMLElement;
  const skillButton = document.getElementById("skillButton") as HTMLElement;

  // Toggle visibility
  if (skillButton.style.display === "none") {
      skillButton.style.display = "block";
      skillsSection.style.display = "none";       
      skillButton.textContent = "Edit Skills";
      saveSkillButton.textContent = "Save";
  } else {
      skillButton.style.display = "none";  
      skillsSection.style.display = "block";      
  }   
}

function saveProjectBtn(): void {
  const projectsSection = document.getElementById("projectsSection") as HTMLElement;
  const saveProjectButton = document.getElementById("saveProjectButton") as HTMLElement;
  const projectButton = document.getElementById("projectButton") as HTMLElement;

  // Toggle visibility
  if (projectButton.style.display === "none") {
    projectButton.style.display = "block";
    projectsSection.style.display = "none";       
      projectButton.textContent = "Edit Projects";
      saveProjectButton.textContent = "Save";
  } else {
      saveProjectButton.style.display = "none";  
      projectsSection.style.display = "block";      
  }   
}

function saveCertificateBtn(): void {
  const certificatesSection = document.getElementById("certificatesSection") as HTMLElement;
  const saveCertificateButton = document.getElementById("saveCertificateButton") as HTMLElement;
  const CertificateButton = document.getElementById("CertificateButton") as HTMLElement;

  // Toggle visibility
  if (CertificateButton.style.display === "none") {
    CertificateButton.style.display = "block";
    certificatesSection.style.display = "none";       
    CertificateButton.textContent = "Edit Certificates";
    saveCertificateButton.textContent = "Save";
  } else {
    saveCertificateButton.style.display = "none";  
    certificatesSection.style.display = "block";      
  }   
}

function saveOrgBtn(): void {
  const organizationsSection = document.getElementById("organizationsSection") as HTMLElement;
  const saveOrgButton = document.getElementById("saveOrgButton") as HTMLElement;
  const organizationButton = document.getElementById("organizationButton") as HTMLElement;

  // Toggle visibility
  if (organizationButton.style.display === "none") {
    organizationButton.style.display = "block";
    organizationsSection.style.display = "none";       
      organizationButton.textContent = "Edit Organizations";
      saveOrgButton.textContent = "Save";
  } else {
    saveOrgButton.style.display = "none";  
      organizationsSection.style.display = "block";      
  }   
}

// Function to add new education fields dynamically
document.getElementById('add-education-button')?.addEventListener('click', () => {
  const educationSection = document.getElementById('education-section');
  const newEducation = document.createElement('div');
  newEducation.className = 'edField';
  newEducation.innerHTML = `<label for="degreeField">Degree</label>
                                    <input type="text" id="degreeField" class="degreeField"
                                        placeholder="Enter Degree / Field Of Study / Exchange" required><br><br>

                                    <label for="schoolField">School/University</label>
                                    <input type="text" id="schoolField" class="schoolField" placeholder="Enter School / University" required><br><br>

                                    <label for="edStartField">Start Date</label>
                                    <input type="date" id="edStartField" class="edStartField" required><br><br>

                                    <label for="edEndField">End Date</label>
                                    <input type="date" id="edEndField" class="edEndField" required><br><br>

                                    <label for="edDescriptionField">Description</label>
                                    <textarea id="edDescriptionField" class="edDescriptionField"
                                        placeholder="Add a description of your education entry..."
                                        required></textarea><br><br>`;
  educationSection?.appendChild(newEducation);
});

// Function to add new work fields dynamically
document.getElementById('add-work-button')?.addEventListener('click', () => {
  const workSection = document.getElementById('work-section');
  const newWork = document.createElement('div');
  newWork.className = 'weField';
  newWork.innerHTML = `<label for="weJobField">Job Title</label>
                                    <input type="text" id="weJobField" class="weJobField" placeholder="Enter Job Title" required><br><br>

                                    <label for="companyField">Company Name</label>
                                    <input type="text" id="companyField" class="companyField" placeholder="Enter Company Name" required><br><br>

                                    <label for="weStartField">Start Date</label>
                                    <input type="date" id="weStartField" class="weStartField" required><br><br>

                                    <label for="weEndField">End Date</label>
                                    <input type="date" id="weEndField" class="weEndField" required><br><br>

                                    <label for="weDescriptionField">Description</label>
                                    <textarea id="weDescriptionField" placeholder="Describe your role & achievements"></textarea><br><br>`;
  workSection?.appendChild(newWork);                                  
});

// Function to add new skill fields dynamically
document.getElementById('add-skills-button')?.addEventListener('click', () => {
  const skillsSection = document.getElementById('skills-section');
  const newSkill = document.createElement('div');
  newSkill.className = 'skField';
  newSkill.innerHTML = `<label for="skillsField">Skill</label>
                                    <input id="skillsField" class="skillsField" placeholder="Enter Skill"
                                        required><br><br>

                                    <label for="subSkillField">Information / Sub-skills</label>
                                    <textarea id="subSkillField" class="subSkillField"
                                        placeholder="Enter Information or Sub-skills" required></textarea><br><br>`;
  skillsSection?.appendChild(newSkill);
});

// Function to add new projects fields dynamically
document.getElementById('add-project-button')?.addEventListener('click', () => {
  const projectsSection = document.getElementById('projects-section');
  const newProject = document.createElement('div');
  newProject.className = 'prField';
  newProject.innerHTML = `<label for="projectsField">Project title</label>
                                    <input id="projectsField" class="projectsField" placeholder="Enter Project title"
                                        required><br><br>

                                    <label for="proDescriptionField">Description</label>
                                    <textarea id="proDescriptionField" class="proDescriptionField"
                                        placeholder="Describe the project and its outcomes..." required></textarea><br><br>`;
  projectsSection?.appendChild(newProject);
});

// Function to add new Certificates fields dynamically
document.getElementById('add-certificate-button')?.addEventListener('click', () => {
  const certificatesSection = document.getElementById('certificates-section');
  const newCertificate = document.createElement('div');
  newCertificate.className = 'crtField';
  newCertificate.innerHTML = `<label for="certificateField">Certificate</label>
                                    <input id="certificateField" class="certificateField" placeholder="Enter Certificate Name"
                                        required><br><br>

                                    <label for="crtDiscField">Additional Information</label>
                                    <textarea id="crtDiscField" class="crtDiscField"
                                        placeholder="eg. Level 1 and 2" required></textarea><br><br>`;
  certificatesSection?.appendChild(newCertificate);
});


// Function to add new Organization fields dynamically
document.getElementById('add-org-button')?.addEventListener('click', () => {
  const OrganizationSection = document.getElementById('organizations-section');
  const newOrg = document.createElement('div');
  newOrg.className = 'orgField';
  newOrg.innerHTML = `<label for="organizationPositionField">Position</label>
                                    <input id="organizationPositionField" class="organizationPositionField" placeholder="Enter Position at the Organization Name"
                                        required><br><br>

                                    <label for="organizationField">Organization Name</label>
                                    <input type="text" id="organizationField" class="organizationField" placeholder="Enter the organization's name" required><br><br>

                                    <label for="orgStartField">Start Date</label>
                                    <input type="date" id="orgStartField" class="orgStartField" required><br><br>

                                    <label for="orgEndField">End Date</label>
                                    <input type="date" id="orgEndField" class="orgEndField" required><br><br>

                                    <label for="orgDescriptionField">Description</label>
                                    <textarea id="orgDescriptionField" class="orgDescriptionField" placeholder="Describe the organization & your role in it"></textarea><br><br>`;
                                    OrganizationSection?.appendChild(newOrg);                                  
});

// Declare the variables for the form fields
let nameField = document.getElementById("nameField") as HTMLInputElement;
let titleField = document.getElementById("titleField") as HTMLInputElement;
let contactField = document.getElementById("contactField") as HTMLInputElement;
let emailField = document.getElementById("emailField") as HTMLInputElement;
let addressField = document.getElementById("addressField") as HTMLTextAreaElement;
let linkedinField = document.getElementById("linkedinField") as HTMLInputElement;
let githubField = document.getElementById("githubField") as HTMLInputElement;
let objectiveField = document.getElementById("objectiveField") as HTMLTextAreaElement;


let skillsField = document.getElementById("skillsField") as HTMLInputElement;
let subSkillField = document.getElementById("subSkillField") as HTMLTextAreaElement;





// Update the generateCV function to switch visibility
// Add event listeners for all form fields that should trigger the CV update
document.querySelectorAll<HTMLInputElement>('.field, .degreeField, .schoolField, .edStartField, .edEndField, .edDescriptionField, .weJobField, .companyField, .weStartField, .weEndField, .weDescriptionField, .skillsField, .subSkillField, .projectsField, .proDescriptionField, .certificateField, .crtDiscField, .organizationPositionField, .organizationField, .orgStartField, .orgEndField, .orgDescriptionField').forEach((input) => {
  input.addEventListener('input', generateCV);
});

// This function will generate the CV
// Add event listeners for the fields in the Personal Info Section and Professional Info Section
document.querySelectorAll<HTMLInputElement>('#personalInfoSection input, #personalInfoSection textarea, #professionalInfoSection textarea').forEach((input) => {
  input.addEventListener('input', generateCV);
});

// This function will generate the CV
function generateCV() {
  // Personal Information
  const nameField = document.getElementById("nameField") as HTMLInputElement;
  const titleField = document.getElementById("titleField") as HTMLInputElement;
  const contactField = document.getElementById("contactField") as HTMLInputElement;
  const emailField = document.getElementById("emailField") as HTMLInputElement;
  const addressField = document.getElementById("addressField") as HTMLTextAreaElement;
  const linkedinField = document.getElementById("linkedinField") as HTMLInputElement;
  const githubField = document.getElementById("githubField") as HTMLInputElement;

  document.getElementById("nameT")!.textContent = nameField.value;
  document.getElementById("jobtitleT")!.textContent = titleField.value;
  document.getElementById("contactT")!.innerHTML = `<i class="fa-solid fa-phone"></i> ${contactField.value}`;
  document.getElementById("emailT")!.innerHTML = `<i class="fa-solid fa-envelope"></i> ${emailField.value}`;
  document.getElementById("addressT")!.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${addressField.value}`;
  document.getElementById("linkedT")!.textContent = linkedinField.value;
  document.getElementById("githubT")!.textContent = githubField.value;

  // Profile (Objective)
  const objectiveField = document.getElementById("objectiveField") as HTMLTextAreaElement;
  const objectiveText = objectiveField.value;
  const objectiveDisplay = document.getElementById("objectiveT")!;
  const objectiveHeader = document.getElementById("objectiveHeader")!;

  objectiveDisplay.textContent = objectiveText;

  if (objectiveText.trim() === "") {
    objectiveHeader.style.display = "none";
  } else {
    objectiveHeader.style.display = "block";
  }

  // Education Section
  const educationList = document.getElementById("EdT")!;
  educationList.innerHTML = "";

  const degreeFields = document.querySelectorAll<HTMLInputElement>(".degreeField");
  const schoolFields = document.querySelectorAll<HTMLInputElement>(".schoolField");
  const edStartFields = document.querySelectorAll<HTMLInputElement>(".edStartField");
  const edEndFields = document.querySelectorAll<HTMLInputElement>(".edEndField");
  const edDescriptionFields = document.querySelectorAll<HTMLTextAreaElement>(".edDescriptionField");

  let educationHeader = document.getElementById("educationHeader")!;
  let hasEdEntries = false;

  degreeFields.forEach((degreeField, index) => {
    const degree = degreeField.value;
    const school = schoolFields[index]?.value;
    const startDate = edStartFields[index]?.value;
    const endDate = edEndFields[index]?.value;
    const description = edDescriptionFields[index]?.value;

    if (degree && school && startDate && endDate && description) {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `<strong>${degree}</strong> <br><em>${school}<em> <br>${startDate} - ${endDate} <br>${description}`;
      educationList.appendChild(educationItem);
      hasEdEntries = true;
    } else if (degree && school && startDate && endDate) {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `<strong>${degree}</strong> <br><em>${school}<em> <br>${startDate} - ${endDate}`;
      educationList.appendChild(educationItem);
      hasEdEntries = true;
    } else if (degree && school && startDate) {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `<strong>${degree}</strong> <br><em>${school}<em> <br>${startDate}`;
      educationList.appendChild(educationItem);
      hasEdEntries = true;
    } else if (degree && school) {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `<strong>${degree}</strong> <br><em>${school}<em>`;
      educationList.appendChild(educationItem);
      hasEdEntries = true;
    }
    else if (degree) {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `<strong>${degree}</strong>`;
      educationList.appendChild(educationItem);
      hasEdEntries = true;
    }
  });

  educationHeader.style.display = hasEdEntries ? "block" : "none";

  // Work Experience Section
  const workList = document.getElementById("weT")!;
  let experienceHeader = document.getElementById("experienceHeader")!;
  workList.innerHTML = "";

  const weJobFields = document.querySelectorAll<HTMLInputElement>(".weJobField");
  const companyFields = document.querySelectorAll<HTMLInputElement>(".companyField");
  const weStartFields = document.querySelectorAll<HTMLInputElement>(".weStartField");
  const weEndFields = document.querySelectorAll<HTMLInputElement>(".weEndField");
  const weDescriptionFields = document.querySelectorAll<HTMLTextAreaElement>(".weDescriptionField");

  let hasWeEntries = false;

  weJobFields.forEach((weJobField, index) => {
    const weJob = weJobField.value;
    const weCompany = companyFields[index]?.value;
    const weStartDate = weStartFields[index]?.value;
    const weEndDate = weEndFields[index]?.value;
    const weDescription = weDescriptionFields[index]?.value;

    if (weJob && weCompany && weStartDate && weEndDate && weDescription) {
      const workItem = document.createElement("li");
      workItem.innerHTML = `<strong>${weJob}</strong> <br> <em>${weCompany}<em> <br> ${weStartDate} - ${weEndDate} <br>${weDescription}`;
      workList.appendChild(workItem);
      hasWeEntries = true;
    } else if (weJob && weCompany && weStartDate && weEndDate) {
      const workItem = document.createElement("li");
      workItem.innerHTML = `<strong>${weJob}</strong> <br> <em>${weCompany}</em> <br> ${weStartDate} - ${weEndDate}`;
      workList.appendChild(workItem);
      hasWeEntries = true;
    } else if (weJob && weCompany && weStartDate) {
      const workItem = document.createElement("li");
      workItem.innerHTML = `<strong>${weJob}</strong> <br> <em>${weCompany}<em> <br> ${weStartDate}`;
      workList.appendChild(workItem);
      hasWeEntries = true;
    } else if (weJob && weCompany) {
      const workItem = document.createElement("li");
      workItem.innerHTML = `<strong>${weJob}</strong> <br> <em>${weCompany}<em>`;
      workList.appendChild(workItem);
      hasWeEntries = true;
    }

    else if (weJob) {
      const workItem = document.createElement("li");
      workItem.innerHTML = `<strong>${weJob}</strong>`;
      workList.appendChild(workItem);
      hasWeEntries = true;
    }
  });

  experienceHeader.style.display = hasWeEntries ? "block" : "none";

  // Skills Section
  const skillsList = document.getElementById("SkT")!;
  skillsList.innerHTML = "";

  const skillFields = document.querySelectorAll(".skillsField") as NodeListOf<HTMLInputElement>;
  const subSkillFields = document.querySelectorAll(".subSkillField") as NodeListOf<HTMLTextAreaElement>;

  let hasSkEntries = false;

  skillFields.forEach((skillField, index) => {
    const subSkillField = subSkillFields[index];

    if (skillField.value && subSkillField.value) {
      const skillItem = document.createElement("li");
      skillItem.innerHTML = `<strong>${skillField.value}</strong>: ${subSkillField.value}`;
      skillsList.appendChild(skillItem);
      hasSkEntries = true;
    } else if (skillField.value) {
      const skillItem = document.createElement("li");
      skillItem.innerHTML = `<strong>${skillField.value}</strong>`;
      skillsList.appendChild(skillItem);
      hasSkEntries = true;
    }
  });

  const skillHeader = document.getElementById("skillHeader")!;
  skillHeader.style.display = hasSkEntries ? "block" : "none";

  // Projects Section
  const projectsList = document.getElementById("ProT")!;
  projectsList.innerHTML = "";

  const projectFields = document.querySelectorAll(".projectsField") as NodeListOf<HTMLInputElement>;
  const proDescriptionFields = document.querySelectorAll(".proDescriptionField") as NodeListOf<HTMLTextAreaElement>;

  let hasProEntries = false;

  projectFields.forEach((projectField, index) => {
    const proDescription = proDescriptionFields[index]?.value;

    if (projectField.value && proDescription) {
      const projectItem = document.createElement("li");
      projectItem.innerHTML = `<strong>${projectField.value}</strong> <br> ${proDescription}`;
      projectsList.appendChild(projectItem);
      hasProEntries = true;
    } else if (projectField.value) {
      const projectItem = document.createElement("li");
      projectItem.innerHTML = `<strong>${projectField.value}</strong>`;
      projectsList.appendChild(projectItem);
      hasProEntries = true;
    }
  });

  const projectHeader = document.getElementById("projectHeader")!;
  projectHeader.style.display = hasProEntries ? "block" : "none";

   // Certificates Section
   const certificatesList = document.getElementById("CrtT")!;
   certificatesList.innerHTML = "";
   const certificateFields = document.querySelectorAll(".certificateField") as NodeListOf<HTMLInputElement>;
   const crtDescriptionFields = document.querySelectorAll(".crtDiscField") as NodeListOf<HTMLTextAreaElement>;
   let hasCrtEntries = false;
 
   certificateFields.forEach((certificateField, index) => {
const crtDescription = crtDescriptionFields [index]?.value;

     
     if(certificateField.value && crtDescription){
      const certificateItem = document.createElement("li");
      certificateItem.innerHTML = `<strong>${certificateField.value}</strong> <br> ${crtDescriptionFields[index]?.value || ""}`;
     certificatesList.appendChild(certificateItem);
     hasCrtEntries = true;
     }
    else if(certificateField.value){
      const certificateItem = document.createElement("li");
      certificateItem.innerHTML = `<strong>${certificateField.value}</strong>`;
     certificatesList.appendChild(certificateItem);
     hasCrtEntries = true;
    }
     
   });
 
   document.getElementById("certificateHeader")!.style.display = hasCrtEntries ? "block" : "none";
 
   // Organizations Section
   const organizationsList = document.getElementById("orgT")!;
   organizationsList.innerHTML = "";
   const organizationPositionFields = document.querySelectorAll(".organizationPositionField") as NodeListOf<HTMLInputElement>;
  const organizationFields = document.querySelectorAll(".organizationField") as NodeListOf<HTMLInputElement>;
  const orgStartFields = document.querySelectorAll<HTMLInputElement>(".orgStartField");
  const orgEndFields = document.querySelectorAll<HTMLInputElement>(".orgEndField");
  const orgDescriptionFields = document.querySelectorAll<HTMLTextAreaElement>(".orgDescriptionField");

  let organizationHeader = document.getElementById("organizationHeader")!;
  let hasOrgEntries = false;

  organizationPositionFields.forEach((organizationPositionField, index) => {
    const position = organizationPositionField.value;
    const organization = organizationFields[index]?.value;
    const orgstartDate = orgStartFields[index]?.value;
    const orgendDate = orgEndFields[index]?.value;
    const orgdescription = orgDescriptionFields[index]?.value;

    if (position && organization && orgstartDate && orgendDate && orgdescription) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong> <br><em>${organization}<em> <br>${orgstartDate} - ${orgendDate} <br>${orgdescription}`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 

    else if (position && organization && orgstartDate && orgendDate) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong> <br><em>${organization}<em> <br>${orgstartDate} - ${orgendDate}`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 

    else if (position && organization && orgstartDate && orgdescription) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong> <br><em>${organization}<em> <br>${orgstartDate} <br>${orgdescription}`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 

    else if (position && organization && orgstartDate) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong> <br><em>${organization}<em> <br>${orgstartDate}`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 

    else if (position && organization && orgdescription) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong> <br><em>${organization}<em> <br>${orgdescription}`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 

    else if (position && organization) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong> <br><em>${organization}<em>`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 

    else if (position) {
      const organizationItem = document.createElement("li");
      organizationItem.innerHTML = `<strong>${position}</strong>`;
      organizationsList.appendChild(organizationItem);
      hasOrgEntries = true;
    } 
 });

  organizationHeader.style.display = hasOrgEntries ? "block" : "none";
 
// Update these initial visibility settings
const cvForm = document.getElementById('cv-form') as HTMLElement | null;
const resumeTemplate = document.getElementById('resume-template') as HTMLElement | null;

if (resumeTemplate) {
  resumeTemplate.style.display = 'block';
}

}

//image
const profilePic = document.getElementById("profile-pic") as HTMLImageElement;
const inputFile = document.getElementById("imgField") as HTMLInputElement;

inputFile.onchange = function() {
    if (inputFile.files && inputFile.files[0]) {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
};


function printCV(): void {
  const resumeTemplate = (document.getElementById("resume-template") as HTMLElement).innerHTML;

  const printWindow = window.open('', '', 'width=2480,height=3508');
  if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
          <html>
              <head>
                  <title>Print Resume</title>
                  <link rel="stylesheet" href="style.css">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                  <style>
                      @media print {
                          @page {
                              margin: 0;
                          }
                          body {
                              background-color: white !important;
                              margin: 0;
                              padding: 0;
                              font-family: "PT serif";
                              display: flex;
                              justify-content: center;
                              align-items: center;
                          }
                          .grid-container {
                              width: 100%;
                              height: 100%;
                          }
                      }
                  </style>
              </head>
              <body>
                  <div class="grid-container">
                      ${resumeTemplate}
                  </div>
              </body>
          </html>
      `);
      printWindow.document.close();

      printWindow.onload = () => {
          printWindow.print();
          printWindow.close();
      };
  }
}

// Event listener for form submission
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  generateCV();
});
