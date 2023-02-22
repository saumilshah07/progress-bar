export type ProgressBarComponentProps = {
  progress: number;
  label: string;
  color?: string;
  max?: number;
};

export type NavStylesProps = {
  progress: number;
  color: string;
};

export type ProgressBars = {
  name: string;
  progress: number;
};

export type WrapperType = {
  data: ProgressBars[];
};
