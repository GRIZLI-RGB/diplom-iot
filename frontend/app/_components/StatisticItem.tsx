import { Flex, Text } from "@chakra-ui/react";

interface StatisticItemProps {
	label: string;
	value: string | number;
}

export default function StatisticItem({ label, value }: StatisticItemProps) {
	return (
		<Flex
			pb={6}
			pt={3}
			w={160}
			align={"center"}
			color="white"
			direction={"column"}
			gap={3.5}
			rounded={18}
			textAlign={"center"}
			bg={"black"}>
			<Text fontWeight={700} fontSize={"32px"}>
				{value}
			</Text>
			<div className="h-px bg-white w-full" />
			<Text lineHeight={"110%"} fontSize={"16px"} fontWeight={500}>
				{label}
			</Text>
		</Flex>
	);
}
