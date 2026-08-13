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

/**
 * Not currently rendered. Joining these into one line read as a run-on beside
 * the degrees, and they date to 2016/2017, well behind the rest of the page.
 * Kept here so restoring them is a one-line change rather than a git dig.
 */
export const awards: string[] = [
  'Best Overall Graduating Student, 2016/2017',
  'Best Student, Faculty of Engineering, 2016/2017',
];
