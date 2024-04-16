import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";

import { _userAuth_ } from "./_utils/store";

import "./_styles/globals.css";

export const metadata: Metadata = {
	title: "IoT",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className="min-h-[100vh]">
				<ChakraProvider>
					<JotaiProvider>{children}</JotaiProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
