export const FullLoading = () => (
  <div className="h-full flex items-center justify-center" aria-busy="true" />
);

export const InlineLoading = () => {
  return <article className="h-auto" aria-busy="true"></article>;
};
