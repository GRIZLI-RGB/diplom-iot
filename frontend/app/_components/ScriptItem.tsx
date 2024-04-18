"use client";

import { Flex, Text } from "@chakra-ui/react";

interface ScriptItemProps {
	label: string;
	icon: React.ReactNode;
}

export default function ScriptItem({ label, icon }: ScriptItemProps) {
	return (
		<Flex direction="column" rounded={"lg"} p={5} textAlign={"center"} bg={"rgba(0,0,0,5%)"} className="hover:outline hover:outline-1 hover:outline-black/50 cursor-pointer">
			<div className="mx-auto">{icon}</div>
			<Text mt={3} fontWeight={500} opacity={0.9} lineHeight={'120%'}>{label}</Text>
		</Flex>
	);
}
