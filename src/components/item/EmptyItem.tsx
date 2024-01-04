interface EmptyItemProps {
  reason?: string;
}
export const EmptyItem = ({ reason }: EmptyItemProps) => {
  return (
    <div className="w-2/3 md:w-1/3 h-[20rem] flex-shrink-0 hover">
      <div className="h-3/4 rounded-t-xl bg-green-50">
        <img
          src="/assets/utils/404.png"
          className="w-full h-full object- rounded-t-xl"
          alt="404"
        />
      </div>

      <div className="h-1/4 flex p-3 rounded-b-xl bg-red-400">
        <div className="text-xl text-white font-semibold mb-2 mr-6">
          {reason ? reason : "Movie not found "}
        </div>
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-emerald-100"
          role="status"
        ></div>
        <br />
      </div>
    </div>
  );
};
