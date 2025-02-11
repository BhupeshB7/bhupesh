 import dynamic from "next/dynamic";

const SkeletonLoader = () => (
  <div className="p-4 border rounded-lg shadow animate-pulse">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
  </div>
);

const HomePage = dynamic(() => import("@/components/HomePage"), {
  loading: () => <SkeletonLoader />,
  ssr: true,
});

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
