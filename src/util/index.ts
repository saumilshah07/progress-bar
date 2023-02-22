export const calculateProgress = (currentProgress: number, operator: string, newProgress: number): number => {
  let progress: number;
  switch (operator) {
    case '-':
      progress = currentProgress - newProgress;
      break;
    case '+':
      progress = currentProgress + newProgress;
      break;
    default:
      progress = currentProgress;
  }
  if (progress < 0) return 0;

  return progress;
};
