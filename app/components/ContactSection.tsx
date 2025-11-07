"use client";

export default function ContactSection() {
  return (
    <section className="mt-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        I'm currently open to new opportunities. Feel free to send me an
        email!
      </p>
      <a
        href="mailto:josh@joshlomond.dev"
        className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Say Hello
      </a>
    </section>
  );
}
