export interface IEducation {
  userID: number;
}

export interface IWork {
  userID: number;
}

export interface IInterest {
  userID: number;
}

export interface ISkill {
  userID: number;
}
export interface IUserID {
  userID: number;
}

export interface ICVLayout {
  user_id: number;
  first_name: string;
  surname: string;
  dob: string;
  email: string;
  mobile: string;
  address: string;
  eduction: [
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
}

export interface IEd {
  userData: ICVLayout;
  userID: number;
}
