import Link from "next/link";

interface SectionsSelectorProps {
  children: React.ReactNode;
  page: string;
}

const SectionSelector = ({ children, page }: SectionsSelectorProps) => {
  return (
    <>
      <Link
        className="hover:bg-gray-200z flex cursor-pointer items-center gap-2 rounded px-4 py-3 font-semibold transition-colors duration-200"
        href={page}
      >
        {children}
      </Link>
    </>
  );
};

export default SectionSelector;
