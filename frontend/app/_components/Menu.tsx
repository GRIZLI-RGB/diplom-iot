"use client";

import clsx from "clsx";
import { useAtomValue } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { MdDevicesOther } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

import { _userAuth_ } from "../_utils/store";

export default function Menu() {
	const pathname = usePathname();
	const router = useRouter();

	const userAuth = useAtomValue(_userAuth_);

	return (
		<nav className="fixed top-0 bottom-0 left-[2%] flex items-center">
			<div className="shadow-lg bg-white border border-black/50 rounded-lg overflow-hidden">
				{[
					{ link: "/", text: "Главная", icon: <IoHomeOutline size={28} color="#000" /> },
					{ link: "/profile", text: "Профиль", icon: <FiUser size={28} color="#000" /> },
					{ link: "/devices", text: "Устройства", icon: <MdDevicesOther size={28} color="#000" /> },
					{ link: "/statistics", text: "Статистика", icon: <VscGraph size={28} color="#000" /> },
				].map(({ link, text, icon }, index) => (
					<button
						key={link}
						onClick={() => {
							if (userAuth) {
								router.push(link);
							}
						}}
						className={clsx(
							`px-3 py-4 flex-col gap-0.5 font-medium text-center flex-middle w-full`,
							index !== 0 && "border-t border-black/50",
							pathname !== link && userAuth && "hover:bg-black/5 cursor-pointer",
							pathname === link && "bg-black text-white ",
							pathname === link &&
								pathname !== "/profile" &&
								"[&_svg]:[stroke:white] [&_svg]:[fill:white]",
							pathname === link && pathname === "/profile" && "[&_svg]:[stroke:white]",
							!userAuth && link !== "/" && "opacity-40",
							(!userAuth || (userAuth && pathname === link)) && "cursor-default",
						)}>
						{icon}
						{text}
					</button>
				))}
			</div>
		</nav>
	);
}
