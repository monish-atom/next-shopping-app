import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { checkNumber } from "@/lib/utils";

const Nav = () => {
	const links = [
		{
			id: 1,
			name: "Men",
			url: "/men",
		},
		{
			id: 2,
			name: "Women",
			url: "/women",
		},
		{
			id: 3,
			name: "Kids",
			url: "/kids",
		},
	];
	return (
		<nav className="fixed inset-x-0 top-0 z-50 h-20 w-full animate-nav-opacity border-b [animation-timeline:scroll(y)] [animation-range:0px_5%]">
			<header className="flex h-full items-center justify-between px-4 md:px-8">
				<div className="flex items-center gap-20">
					<Link
						href={"/"}
						className="font-bricolage-grotesque text-lg font-bold uppercase md:text-xl"
					>
						Next Hub
					</Link>
					<ul className="hidden gap-6 md:flex">
						{links.map((link) => (
							<li key={link.id}>
								<Link href={link.url}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex items-center gap-6 md:gap-8">
					<Button
						size={"icon"}
						variant={"ghost"}
						className="rounded-full hover:bg-stone-200"
					>
						<Search />
					</Button>
					<Button
						size={"icon"}
						variant={"ghost"}
						className="rounded-full hover:bg-stone-200"
					>
						<ShoppingBag />
					</Button>
					<Button
						size={"icon"}
						variant={"ghost"}
						className="flex items-center justify-center rounded-full hover:bg-stone-200 md:hidden"
					>
						<Menu />
					</Button>
				</div>
			</header>
		</nav>
	);
};

const ShoppingBag = () => {
	return (
		<div className="relative flex items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-6 w-6"
			>
				<title>Shopping Bag</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
				/>
			</svg>
			<span className="absolute -right-6 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-3 font-mono text-sm font-medium text-white">
				{checkNumber(0)}
			</span>
		</div>
	);
};

export default Nav;
