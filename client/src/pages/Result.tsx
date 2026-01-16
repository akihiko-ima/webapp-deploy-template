import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          アンケート結果
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="material-icons text-purple-500 mr-2">person</span>
            <span className="font-semibold text-gray-700">名前：</span>
            <span className="ml-2">{data.name}</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-blue-400 mr-2">cake</span>
            <span className="font-semibold text-gray-700">年齢：</span>
            <span className="ml-2">{data.age}</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-pink-400 mr-2">wc</span>
            <span className="font-semibold text-gray-700">性別：</span>
            <span className="ml-2">{data.gender}</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-green-400 mr-2">email</span>
            <span className="font-semibold text-gray-700">
              メールアドレス：
            </span>
            <span className="ml-2">{data.email}</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-yellow-400 mr-2">palette</span>
            <span className="font-semibold text-gray-700">好きな色：</span>
            <span className="ml-2">{data.color}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
