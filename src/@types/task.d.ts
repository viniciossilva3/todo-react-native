export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TaskParams {
  id: string;
  title: string;
  isCompleted: boolean;
  onDone: () => void;
  onRemove: () => void;
}
