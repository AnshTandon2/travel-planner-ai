type parameters = {
  starting_location: string;
  ending_location: string;
  duration: number;
  budget: number;
};

type outputs = {
  title: string;
  subtitle: string;
  locations: string[];
  descriptions: string[];
  times: number[];
  costs: number[];
};

export type { parameters, outputs };