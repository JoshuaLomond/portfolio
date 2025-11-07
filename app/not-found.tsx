import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-9xl font-bold text-[var(--primary-light)] dark:text-[var(--primary-dark)]">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-[var(--primary-light)] text-white rounded hover:bg-blue-600 dark:bg-[var(--primary-dark)] dark:text-black dark:hover:bg-blue-400">
        Go back home
      </Link>
    </div>
  );
}
