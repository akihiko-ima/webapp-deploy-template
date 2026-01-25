import { http } from "@/lib/http/client";

// ===== 型定義（FastAPIのSchemaと対応） =====
export type Survey = {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  color: string;
  created_at: string;
  updated_at: string;
};

export type SurveyCreate = {
  name: string;
  age: number;
  gender: string;
  email: string;
  color: string;
};

// ===== API =====
export const surveysApi = {
  // POST /surveys
  create: async (payload: SurveyCreate): Promise<{ message: string }> => {
    const res = await http.post<{ message: string }>("/surveys", payload);
    return res.data;
  },

  // GET /surveys
  getAll: async (): Promise<Survey[]> => {
    const res = await http.get<Survey[]>("/surveys");
    return res.data;
  },

  // GET /surveys/{id}
  get: async (id: number): Promise<Survey> => {
    const res = await http.get<Survey>(`/surveys/${id}`);
    return res.data;
  },
};
