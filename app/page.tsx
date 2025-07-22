import AboutSkeleton from "@/components/skeleton/AboutSkeleton";
import SidebarSkeleton from "@/components/skeleton/SidebarSkeleton";
import dynamic from "next/dynamic";

const SkeletonLoader = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center px-4 lg:px-8 xl:px-12 gap-6">
        <SidebarSkeleton />
        <AboutSkeleton />
      </div>
    </main>
  );
};

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
