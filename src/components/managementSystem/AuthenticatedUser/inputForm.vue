<template>
  <v-container fluid>
    <v-form>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 class="deep-purple--text ml-2">Personal Information</v-flex>
          <v-flex sm6 xs12 v-for="(ref, index) in fieldOptions_1" :key="index">
            <v-text-field autofocus class="ma-2" :label="ref.label + '*'" v-model="ref.vModel" type="ref.type" :placeholder="ref.placeholder" required />
          </v-flex>
        </v-layout>
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-layout align-center justify-center row wrap fill-height>
          <v-flex xs12 class="deep-purple--text mt-4 mb-2 ml-2">
            Your Bio*
          </v-flex>
          <v-flex class="mt-3">
            <v-textarea solo auto-grow name="input-7-4" label="ex: I'm a freelancer, multi-disciplinary Web-App Developer who's delivered creative and engaging tech solutions to various organisations. Web Creation Fascinated me since I was 14 Years of Age and my fascination "
              v-model="summary"></v-textarea>
          </v-flex>
        </v-layout>
        <v-divider class="mt-3 mb-3"></v-divider>
         <v-layout v-for="(ref, index) in educationalInfo" :key="index+10" row wrap class="pt-4">
          <v-flex xs12 class="deep-purple--text ma-2">Educational Information</v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="University/School" v-model="ref.school" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Course" v-model="ref.course" placeholder="ex:B-Tech/10th/12th" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Percentage / CGPA" placeholder="ex: 85%, 9.5 CGPA" v-model="ref.score" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Location" v-model="ref.location" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Achievements" placeholder="ex: Scholar Badge Holder, Participated in Debates etc." v-model="ref.additionalInfo" type="text" />
          </v-flex>
          <v-flex offset-xs8 offset-sm10 sm12>
            <v-btn @click="addEd" color="primary">Add</v-btn>
            <v-btn @click="removeEd" color="red" class="white--text">Delete</v-btn>
          </v-flex>
        </v-layout>
        <v-alert @dblclick="msgED = '' " :value="true" type="error" v-if="msgED.length">
            {{msgED}}  <br> {{ remove_alert }}
        </v-alert>
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-layout align-center justify-center row wrap fill-height class="pt-4">
          <v-flex  xs12 class="deep-purple--text ml-2">Skill Set</v-flex>
          <v-flex sm1 xs6 class="text-sm-right text-xs-center">
            <v-btn class="mt-2 pa-2" fab medium dark color="indigo darken-4">Skills</v-btn>
          </v-flex>
          <v-flex xs12 sm3 class="mt-0 ml-4">
            <v-text-field  name="Skill" label="SKILL" placeholder="Enter To Submit" id="id" v-model="skill_current" class="text-xs-center"
              @change="skillUpdate"></v-text-field>
          </v-flex>
          <v-flex sm1 xs6 class="text-sm-right text-xs-center">
            <v-btn @click="skillUpdate" class="mt-2" fab medium dark color="indigo darken-4">
              <v-icon dark>add</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row wrap fill-height v-if="skills.length > 0" class="mt-4">
          <v-flex v-for="(ref, index) in skills" :key="index" sm3 xs6>
            <div class="text-xs-center mr-2 ml-2 mb-4">
              <v-btn @click="removeSkill(index)" block align-center> {{ ref }} </v-btn>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-alert :value="true" type="error" v-if="skills.length > 0">
            Click To Remove The Skill
          </v-alert>
        </v-layout>
        
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-layout v-for="(ref, index) in workXInfo" :key="index" row wrap class="pt-4">
          <v-flex xs12 class="deep-purple--text ma-2">
            Professional Experience / Internships
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Work Position" v-model="ref.profile_title" placeholder="ex: Web Developer" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Company" v-model="ref.company" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Duration" v-model="ref.duration" placeholder="ex: 3 Months" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Roles & Responsibilities" v-model="ref.role" type="text" />
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field  class="ma-2" label="Location" v-model="ref.location" type="text" />
          </v-flex>
          <v-flex offset-sm10 offset-xs8>
            <v-btn @click="addPr" color="primary">Add</v-btn>
            <v-btn @click="removePr" color="red" class="white--text">Delete</v-btn>
          </v-flex>
        </v-layout>
         <v-alert @dblclick="msgPR = '' " :value="true" type="error" v-if="msgPR.length">
            {{msgPR}}  <br> {{ remove_alert }}
        </v-alert>
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-layout align-center justify-center row wrap fill-height class="pt-4">
          <v-flex xs12 class="deep-purple--text mb-2 ml-2">
            Explain the most difficult task you have accomplished or the most complex project undertaken so far
          </v-flex>
          <v-flex v-for="(ref, index) in complexTask" :key="index" class="mt-3" xs12>
            <v-textarea solo auto-grow name="input-7-4" label="Give brief information and provide the link, if any"
              v-model="ref.complex_task"></v-textarea>
              <v-flex offset-sm10 offset-xs8>
                <v-btn @click="addComplex_task" color="primary">Add</v-btn>
                <v-btn @click="removeComplex_task(index)" color="red" class="white--text">Delete</v-btn>
              </v-flex>
          </v-flex>
        </v-layout>
        <v-alert @dblclick="msgTask = '' " :value="true" type="error" v-if="msgTask.length">
            {{msgTask}}  <br> {{ remove_alert }}
        </v-alert>
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-layout align-center justify-center row wrap fill-height class="pt-4">
          <v-flex xs12 class="deep-purple--text mb-2 ml-2">
            Social Profile(s)
          </v-flex>
          <v-flex>
            <v-layout row wrap v-for="(ref,index) in social_profiles" :key="index+5">
              <v-flex sm6 xs12>
                <v-text-field  class="ma-2" label="Name" v-model="ref.name" type="text" placeholder="ex: Github, Linkedin etc.." />
              </v-flex>
              <v-flex sm6 xs12>
                <v-text-field  class="ma-2" placeholder="https://www.xyx.com/abc" label="Link" v-model="ref.url" type="url" />
              </v-flex>
              <v-flex offset-sm10 offset-xs8>
                <v-btn @click="addProfile" color="primary">Add</v-btn>
                <v-btn @click="removeProfile(index)" color="red" class="white--text">Delete</v-btn>
              </v-flex>
            </v-layout>
            <v-alert @dblclick="msgSocialProfile = '' " :value="true" type="error" v-if="msgSocialProfile.length">
                {{msgSocialProfile}}  <br> {{ remove_alert }}
            </v-alert>
            <v-alert @dblclick="urlCompmsg = '' " :value="true" type="error" v-if="urlCompmsg.length">
                {{urlCompmsg}}  <br> {{ remove_alert }}
            </v-alert>
          </v-flex>
        </v-layout>
        <v-divider  class="mt-3 mb-3"></v-divider>
    </v-form>
    <v-layout class="mt-5" align-center justify-center row wrap>
       <div class="text-xs-center">
          <v-btn @click="submitValidate" color="indigo" dark>Submit</v-btn> 
       </div>
    </v-layout>
    <v-alert @dblclick="msgSubmit = '' " :value="true" type="error" v-if="msgSubmit.length">
            {{msgSubmit}} <br> {{remove_alert}}
    </v-alert>
  </v-container>
</template>
<script>
import { EDMX, WXMX, CXMX, SPMX } from "@/components/mixin/mixin.js";
export default {
  name: "inputForm",
  mixins: [EDMX, WXMX, CXMX, SPMX],
  data() {
    return {
      msgSubmit: "",
      urlCompmsg: "",
      remove_alert: "Double Click To Hide",
      fieldOptions_1: {
        //   general information
        1: {
          label: "Full Name",
          vModel: "",
          type: "text"
        },
        2: {
          label: "E-mail",
          vModel: "",
          type: "email"
        },
        3: {
          label: "Enrollment Number",
          vModel: "",
          type: "number"
        },
        4: {
          label: "Gender",
          vModel: "",
          type: "text"
        },
        5: {
          label: "Course",
          vModel: "",
          type: "text"
        },
        6: {
          label: "Work Field",
          vModel: "",
          type: "text",
          placeholder: "ex: IT/Managment.."
        },
        7: {
          label: "Work Profile",
          vModel: "",
          type: "text",
          placeholder: "ex: Content Writer, HR.."
        },
        8: {
          label: "Contact Number",
          vModel: "",
          type: "number"
        }
      },
      requiredFields_label: [],
      requiredFields_vModel: [],
      summary: "",

      skills: [],
      skill_current: ""
    };
  },
  methods: {
    removeEd() {
      let educationalInfo = this.educationalInfo;
      if (educationalInfo.length > 1) {
        educationalInfo.splice(educationalInfo, 1);
      }
      if (educationalInfo.length === 1) {
        this.msgED =
          "The fields aren't compulsary to be filled, Admin prevents the permit to delete it further!";
      }
    },
    skillUpdate() {
      this.skills.push(this.skill_current);
      this.$data.skill_current = "";
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
    },
    removePr(index) {
      let workXinfo = this.workXInfo;
      if (workXinfo.length > 1) {
        workXinfo.splice(index, 1);
      }
      if (workXinfo.length === 1) {
        this.msgPR =
          "The fields aren't compulsary to be filled, Admin prevents the permit to delete it further!";
      }
    },
    removeComplex_task(index) {
      let complexTask = this.complexTask;
      if (complexTask.length > 1) {
        complexTask.splice(index, 1);
      }
      if (complexTask.length === 1) {
        this.msgTask =
          "The fields aren't compulsary to be filled, Admin prevents the permit to delete it further!";
      }
    },
    removeProfile(index) {
      let profile = this.social_profiles;
      if (profile.length > 1) {
        profile.splice(index, 1);
      }
      if (profile.length === 1) {
        this.msgSocialProfile =
          "The fields aren't compulsary to be filled, Admin prevents the permit to delete it further!";
      }
    },
    submitValidate() {
      let fieldOptions_1 = this.fieldOptions_1;
      let requiredFields_vModel = [];
      let requiredFields_label = [];
      let i;
      let userData = [];
      for (i in fieldOptions_1) {
        requiredFields_label[i] = fieldOptions_1[i].label;
        requiredFields_vModel[i] = fieldOptions_1[i].vModel;
      }
      requiredFields_label.splice(0, 1);
      requiredFields_vModel.splice(0, 1);
      requiredFields_label[8] = "Your Bio";
      requiredFields_vModel[8] = this.summary;
      for (i in requiredFields_vModel) {
        if (
          requiredFields_vModel[i] === null ||
          requiredFields_vModel[i] === undefined ||
          requiredFields_vModel[i].trim() === ""
        ) {
          return (this.msgSubmit = `${
            requiredFields_label[i]
          } is a compulsary field, fill it to submit`);
        }
      }
      if (requiredFields_vModel[0].length > 0) {
        let requiredFields_vModelObj = {
          fullname:  requiredFields_vModel[0],
          email:  requiredFields_vModel[1],
          Enrollment_no:  requiredFields_vModel[2],
          gender:  requiredFields_vModel[3],
          course:  requiredFields_vModel[4],
          work_field:  requiredFields_vModel[5],
          work_profile:  requiredFields_vModel[6],
          contact:  requiredFields_vModel[7],
          bio:  requiredFields_vModel[8],      
        }
        userData.push(requiredFields_vModelObj);
      this.$store.dispatch("tiles_action", "Personal Information");
      }
      
      let educationalInformation = this.educationalInfo;
      if (
        educationalInformation[0].school.trim() !== "" ||
        educationalInformation[0].course.trim() !== "" ||
        educationalInformation[0].score.trim() !== "" ||
        educationalInformation[0].location.trim() !== "" ||
        educationalInformation[0].additionalInfo.trim() !== ""
      ) {
        let educationalInfo = [];
        for (i in educationalInformation) {
          if (educationalInformation.length > i) {
            let newED = {
              school: "",
              course: "",
              score: "",
              location: "",
              additionalInfo: ""
            };
            educationalInfo.push(newED);
            educationalInfo[i].school = educationalInformation[i].school;
            educationalInfo[i].course = educationalInformation[i].course;
            educationalInfo[i].score = educationalInformation[i].score;
            educationalInfo[i].location = educationalInformation[i].location;
            educationalInfo[i].additionalInfo =
              educationalInformation[i].additionalInfo;
          }
        }
        if (educationalInfo.length) {
          this.$store.dispatch("tiles_action", "Educational Information");
          userData.push(educationalInfo);
        }
      }

      let workXinformation = this.workXInfo;

      if (
        workXinformation[0].company.trim() !== "" ||
        workXinformation[0].profile_title.trim() !== "" ||
        workXinformation[0].duration.trim() !== "" ||
        workXinformation[0].location.trim() !== "" ||
        workXinformation[0].role.trim() !== ""
      ) {
        let workXInfo = [];
        for (i in workXinformation) {
          if (workXinformation.length > i) {
            let newPr = {
              company: "",
              profile_title: "",
              duration: "",
              location: "",
              role: ""
            };
            workXInfo.push(newPr);
            workXInfo[i].company = workXinformation[i].company;
            workXInfo[i].profile_title = workXinformation[i].profile_title;
            workXInfo[i].duration = workXinformation[i].duration;
            workXInfo[i].location = workXinformation[i].location;
            workXInfo[i].role = workXinformation[i].role;
          }
        }
        if (workXInfo.length) {
          this.$store.dispatch("tiles_action", "Work Experiance Information");
          userData.push(workXInfo);
        }
      }

      let skills = [];
      let skillset = this.skills;
      for (i in skillset) {
        if (skillset[i].trim() === "") {
          this.msgSubmit = `Your skill at position ${parseInt(i) +
            1} is an empty string i.e "" or contains just white spaces`;
          return;
        }
        skills[i] = skillset[i];
      }
      if (skills[0] !== null && skills[0] !== undefined) {
        this.$store.dispatch("tiles_action", "Skills");
        userData.push(skills);
      }
      let complex_task = this.complexTask;
      if (complex_task[0].complex_task.trim() !== "") {
        let complexTask = [];
        for (i in complex_task) {
          if (complex_task.length > i) {
            let newtask = {
              complex_task: ""
            };
            complexTask.push(newtask);
            complexTask[i].complex_task = complex_task[i].complex_task;
          }
        }
        if (complexTask.length) {
          this.$store.dispatch(
            "tiles_action",
            "most difficult task accomplished or the most complex project"
          );
          userData.push(complexTask);
        }
      }

      let social_profiles = this.social_profiles;
      if (
        social_profiles[0].name.trim() !== "" ||
        social_profiles[0].url.trim() !== ""
      ) {
        let socialProfiles = [];
        let flag = 1;
        for (i in social_profiles) {
          if (social_profiles.length > i) {
            let newSP = {
              name: "",
              url: ""
            };
            socialProfiles.push(newSP);
            socialProfiles[i].name = this.social_profiles[i].name;
            socialProfiles[i].url = this.social_profiles[i].url;
            if (socialProfiles[i].name !== "" && socialProfiles[i].url === "") {
              flag = -1;
              return (this.urlCompmsg = `Link to the profile ${
                socialProfiles[i].name
              } is must, either remove profile or provide the link`);
            }
            if (socialProfiles[i].url !== "" && socialProfiles[i].name === "") {
              flag = -1;
              return (this.urlCompmsg = `Name of the social network associated with the link ${
                socialProfiles[i].url
              } is must, either remove the link or provide the name`);
            }
          }
        }
        if (flag) {
          this.$store.dispatch("tiles_action", "Social Profile");
          userData.push(socialProfiles);
        }
      }
      
    
      this.$store.dispatch("userData_action", userData);
      this.$router.push("/preview");
    
    }
  }
};
</script>
