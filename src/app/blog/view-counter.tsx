export default function ViewCounter({
  slug,
  allViews,
}: {
  slug: string;
  allViews: {
    slug: string;
    count: number;
  }[];
  trackView?: boolean;
}) {
  const viewForSlug = allViews && allViews.find((view) => view.slug === slug);
  const number = new Number(viewForSlug?.count || 0);

  return (
    <p className='text-neutral-600 dark:text-neutral-400'>
      {`${number.toLocaleString()} views`}
    </p>
  );
}
