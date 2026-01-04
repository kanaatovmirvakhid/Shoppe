export const roundToHalf = (num: number): number => {
  return Math.round(num * 2) / 2;
};

export const calculateRating = (reviews: { rating: number }[]): number => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((acc, rev) => acc + rev.rating, 0);
  return roundToHalf(total / reviews.length);
};
