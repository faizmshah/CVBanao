var _a, _b, _c, _d, _e, _f;
function togglePersonalInfo() {
    // Get the Personal Information section and button elements
    var personalInfoSection = document.getElementById("personalInfoSection");
    var personalInfoButton = document.getElementById("personalInfoButton");
    // Toggle visibility
    if (personalInfoSection.style.display === "none") {
        personalInfoSection.style.display = "block";
        personalInfoButton.textContent = "Save";
    }
    else {
        personalInfoSection.style.display = "none";
        personalInfoButton.textContent = "Edit Personal Information";
    }
}
function ProfileBtn() {
    // Get the Personal Information section and button elements
    var professionalInfoSection = document.getElementById("professionalInfoSection");
    var professionalInfoButton = document.getElementById("professionalInfoButton");
    // Toggle visibility
    if (professionalInfoSection.style.display === "none") {
        professionalInfoSection.style.display = "block";
        professionalInfoButton.textContent = "Save Profile";
    }
    else {
        professionalInfoSection.style.display = "none";
        professionalInfoButton.textContent = "Edit Profile";
    }
}
function EducationBtn() {
    // Get the Personal Information section and button elements
    var educatioSection = document.getElementById("educatioSection");
    var educationButton = document.getElementById("educationButton");
    // Toggle visibility
    if (educatioSection.style.display === "none") {
        educatioSection.style.display = "block";
        educationButton.style.display = "none";
    }
    else {
        educatioSection.style.display = "none";
    }
}
function WorkBtn() {
    // Get the Personal Information section and button elements
    var workSection = document.getElementById("workSection");
    var workButton = document.getElementById("workButton");
    // Toggle visibility
    if (workSection.style.display === "none") {
        workSection.style.display = "block";
        workButton.style.display = "none";
    }
    else {
        workSection.style.display = "none";
    }
}
function SkillBtn() {
    var skillsSection = document.getElementById("skillsSection");
    var skillButton = document.getElementById("skillButton");
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        skillButton.style.display = "none";
    }
    else {
        skillsSection.style.display = "none";
    }
}
function ProjectBtn() {
    var projectsSection = document.getElementById("projectsSection");
    var projectButton = document.getElementById("projectButton");
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "block";
        projectButton.style.display = "none";
    }
    else {
        projectsSection.style.display = "none";
    }
}
function CertificateBtn() {
    var certuficatesSection = document.getElementById("certificatesSection");
    var CertificateButton = document.getElementById("CertificateButton");
    if (certuficatesSection.style.display === "none") {
        certuficatesSection.style.display = "block";
        CertificateButton.style.display = "none";
    }
    else {
        certuficatesSection.style.display = "none";
    }
}
function OrganizationBtn() {
    var OrganizationSection = document.getElementById("organizationsSection");
    var organizationButton = document.getElementById("organizationButton");
    if (OrganizationSection.style.display === "none") {
        OrganizationSection.style.display = "block";
        organizationButton.style.display = "none";
    }
    else {
        OrganizationSection.style.display = "none";
    }
}
function saveWorkBtn() {
    var workSection = document.getElementById("workSection");
    var saveWorkButton = document.getElementById("saveWorkButton");
    var workButton = document.getElementById("workButton");
    // Toggle visibility
    if (workButton.style.display === "none") {
        workButton.style.display = "block";
        workSection.style.display = "none";
        workButton.textContent = "Edit Work";
        saveWorkButton.textContent = "Save";
    }
    else {
        workButton.style.display = "none";
        workSection.style.display = "block";
    }
}
function saveEducationBtn() {
    var educatioSection = document.getElementById("educatioSection");
    var saveEducationButton = document.getElementById("saveEducationButton");
    var educationButton = document.getElementById("educationButton");
    // Toggle visibility
    if (educationButton.style.display === "none") {
        educationButton.style.display = "block";
        educatioSection.style.display = "none";
        educationButton.textContent = "Edit Education";
        saveEducationButton.textContent = "Save";
    }
    else {
        educationButton.style.display = "none";
        educatioSection.style.display = "block";
    }
}
function saveSkillBtn() {
    var skillsSection = document.getElementById("skillsSection");
    var saveSkillButton = document.getElementById("saveSkillButton");
    var skillButton = document.getElementById("skillButton");
    // Toggle visibility
    if (skillButton.style.display === "none") {
        skillButton.style.display = "block";
        skillsSection.style.display = "none";
        skillButton.textContent = "Edit Skills";
        saveSkillButton.textContent = "Save";
    }
    else {
        skillButton.style.display = "none";
        skillsSection.style.display = "block";
    }
}
function saveProjectBtn() {
    var projectsSection = document.getElementById("projectsSection");
    var saveProjectButton = document.getElementById("saveProjectButton");
    var projectButton = document.getElementById("projectButton");
    // Toggle visibility
    if (projectButton.style.display === "none") {
        projectButton.style.display = "block";
        projectsSection.style.display = "none";
        projectButton.textContent = "Edit Projects";
        saveProjectButton.textContent = "Save";
    }
    else {
        saveProjectButton.style.display = "none";
        projectsSection.style.display = "block";
    }
}
function saveCertificateBtn() {
    var certificatesSection = document.getElementById("certificatesSection");
    var saveCertificateButton = document.getElementById("saveCertificateButton");
    var CertificateButton = document.getElementById("CertificateButton");
    // Toggle visibility
    if (CertificateButton.style.display === "none") {
        CertificateButton.style.display = "block";
        certificatesSection.style.display = "none";
        CertificateButton.textContent = "Edit Certificates";
        saveCertificateButton.textContent = "Save";
    }
    else {
        saveCertificateButton.style.display = "none";
        certificatesSection.style.display = "block";
    }
}
function saveOrgBtn() {
    var organizationsSection = document.getElementById("organizationsSection");
    var saveOrgButton = document.getElementById("saveOrgButton");
    var organizationButton = document.getElementById("organizationButton");
    // Toggle visibility
    if (organizationButton.style.display === "none") {
        organizationButton.style.display = "block";
        organizationsSection.style.display = "none";
        organizationButton.textContent = "Edit Organizations";
        saveOrgButton.textContent = "Save";
    }
    else {
        saveOrgButton.style.display = "none";
        organizationsSection.style.display = "block";
    }
}
// Function to add new education fields dynamically
(_a = document.getElementById('add-education-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var educationSection = document.getElementById('education-section');
    var newEducation = document.createElement('div');
    newEducation.className = 'edField';
    newEducation.innerHTML = "<label for=\"degreeField\">Degree</label>\n                                    <input type=\"text\" id=\"degreeField\" class=\"degreeField\"\n                                        placeholder=\"Enter Degree / Field Of Study / Exchange\" required><br><br>\n\n                                    <label for=\"schoolField\">School/University</label>\n                                    <input type=\"text\" id=\"schoolField\" class=\"schoolField\" placeholder=\"Enter School / University\" required><br><br>\n\n                                    <label for=\"edStartField\">Start Date</label>\n                                    <input type=\"date\" id=\"edStartField\" class=\"edStartField\" required><br><br>\n\n                                    <label for=\"edEndField\">End Date</label>\n                                    <input type=\"date\" id=\"edEndField\" class=\"edEndField\" required><br><br>\n\n                                    <label for=\"edDescriptionField\">Description</label>\n                                    <textarea id=\"edDescriptionField\" class=\"edDescriptionField\"\n                                        placeholder=\"Add a description of your education entry...\"\n                                        required></textarea><br><br>";
    educationSection === null || educationSection === void 0 ? void 0 : educationSection.appendChild(newEducation);
});
// Function to add new work fields dynamically
(_b = document.getElementById('add-work-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var workSection = document.getElementById('work-section');
    var newWork = document.createElement('div');
    newWork.className = 'weField';
    newWork.innerHTML = "<label for=\"weJobField\">Job Title</label>\n                                    <input type=\"text\" id=\"weJobField\" class=\"weJobField\" placeholder=\"Enter Job Title\" required><br><br>\n\n                                    <label for=\"companyField\">Company Name</label>\n                                    <input type=\"text\" id=\"companyField\" class=\"companyField\" placeholder=\"Enter Company Name\" required><br><br>\n\n                                    <label for=\"weStartField\">Start Date</label>\n                                    <input type=\"date\" id=\"weStartField\" class=\"weStartField\" required><br><br>\n\n                                    <label for=\"weEndField\">End Date</label>\n                                    <input type=\"date\" id=\"weEndField\" class=\"weEndField\" required><br><br>\n\n                                    <label for=\"weDescriptionField\">Description</label>\n                                    <textarea id=\"weDescriptionField\" placeholder=\"Describe your role & achievements\"></textarea><br><br>";
    workSection === null || workSection === void 0 ? void 0 : workSection.appendChild(newWork);
});
// Function to add new skill fields dynamically
(_c = document.getElementById('add-skills-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills-section');
    var newSkill = document.createElement('div');
    newSkill.className = 'skField';
    newSkill.innerHTML = "<label for=\"skillsField\">Skill</label>\n                                    <input id=\"skillsField\" class=\"skillsField\" placeholder=\"Enter Skill\"\n                                        required><br><br>\n\n                                    <label for=\"subSkillField\">Information / Sub-skills</label>\n                                    <textarea id=\"subSkillField\" class=\"subSkillField\"\n                                        placeholder=\"Enter Information or Sub-skills\" required></textarea><br><br>";
    skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.appendChild(newSkill);
});
// Function to add new projects fields dynamically
(_d = document.getElementById('add-project-button')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var projectsSection = document.getElementById('projects-section');
    var newProject = document.createElement('div');
    newProject.className = 'prField';
    newProject.innerHTML = "<label for=\"projectsField\">Project title</label>\n                                    <input id=\"projectsField\" class=\"projectsField\" placeholder=\"Enter Project title\"\n                                        required><br><br>\n\n                                    <label for=\"proDescriptionField\">Description</label>\n                                    <textarea id=\"proDescriptionField\" class=\"proDescriptionField\"\n                                        placeholder=\"Describe the project and its outcomes...\" required></textarea><br><br>";
    projectsSection === null || projectsSection === void 0 ? void 0 : projectsSection.appendChild(newProject);
});
// Function to add new Certificates fields dynamically
(_e = document.getElementById('add-certificate-button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var certificatesSection = document.getElementById('certificates-section');
    var newCertificate = document.createElement('div');
    newCertificate.className = 'crtField';
    newCertificate.innerHTML = "<label for=\"certificateField\">Certificate</label>\n                                    <input id=\"certificateField\" class=\"certificateField\" placeholder=\"Enter Certificate Name\"\n                                        required><br><br>\n\n                                    <label for=\"crtDiscField\">Additional Information</label>\n                                    <textarea id=\"crtDiscField\" class=\"crtDiscField\"\n                                        placeholder=\"eg. Level 1 and 2\" required></textarea><br><br>";
    certificatesSection === null || certificatesSection === void 0 ? void 0 : certificatesSection.appendChild(newCertificate);
});
// Function to add new Organization fields dynamically
(_f = document.getElementById('add-org-button')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    var OrganizationSection = document.getElementById('organizations-section');
    var newOrg = document.createElement('div');
    newOrg.className = 'orgField';
    newOrg.innerHTML = "<label for=\"organizationPositionField\">Position</label>\n                                    <input id=\"organizationPositionField\" class=\"organizationPositionField\" placeholder=\"Enter Position at the Organization Name\"\n                                        required><br><br>\n\n                                    <label for=\"organizationField\">Organization Name</label>\n                                    <input type=\"text\" id=\"organizationField\" class=\"organizationField\" placeholder=\"Enter the organization's name\" required><br><br>\n\n                                    <label for=\"orgStartField\">Start Date</label>\n                                    <input type=\"date\" id=\"orgStartField\" class=\"orgStartField\" required><br><br>\n\n                                    <label for=\"orgEndField\">End Date</label>\n                                    <input type=\"date\" id=\"orgEndField\" class=\"orgEndField\" required><br><br>\n\n                                    <label for=\"orgDescriptionField\">Description</label>\n                                    <textarea id=\"orgDescriptionField\" class=\"orgDescriptionField\" placeholder=\"Describe the organization & your role in it\"></textarea><br><br>";
    OrganizationSection === null || OrganizationSection === void 0 ? void 0 : OrganizationSection.appendChild(newOrg);
});
// Declare the variables for the form fields
var nameField = document.getElementById("nameField");
var titleField = document.getElementById("titleField");
var contactField = document.getElementById("contactField");
var emailField = document.getElementById("emailField");
var addressField = document.getElementById("addressField");
var linkedinField = document.getElementById("linkedinField");
var githubField = document.getElementById("githubField");
var objectiveField = document.getElementById("objectiveField");
var skillsField = document.getElementById("skillsField");
var subSkillField = document.getElementById("subSkillField");
// Update the generateCV function to switch visibility
// Add event listeners for all form fields that should trigger the CV update
document.querySelectorAll('.field, .degreeField, .schoolField, .edStartField, .edEndField, .edDescriptionField, .weJobField, .companyField, .weStartField, .weEndField, .weDescriptionField, .skillsField, .subSkillField, .projectsField, .proDescriptionField, .certificateField, .crtDiscField, .organizationPositionField, .organizationField, .orgStartField, .orgEndField, .orgDescriptionField').forEach(function (input) {
    input.addEventListener('input', generateCV);
});
// This function will generate the CV
// Add event listeners for the fields in the Personal Info Section and Professional Info Section
document.querySelectorAll('#personalInfoSection input, #personalInfoSection textarea, #professionalInfoSection textarea').forEach(function (input) {
    input.addEventListener('input', generateCV);
});
// This function will generate the CV
function generateCV() {
    // Personal Information
    var nameField = document.getElementById("nameField");
    var titleField = document.getElementById("titleField");
    var contactField = document.getElementById("contactField");
    var emailField = document.getElementById("emailField");
    var addressField = document.getElementById("addressField");
    var linkedinField = document.getElementById("linkedinField");
    var githubField = document.getElementById("githubField");
    document.getElementById("nameT").textContent = nameField.value;
    document.getElementById("jobtitleT").textContent = titleField.value;
    document.getElementById("contactT").innerHTML = "<i class=\"fa-solid fa-phone\"></i> ".concat(contactField.value);
    document.getElementById("emailT").innerHTML = "<i class=\"fa-solid fa-envelope\"></i> ".concat(emailField.value);
    document.getElementById("addressT").innerHTML = "<i class=\"fa-solid fa-location-dot\"></i> ".concat(addressField.value);
    document.getElementById("linkedT").textContent = linkedinField.value;
    document.getElementById("githubT").textContent = githubField.value;
    // Profile (Objective)
    var objectiveField = document.getElementById("objectiveField");
    var objectiveText = objectiveField.value;
    var objectiveDisplay = document.getElementById("objectiveT");
    var objectiveHeader = document.getElementById("objectiveHeader");
    objectiveDisplay.textContent = objectiveText;
    if (objectiveText.trim() === "") {
        objectiveHeader.style.display = "none";
    }
    else {
        objectiveHeader.style.display = "block";
    }
    // Education Section
    var educationList = document.getElementById("EdT");
    educationList.innerHTML = "";
    var degreeFields = document.querySelectorAll(".degreeField");
    var schoolFields = document.querySelectorAll(".schoolField");
    var edStartFields = document.querySelectorAll(".edStartField");
    var edEndFields = document.querySelectorAll(".edEndField");
    var edDescriptionFields = document.querySelectorAll(".edDescriptionField");
    var educationHeader = document.getElementById("educationHeader");
    var hasEdEntries = false;
    degreeFields.forEach(function (degreeField, index) {
        var _a, _b, _c, _d;
        var degree = degreeField.value;
        var school = (_a = schoolFields[index]) === null || _a === void 0 ? void 0 : _a.value;
        var startDate = (_b = edStartFields[index]) === null || _b === void 0 ? void 0 : _b.value;
        var endDate = (_c = edEndFields[index]) === null || _c === void 0 ? void 0 : _c.value;
        var description = (_d = edDescriptionFields[index]) === null || _d === void 0 ? void 0 : _d.value;
        if (degree && school && startDate && endDate && description) {
            var educationItem = document.createElement("li");
            educationItem.innerHTML = "<strong>".concat(degree, "</strong> <br><em>").concat(school, "<em> <br>").concat(startDate, " - ").concat(endDate, " <br>").concat(description);
            educationList.appendChild(educationItem);
            hasEdEntries = true;
        }
        else if (degree && school && startDate && endDate) {
            var educationItem = document.createElement("li");
            educationItem.innerHTML = "<strong>".concat(degree, "</strong> <br><em>").concat(school, "<em> <br>").concat(startDate, " - ").concat(endDate);
            educationList.appendChild(educationItem);
            hasEdEntries = true;
        }
        else if (degree && school && startDate) {
            var educationItem = document.createElement("li");
            educationItem.innerHTML = "<strong>".concat(degree, "</strong> <br><em>").concat(school, "<em> <br>").concat(startDate);
            educationList.appendChild(educationItem);
            hasEdEntries = true;
        }
        else if (degree && school) {
            var educationItem = document.createElement("li");
            educationItem.innerHTML = "<strong>".concat(degree, "</strong> <br><em>").concat(school, "<em>");
            educationList.appendChild(educationItem);
            hasEdEntries = true;
        }
        else if (degree) {
            var educationItem = document.createElement("li");
            educationItem.innerHTML = "<strong>".concat(degree, "</strong>");
            educationList.appendChild(educationItem);
            hasEdEntries = true;
        }
    });
    educationHeader.style.display = hasEdEntries ? "block" : "none";
    // Work Experience Section
    var workList = document.getElementById("weT");
    var experienceHeader = document.getElementById("experienceHeader");
    workList.innerHTML = "";
    var weJobFields = document.querySelectorAll(".weJobField");
    var companyFields = document.querySelectorAll(".companyField");
    var weStartFields = document.querySelectorAll(".weStartField");
    var weEndFields = document.querySelectorAll(".weEndField");
    var weDescriptionFields = document.querySelectorAll(".weDescriptionField");
    var hasWeEntries = false;
    weJobFields.forEach(function (weJobField, index) {
        var _a, _b, _c, _d;
        var weJob = weJobField.value;
        var weCompany = (_a = companyFields[index]) === null || _a === void 0 ? void 0 : _a.value;
        var weStartDate = (_b = weStartFields[index]) === null || _b === void 0 ? void 0 : _b.value;
        var weEndDate = (_c = weEndFields[index]) === null || _c === void 0 ? void 0 : _c.value;
        var weDescription = (_d = weDescriptionFields[index]) === null || _d === void 0 ? void 0 : _d.value;
        if (weJob && weCompany && weStartDate && weEndDate && weDescription) {
            var workItem = document.createElement("li");
            workItem.innerHTML = "<strong>".concat(weJob, "</strong> <br> <em>").concat(weCompany, "<em> <br> ").concat(weStartDate, " - ").concat(weEndDate, " <br>").concat(weDescription);
            workList.appendChild(workItem);
            hasWeEntries = true;
        }
        else if (weJob && weCompany && weStartDate && weEndDate) {
            var workItem = document.createElement("li");
            workItem.innerHTML = "<strong>".concat(weJob, "</strong> <br> <em>").concat(weCompany, "</em> <br> ").concat(weStartDate, " - ").concat(weEndDate);
            workList.appendChild(workItem);
            hasWeEntries = true;
        }
        else if (weJob && weCompany && weStartDate) {
            var workItem = document.createElement("li");
            workItem.innerHTML = "<strong>".concat(weJob, "</strong> <br> <em>").concat(weCompany, "<em> <br> ").concat(weStartDate);
            workList.appendChild(workItem);
            hasWeEntries = true;
        }
        else if (weJob && weCompany) {
            var workItem = document.createElement("li");
            workItem.innerHTML = "<strong>".concat(weJob, "</strong> <br> <em>").concat(weCompany, "<em>");
            workList.appendChild(workItem);
            hasWeEntries = true;
        }
        else if (weJob) {
            var workItem = document.createElement("li");
            workItem.innerHTML = "<strong>".concat(weJob, "</strong>");
            workList.appendChild(workItem);
            hasWeEntries = true;
        }
    });
    experienceHeader.style.display = hasWeEntries ? "block" : "none";
    // Skills Section
    var skillsList = document.getElementById("SkT");
    skillsList.innerHTML = "";
    var skillFields = document.querySelectorAll(".skillsField");
    var subSkillFields = document.querySelectorAll(".subSkillField");
    var hasSkEntries = false;
    skillFields.forEach(function (skillField, index) {
        var subSkillField = subSkillFields[index];
        if (skillField.value && subSkillField.value) {
            var skillItem = document.createElement("li");
            skillItem.innerHTML = "<strong>".concat(skillField.value, "</strong>: ").concat(subSkillField.value);
            skillsList.appendChild(skillItem);
            hasSkEntries = true;
        }
        else if (skillField.value) {
            var skillItem = document.createElement("li");
            skillItem.innerHTML = "<strong>".concat(skillField.value, "</strong>");
            skillsList.appendChild(skillItem);
            hasSkEntries = true;
        }
    });
    var skillHeader = document.getElementById("skillHeader");
    skillHeader.style.display = hasSkEntries ? "block" : "none";
    // Projects Section
    var projectsList = document.getElementById("ProT");
    projectsList.innerHTML = "";
    var projectFields = document.querySelectorAll(".projectsField");
    var proDescriptionFields = document.querySelectorAll(".proDescriptionField");
    var hasProEntries = false;
    projectFields.forEach(function (projectField, index) {
        var _a;
        var proDescription = (_a = proDescriptionFields[index]) === null || _a === void 0 ? void 0 : _a.value;
        if (projectField.value && proDescription) {
            var projectItem = document.createElement("li");
            projectItem.innerHTML = "<strong>".concat(projectField.value, "</strong> <br> ").concat(proDescription);
            projectsList.appendChild(projectItem);
            hasProEntries = true;
        }
        else if (projectField.value) {
            var projectItem = document.createElement("li");
            projectItem.innerHTML = "<strong>".concat(projectField.value, "</strong>");
            projectsList.appendChild(projectItem);
            hasProEntries = true;
        }
    });
    var projectHeader = document.getElementById("projectHeader");
    projectHeader.style.display = hasProEntries ? "block" : "none";
    // Certificates Section
    var certificatesList = document.getElementById("CrtT");
    certificatesList.innerHTML = "";
    var certificateFields = document.querySelectorAll(".certificateField");
    var crtDescriptionFields = document.querySelectorAll(".crtDiscField");
    var hasCrtEntries = false;
    certificateFields.forEach(function (certificateField, index) {
        var _a, _b;
        var crtDescription = (_a = crtDescriptionFields[index]) === null || _a === void 0 ? void 0 : _a.value;
        if (certificateField.value && crtDescription) {
            var certificateItem = document.createElement("li");
            certificateItem.innerHTML = "<strong>".concat(certificateField.value, "</strong> <br> ").concat(((_b = crtDescriptionFields[index]) === null || _b === void 0 ? void 0 : _b.value) || "");
            certificatesList.appendChild(certificateItem);
            hasCrtEntries = true;
        }
        else if (certificateField.value) {
            var certificateItem = document.createElement("li");
            certificateItem.innerHTML = "<strong>".concat(certificateField.value, "</strong>");
            certificatesList.appendChild(certificateItem);
            hasCrtEntries = true;
        }
    });
    document.getElementById("certificateHeader").style.display = hasCrtEntries ? "block" : "none";
    // Organizations Section
    var organizationsList = document.getElementById("orgT");
    organizationsList.innerHTML = "";
    var organizationPositionFields = document.querySelectorAll(".organizationPositionField");
    var organizationFields = document.querySelectorAll(".organizationField");
    var orgStartFields = document.querySelectorAll(".orgStartField");
    var orgEndFields = document.querySelectorAll(".orgEndField");
    var orgDescriptionFields = document.querySelectorAll(".orgDescriptionField");
    var organizationHeader = document.getElementById("organizationHeader");
    var hasOrgEntries = false;
    organizationPositionFields.forEach(function (organizationPositionField, index) {
        var _a, _b, _c, _d;
        var position = organizationPositionField.value;
        var organization = (_a = organizationFields[index]) === null || _a === void 0 ? void 0 : _a.value;
        var orgstartDate = (_b = orgStartFields[index]) === null || _b === void 0 ? void 0 : _b.value;
        var orgendDate = (_c = orgEndFields[index]) === null || _c === void 0 ? void 0 : _c.value;
        var orgdescription = (_d = orgDescriptionFields[index]) === null || _d === void 0 ? void 0 : _d.value;
        if (position && organization && orgstartDate && orgendDate && orgdescription) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong> <br><em>").concat(organization, "<em> <br>").concat(orgstartDate, " - ").concat(orgendDate, " <br>").concat(orgdescription);
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
        else if (position && organization && orgstartDate && orgendDate) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong> <br><em>").concat(organization, "<em> <br>").concat(orgstartDate, " - ").concat(orgendDate);
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
        else if (position && organization && orgstartDate && orgdescription) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong> <br><em>").concat(organization, "<em> <br>").concat(orgstartDate, " <br>").concat(orgdescription);
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
        else if (position && organization && orgstartDate) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong> <br><em>").concat(organization, "<em> <br>").concat(orgstartDate);
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
        else if (position && organization && orgdescription) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong> <br><em>").concat(organization, "<em> <br>").concat(orgdescription);
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
        else if (position && organization) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong> <br><em>").concat(organization, "<em>");
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
        else if (position) {
            var organizationItem = document.createElement("li");
            organizationItem.innerHTML = "<strong>".concat(position, "</strong>");
            organizationsList.appendChild(organizationItem);
            hasOrgEntries = true;
        }
    });
    organizationHeader.style.display = hasOrgEntries ? "block" : "none";
    //image
    var profilePic = document.getElementById("profile-pic");
    var inputFile = document.getElementById("imgField");
    inputFile.onchange = function () {
        if (inputFile.files && inputFile.files[0]) {
            profilePic.src = URL.createObjectURL(inputFile.files[0]);
        }
    };
}
// Function to print the CV
// Function to print the CV
function printCV() {
    var cvform = document.getElementById('cv-form');
    if (cvform) {
        // Hide the CV form before printing
        cvform.style.display = "none";
        // Print and then restore visibility
        window.print();
        // Show the CV form after printing
        cvform.style.display = "block";
    }
    else {
        console.error("cv-form element not found");
    }
}
