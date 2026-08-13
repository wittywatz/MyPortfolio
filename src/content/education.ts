export type Degree = {
  qualification: string;
  institution: string;
  dates: string;
};

export const degrees: Degree[] = [
  {
    qualification: 'M.Eng, Electrical and Computer Engineering (Distinction)',
    institution: 'University of Waterloo',
    dates: 'Sept 2019 – Dec 2020',
  },
  {
    qualification: 'B.Eng, Electrical and Electronics Engineering (First Class)',
    institution: 'Federal University Oye',
    dates: 'Feb 2013 – Jan 2018',
  },
];

export const awards: string[] = [
  'Best Overall Graduating Student, 2016/2017',
  'Best Student, Faculty of Engineering, 2016/2017',
];
