import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function PackagesBanner() {
  return (
    <Link
      href="/services/website-packages"
      className="group mt-4 flex flex-col gap-3 rounded-xl border border-gray-200/50 bg-white/70 p-6 backdrop-blur-sm transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h3 className="font-bold gradient-text mb-1">Fixed-price website packages</h3>
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          A complete site for £1,000, or pay per page from £100. Scope and price
          agreed up front, live in 7 to 14 working days.
        </p>
      </div>
      <span className="flex items-center whitespace-nowrap text-sm text-blue-600 group-hover:text-purple-600 transition-colors">
        <span className="underline group-hover:no-underline">See packages</span>
        <MdOutlineDoubleArrow className="ml-2" />
      </span>
    </Link>
  );
}
