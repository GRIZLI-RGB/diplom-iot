import { Flex, Heading, Text, Box } from "@chakra-ui/react";

const DATA = [
	{ timestamp: "12.10.2024, (15:32)", action: "Включено устройство 1" },
	{ timestamp: "12.10.2024, (15:32)", action: "Изменен температурный режим на устройстве 2" },
	{ timestamp: "12.10.2024, (15:32)", action: "Выключено устройство 3" },
	{ timestamp: "12.10.2024, (15:32)", action: "Изменен яркость света на устройстве 1" },
	{ timestamp: "12.10.2024, (15:32)", action: "Включено устройство 3" },
];

export default function Logs() {
	return (
		<section>
			<Heading>Последнии действия</Heading>
			<Flex>
				{DATA ? (
					<Box mt={10}>
						{DATA.map((log, index) => (
							<Box key={index} py="2" px={3} border="1px" borderColor="gray.200" borderRadius="md" mb="2">
								<Text fontSize="sm">
									<strong>{log.timestamp}:</strong> {log.action}
								</Text>
							</Box>
						))}
					</Box>
				) : (
					<Text opacity={0.5} p={5}>
						Нет активности
					</Text>
				)}
			</Flex>
		</section>
	);
}
