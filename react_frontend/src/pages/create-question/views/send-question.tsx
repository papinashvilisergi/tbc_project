import { httpClient } from '@/components/api';
type FormFields = {
  title: string;
  description: string;
  tags: string[];
};

export const sendQuestion = async (data: FormFields) => {
  const response = await httpClient.post('/questions', data);
  return response.data;
};
