const Dashboard = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center">
        <p className="text-6xl font-bold">Welc</p>
        <div className="size-9 border-8 border-dashed rounded-full animate-spin mt-3 border-cyan-400"></div>
        <p className="text-6xl font-bold mr-2">me</p>
        <p className="text-6xl font-bold">To</p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        <p className="text-3xl font-medium capitalize"> Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
