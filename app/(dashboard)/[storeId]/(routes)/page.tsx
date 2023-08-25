import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findUnique({
    where: {
      id: params.storeId,
    },
  });
  return <div>active store: {store?.name}</div>;
};

export default DashboardPage;
