import { atom } from "jotai";

export const stepOneArray = atom<any>([]);
export const stepTwoArray = atom<any>([]);
export const stepThreeArray = atom<any>([]);
export const stepFourArray = atom<any>([]);
export const stepFiveArray = atom<any>([]);

export const stepOneFirstItem = atom<any>({
    label: 'Validating my product idea',
    id: 'productIdea',
    isChecked: false
});

export const stepOneSecondItem = atom<any>({
    label: 'Creating an MVP',
    id: 'createMVP',
    isChecked: false
});

export const stepOneThirdItem = atom<any>({
    label: 'Scale an existing product',
    id: 'scaleProduct',
    isChecked: false
});

export const stepOneFourthItem = atom<any>({
    label: 'Driving more sales',
    id: 'moreSales',
    isChecked: false
});

export const stepOneFifthItem = atom<any>({
    label: 'Cutting costs',
    id: 'cutCost',
    isChecked: false
});

export const stepOneSixthItem = atom<any>({
    label: 'Other',
    id: 'other',
    isChecked: false,
    others: ''
});

// step-------------------2
export const stepTwoFirstItem = atom<any>({
    label: 'Product idea ideation & validation',
    id: 'productIdeaIV',
    isChecked: false
});

export const stepTwoSecondItem = atom<any>({
    label: 'UX / UI Design',
    id: 'uiUx',
    isChecked: false
});

export const stepTwoThirdItem = atom<any>({
    label: 'Software development',
    id: 'softDev',
    isChecked: false
});

export const stepTwoFourthItem = atom<any>({
    label: 'Cloud / DevOps',
    id: 'cloudDev',
    isChecked: false
});

export const stepTwoFifthItem = atom<any>({
    label: 'Data Science & Engineering / Machine Learning',
    id: 'dseML',
    isChecked: false
});

export const stepTwoSixthItem = atom<any>({
    label: 'Digital transformation / Process optimization',
    id: 'dtPo',
    isChecked: false,
});

// step three
export const stepThreeFirstItem = atom<any>({
  label: "ios",
  id: "ios",
  isChecked: false,
});
export const stepThreeSecondItem = atom<any>({
  label: "Android",
  id: "android",
  isChecked: false,
});
export const stepThreeThirdItem = atom<any>({
  label: "Kotlin",
  id: "kotlin",
  isChecked: false,
});
export const stepThreeFourthItem = atom<any>({
  label: "React Native",
  id: "reactNative",
  isChecked: false,
});
export const stepThreeFiveItem = atom<any>({
  label: "Flutter",
  id: "flutter",
  isChecked: false,
});
export const stepThreeSixItem = atom<any>({
  label: "React",
  id: "react",
  isChecked: false,
});
export const stepThreeSevenItem = atom<any>({
  label: "Angular",
  id: "angular",
  isChecked: false,
});
export const stepThreeEightItem = atom<any>({
  label: "Vue",
  id: "vue",
  isChecked: false,
});
export const stepThreeNineItem = atom<any>({
  label: "Ruby",
  id: "ruby",
  isChecked: false,
});
export const stepThreeTenItem = atom<any>({
  label: "Node",
  id: "node",
  isChecked: false,
});
export const stepThreeElevenItem = atom<any>({
  label: "Java",
  id: "java",
  isChecked: false,
});
export const stepThreeTwelveItem = atom<any>({
  label: "PHP",
  id: "php",
  isChecked: false,
});
export const stepThreeThirtyItem = atom<any>({
  label: "Machine Learning",
  id: "machineLearning",
  isChecked: false,
});
export const stepThreeFortyItem = atom<any>({
  label: "Python",
  id: "python",
  isChecked: false,
});
export const stepThreeFiftyItem = atom<any>({
  label: "Salesforce Development",
  id: "salesforceDevelopment",
  isChecked: false,
});
export const stepThreeSixtyItem = atom<any>({
  label: "Quality Assurance",
  id: "qualityAssurance",
  isChecked: false,
});
export const stepThreeSeventyItem = atom<any>({
  label: "Devops",
  id: "devops",
  isChecked: false,
});
export const stepThreeEightyItem = atom<any>({
  label: "Other",
  id: "other",
  isChecked: false,
  others: "",
});

// Step four
export const stepFourAboutProject = atom<any>(
  {
    label: "About Project",
    id: "aboutProject",
    value: "",
  }
);
export const stepFourTwoItem = atom<any>(
  {
    label: "Project budget",
    id: "projectBudget",
    value: "",
  }
);

// step five 
export const stepFiveFirstName= atom<any>({
  label:"FirstName",
  id:"firstName",
  firstName:""
})
export const stepFiveLastName= atom<any>({
  label:"LastName",
  id:"LastName",
  lastName:""
})
export const stepFiveEmail= atom<any>({
  label:"Email",
  id:"email",
  email:""
})
export const stepFivePhone= atom<any>({
  label:"Phone",
  id:"phone",
  phone:""
})
export const stepFiveCompanyName= atom<any>({
  label:"Company Name",
  id:"company",
  companyName:""
})
export const stepFiveJobRole= atom<any>({
  label:"Job Role",
  id:"job",
  jobRole:""
})
export const stepFiveNDA= atom<any>({
  label:"NDA",
  id:"nda",
  isChecked:false,
  newNda:""
})
export const stepFiveCheck=atom<any>({
  label:"Check",
  id:"check",
  isChecked: false
})
