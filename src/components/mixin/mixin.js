export const alertMx = {
  computed: {
    alert() {
      return this.$store.getters.alert;
    }
  }
};
export const userMx = {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
export const labelMx = {
  data() {
    return {
      label: [
        "Full Name",
        "E-mail",
        "Enrollment Number",
        "Gender",
        "Course",
        "Work Field",
        "Work Profile",
        "Contact Number",
        "Bio"
      ]
    };
  }
};
export const fieldRules = {
  data() {
    return {
      fieldRules: [v => !!v || "required"]
    };
  },
  computed: {
    atPos() {
      return this.$store.state.toEdit.atPos;
    }
  }
};
export const passIndex = {
  methods: {
    passIndex(index, ref) {
      let toEdit = {
        reference: "",
        atPos: ""
      };
      toEdit.reference = ref;
      toEdit.atPos = index;
      this.$store.dispatch("toEdit_action", toEdit);
      this.dialog = true;
      this.$router.push("/edit-menu");
    }
  }
};

export const previewCommon = {
  data() {
    return {
      personalInfo: [],
      educationalInfo: [],
      workXInfo: [],
      skills: [],
      complexTask: [],
      socialProfiles: [],
      educationalInfoDisplay: false,
      workXInfoDisplay: false,
      personalInfoDisplay: false,
      skillsInfoDisplay: false,
      complexTaskInfoDisplay: false,
      socialProfileInfoDisplay: false,
      dialog: false
    };
  },
  mounted() {
    let userData = this.$store.getters.userData_getters;
    let tiles = this.$store.getters.tiles_getters;
    let x, i;
    let flag = 0;
    for (i in userData) {
      let currentData = userData[i];
      switch (tiles[i].toLowerCase()) {
        case "personal information": {
          if (flag === 0) {
            this.personalInfo = Object.keys(userData[0]).map(
              key => userData[0][key]
            );
          }
          flag += 1;
          this.personalInfoDisplay = true;
          break;
        }
        case "educational information": {
          let educationalInfo = this.educationalInfo;
          for (x in currentData) {
            let newEd = {
              school: "",
              course: "",
              score: "",
              location: "",
              additionalInfo: "",
              reference: "Educational Information"
            };
            educationalInfo.push(newEd);
            educationalInfo[x].school = currentData[x].school;
            educationalInfo[x].course = currentData[x].course;
            educationalInfo[x].score = currentData[x].score;
            educationalInfo[x].location = currentData[x].location;
            educationalInfo[x].additionalInfo = currentData[x].additionalInfo;
          }
          this.educationalInfoDisplay = true;
          break;
        }
        case "work experiance information": {
          let workXInfo = this.workXInfo;
          for (x in currentData) {
            let newPr = {
              company: "",
              profile_title: "",
              duration: "",
              location: "",
              role: "",
              reference: "Work Experiance"
            };
            workXInfo.push(newPr);
            workXInfo[x].company = currentData[x].company;
            workXInfo[x].profile_title = currentData[x].profile_title;
            workXInfo[x].duration = currentData[x].duration;
            workXInfo[x].location = currentData[x].location;
            workXInfo[x].role = currentData[x].role;
          }
          this.workXInfoDisplay = true;
          break;
        }
        case "skills": {
          let skills = this.skills;
          for (x in currentData) {
            skills[x] = currentData[x];
          }
          this.skillsInfoDisplay = true;
          break;
        }
        case "most difficult task accomplished or the most complex project": {
          let complexTask = this.complexTask;
          for (x in currentData) {
            let newtask = {
              complex_task: ""
            };
            complexTask.push(newtask);
            complexTask[x].complex_task = currentData[x].complex_task;
          }
          this.complexTaskInfoDisplay = true;
          break;
        }
        case "social profile": {
          let socialProfiles = this.socialProfiles;
          for (x in currentData) {
            let newSP = {
              name: "",
              url: ""
            };
            socialProfiles.push(newSP);
            socialProfiles[x].name = currentData[x].name;
            socialProfiles[x].url = currentData[x].url;
          }
          this.socialProfileInfoDisplay = true;
          break;
        }
      }
    }
  }
};
export const toggleCardText = {
  data() {
    return {
      display: true
    };
  },
  methods: {
    toggleCurrentCard() {
      this.display = !this.display;
    }
  }
};

export const EDMX = {
  data() {
    return {
      educationalInfo: [
        {
          school: "",
          course: "",
          score: "",
          location: "",
          additionalInfo: ""
        }
      ],
      msgED: ""
    };
  },
  methods: {
    addEd() {
      let newED = {
        school: "",
        course: "",
        score: "",
        location: "",
        additionalInfo: ""
      };
      this.msgED = "";
      this.educationalInfo.push(newED);
    }
  }
};

export const WXMX = {
  data() {
    return {
      workXInfo: [
        {
          company: "",
          profile_title: "",
          duration: "",
          location: "",
          role: ""
        }
      ],
      msgPR: ""
    };
  },
  methods: {
    addPr() {
      let newPr = {
        company: "",
        profile_title: "",
        duration: "",
        location: "",
        role: ""
      };
      this.workXInfo.push(newPr);
      this.msgPR = "";
    }
  }
};

export const CXMX = {
  data() {
    return {
      complexTask: [
        {
          complex_task: ""
        }
      ],
      msgTask: ""
    };
  },
  methods: {
    addComplex_task() {
      let newTask = {
        complex_task: ""
      };

      this.complexTask.push(newTask);
      this.msgTask = "";
    }
  }
};
export const SPMX = {
  data() {
    return {
      social_profiles: [
        {
          name: "",
          url: ""
        }
      ],
      msgSocialProfile: ""
    };
  },
  methods: {
    addProfile() {
      let newProfile = {
        name: "",
        url: ""
      };
      this.social_profiles.push(newProfile);
      this.msgSocialProfile = "";
    }
  }
};
