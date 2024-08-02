export default async function sitemap() {
  const routes = ['', '/blog', '/guestbook', '/uses', '/work'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
