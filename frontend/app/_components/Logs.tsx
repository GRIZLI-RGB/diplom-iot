import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Logs() {
	return (
		<section>
			<Heading>Последния действия</Heading>
			<Flex>
				<Text opacity={0.5} p={5}>Нет активности</Text>
			</Flex>
		</section>
	);
}
