import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">アンケートへようこそ</h1>
      <Button onClick={() => navigate("/survey")}>開始</Button>
    </div>
  );
}
