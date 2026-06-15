import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex justify-center items-center bg-[#F7F7F7] dark:bg-[#0A0A0A]">
      <div className="max-w-[600px] mx-auto text-center px-5">
        <p className="text-gray-800 dark:text-white text-base mb-12">
          The page you&apos;re looking for isn&apos;t available.
        </p>

        <Image
          width={500}
          height={300}
          src="/images/404.svg"
          className="mb-12 mx-auto block dark:hidden"
          alt="404"
        />
        <Image
          width={500}
          height={300}
          src="/images/404 white.svg"
          className="mb-12 mx-auto hidden dark:block"
          alt="404"
        />

        <Link
          href="/"
          className="inline-flex text-sm gap-2 items-center bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] rounded-full py-3 px-6 transition hover:bg-[#1A1A1A] dark:hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 21 21"
            fill="none"
            className="dark:fill-[#0A0A0A] fill-white"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.08301 10.7424C3.08272 10.9347 3.15588 11.127 3.30249 11.2737L8.29915 16.2739C8.59194 16.5669 9.06682 16.5671 9.35981 16.2743C9.65281 15.9815 9.65297 15.5066 9.36018 15.2136L5.64009 11.4909L17.1675 11.4909C17.5817 11.4909 17.9175 11.1551 17.9175 10.7409C17.9175 10.3267 17.5817 9.9909 17.1675 9.9909L5.64554 9.9909L9.36017 6.27391C9.65297 5.98092 9.65282 5.50605 9.35983 5.21325C9.06684 4.92045 8.59197 4.9206 8.29917 5.21358L3.34167 10.1742C3.18321 10.3117 3.08301 10.5146 3.08301 10.7409C3.08301 10.7414 3.08301 10.7419 3.08301 10.7424Z"
            />
          </svg>
          Go back
        </Link>
      </div>
    </section>
  );
}
