export type Journey = {
  date: string;
  job: string;
  company: string;
  description: string[];
  technologies: string[];
};

export type ArsenalMetaData = {
  name: string;
  iconClassName: string | undefined;
  recentlyUsed: boolean;
  toSay?: string[];
};
