export const StarRating = ({ starPoint }: any) => {
  const MAX = 10;
  return (
    <div className="flex">
      {new Array(MAX).fill(0).map((_, i) => (
        <Star
          key={i}
          className={i + 1 <= starPoint ? "text-[#ffc107]" : "text-[#e4e5e9]"}
        />
      ))}
    </div>
  );
};

const Star = ({ className }: any) => {
  return <div className={className}>&#9733;</div>;
};
