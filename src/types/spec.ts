export type Spec = {
  type: string;
  title: string;
  name: string;
  subType?: string;
  placeholder?: string;
  dependsOn?: string;
  default?: string;
  options?: {
    label: string;
    value: string;
    description?: string;
    dependsOnValue?: string;
  }[];
};
