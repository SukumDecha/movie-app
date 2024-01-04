export const LoadingItem = () => {
  return (
    <div className="w-2/3 md:w-1/3 h-[20rem] flex-shrink-0 hover">
      <div className="flex justify-center items-center h-3/4 rounded-t-xl bg-green-50">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"
          role="status"
        ></div>
      </div>

      <div className="h-1/4 bg-white p-3 rounded-b-xl">
        <div className="text-xl font-semibold mb-2">Loading movies...</div>
        <br />
      </div>
    </div>
  );
};
