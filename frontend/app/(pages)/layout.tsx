import type { Metadata } from "next";

import "./_styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

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
			<body>
				<ChakraProvider>{children}</ChakraProvider>
			</body>
		</html>
	);
}
