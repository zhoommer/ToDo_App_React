interface Labels {
  id: number;
  label: string;
  color: string;
  toDoId: number;
}

interface Data {
  id: number;
  title: string;
  description: string;
  schedule?: string;
  createdAt: string;
  updatedAt: string;
  labels?: [Labels];
}

export interface FetchToDoInterface {
  message: string;
  data: [Data];
  labels?: [];

  success: boolean;
}
