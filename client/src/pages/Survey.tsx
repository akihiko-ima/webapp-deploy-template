import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Survey() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = { name, age, gender, email, color };
    navigate("/result", { state: data });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          アンケート
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              名前
            </label>
            <Input
              placeholder="名前を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              年齢
            </label>
            <Input
              placeholder="年齢を入力"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              性別
            </label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="男性">男性</SelectItem>
                <SelectItem value="女性">女性</SelectItem>
                <SelectItem value="その他">その他</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <Input
              placeholder="メールアドレスを入力"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              type="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              好きな色
            </label>
            <Input
              placeholder="例: 青"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
          >
            送信
          </Button>
        </div>
      </div>
    </div>
  );
}
