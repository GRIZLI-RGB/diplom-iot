"use client";

import StatisticItem from "@/app/_components/StatisticItem";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

export default function StatisticsPage() {
	return (
		<Flex direction={"column"} gap={12}>
			<Flex gap={4}>
				<StatisticItem label="Подключенные устройства" value={32} />
				<StatisticItem label="Запомненные устройства" value={32} />
				<StatisticItem label="Настроено сценариев" value={32} />
			</Flex>
			<div className="w-[150%] -ml-[25%] h-px bg-black/10" />
		</Flex>
	);
}
