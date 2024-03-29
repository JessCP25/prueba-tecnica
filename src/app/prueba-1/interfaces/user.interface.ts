// Generated by https://quicktype.io

export interface User {
  id?:               number;
  name:             string;
  lastName:         string;
  age:              number;
  city:             string;
  birthDate?:        string;
  registrationDate?: string;
  spouseBirthDate?:  string;
  carees?: string;
  degree?:           string;
  workplace?:        string;
  salary?:           number;
  experienceYears?:  number;
}

export interface Degree {
  id:number;
  name: string;
}

export interface WorkPlace {
  id: number;
  workPlace: string;
}
