import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { surveysApi } from "@/api/surveys";

type FormValues = {
  name: string;
  age: number;
  gender: string;
  email: string;
  color: string;
};

export default function Survey() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await surveysApi.create(data);
      navigate("/result", { state: data });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          // FastAPIの detail をそのまま表示
          setError("email", {
            type: "server",
            message:
              err.response.data.detail ||
              "このメールアドレスは既に登録されています",
          });
          return;
        }
      }
      alert("送信に失敗しました");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          アンケート
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label>名前</label>
            <Input {...register("name", { required: "必須です" })} />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label>年齢</label>
            <Input
              type="number"
              {...register("age", {
                required: "必須です",
                valueAsNumber: true,
              })}
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>

          <div>
            <label>性別</label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "選択してください" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="男性">男性</SelectItem>
                    <SelectItem value="女性">女性</SelectItem>
                    <SelectItem value="その他">その他</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label>メールアドレス</label>
            <Input
              type="email"
              {...register("email", {
                required: "必須です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "メール形式が不正です",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>好きな色</label>
            <Input {...register("color", { required: "必須です" })} />
            {errors.color && (
              <p className="text-red-500">{errors.color.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            送信
          </Button>
        </form>
      </div>
    </div>
  );
}
