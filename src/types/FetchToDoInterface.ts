interface Data {
  id: number;
  title: string;
  description: string;
  schedule?: string;
  createdAt: string;
  updatedAt: string;
  labels?: [];
}

export interface FetchToDoInterface {
  message: string;
  data: [Data];
  labels?: [];

  success: boolean;
}
