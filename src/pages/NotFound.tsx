import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#0D0D0D] mb-4 font-heading">404</h1>
      <p className="text-xl text-[#6B6B6B] mb-8">Page not found</p>
      <Link
        to="/"
        className="px-8 py-4 bg-[#C45C3F] text-white font-semibold rounded-lg hover:bg-[#A84D32] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
