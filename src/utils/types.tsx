export interface ICVLayout {
  user_id: number;
  sub: string;
  first_name: string;
  surname: string;
  dob: string;
  email: string;
  mobile: string;
  address: string;
  education: [
    {
      ed_id: number;
      institution_name: string;
      start_date: string;
      end_date: string;
      qualification_level: string;
      grade: string;
      subject: string;
    }
  ];
  work: [
    {
      work_id: number;
      company_name: string;
      role: string;
      responsibilities: string;
      start_date: string;
      end_date: string;
    }
  ];
  interest: [
    {
      interest_id: number;
      interest: string;
    }
  ];
  skill: [
    {
      skill_id: number;
      skill: string;
    }
  ];
  bio: [
    {
      bio_id: number;
      bio: string;
    }
  ];
  software: [
    {
      software_id: number;
      software: string;
    }
  ];
}

export interface IUserData {
  userData: ICVLayout;
}

export interface IPass {
  password: string;
  setPassword(pasword: string): void;
}
