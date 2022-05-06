import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}
const ActiveLink: FC<Props> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div>
      <div
        style={{ height: "1px" }}
        className={`${
          router.asPath === href ? "  " : ""
        } w-32 -mr-2  absolute bottom-3 lg:block md:block hidden`}
      ></div>
      <Link href={href}>
        <a
          onClick={handleClick}
          className={`${
            router.asPath === href ? "text-red-50" : ""
          }  flex justify-between items-center`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

export default ActiveLink;
