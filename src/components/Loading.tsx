export const FullLoading = () => (
  <div className="h-[100vh] w-full ">
    <div className="h-full flex items-center justify-center" aria-busy="true" />
  </div>
);

export const InlineLoading = () => {
  return <article className="h-auto" aria-busy="true"></article>;
};
