"use client";

import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { HashLoader } from "react-spinners";

import Menu from "../_components/Menu";
import { _userAuth_ } from "../_utils/store";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
	const [userAuth, setUserAuth] = useAtom(_userAuth_);

	useEffect(() => {
		if (localStorage.getItem("userAuth") === null) {
			setUserAuth(false);
		}
	}, []);

	if (userAuth === "loading") {
		return (
			<div className="flex-middle h-full">
				<HashLoader color={"#000"} loading={true} size={90} />
			</div>
		);
	}

	return (
		<div className="h-full">
			<Menu />
			<main className="ml-[15%] mr-40 py-10 h-full flex-middle">{children}</main>
		</div>
	);
}
