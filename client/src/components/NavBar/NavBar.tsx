import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-slate-800 text-slate-100 px-4 py-6 shadow flex justify-between items-center h-14">
      <span className="font-bold text-xl flex items-center gap-2">
        <span className="material-icons text-yellow-400">poll</span>
        IMA-アンケート
      </span>
      <div className="space-x-6 text-lg flex items-center">
        <Link
          to="/"
          className="flex items-center gap-1 rounded transition-colors duration-300 px-2 py-1 hover:bg-blue-900"
        >
          <span className="material-icons text-blue-300 transition-colors duration-300">
            home
          </span>
          ホーム
        </Link>
        <Link
          to="/survey"
          className="flex items-center gap-1 rounded transition-colors duration-300 px-2 py-1 hover:bg-purple-900"
        >
          <span className="material-icons text-purple-300 transition-colors duration-300">
            assignment
          </span>
          アンケート
        </Link>
        <Link
          to="/result"
          className="flex items-center gap-1 rounded transition-colors duration-300 px-2 py-1 hover:bg-green-900"
        >
          <span className="material-icons text-green-300 transition-colors duration-300">
            check_circle
          </span>
          結果
        </Link>
      </div>
    </nav>
  );
}
