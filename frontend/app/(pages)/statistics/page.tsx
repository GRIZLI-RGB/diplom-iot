"use client";

import { Box, Heading, Flex, Text, Select } from "@chakra-ui/react";
import { useState } from "react";

import StatisticItem from "@/app/_components/StatisticItem";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Logs from "@/app/_components/Logs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function StatisticsPage() {
	const [selectedDevice, setSelectedDevice] = useState("");

	const chartData = {
		labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июн", "Июл", "Авг"],
		datasets: [
			{
				label: selectedDevice ? `Активность ${selectedDevice}` : "Общая активность",
				data: [65, 59, 80, 81, 56, 55],
				fill: false,
				lineTension: 0.0,
				borderColor: "rgba(75,192,192,1)",
			},
		],
	};

	const handleDeviceChange = (event: any) => {
		setSelectedDevice(event.target.value);
	};

	return (
		<Flex direction={"column"} gap={12} align={"center"}>
			<Flex gap={4}>
				<StatisticItem label="Подключенные устройства" value={32} />
				<StatisticItem label="Запомненные устройства" value={32} />
				<StatisticItem label="Настроено сценариев" value={32} />
			</Flex>
			<div className="w-[150%] -ml-[10%] h-px bg-black/10" />
			<Flex gap={10}>
				<Flex direction={"column"}>
					<Select onChange={handleDeviceChange} size="sm" variant={"filled"}>
						<option value="Все устройства">Все устройства</option>
						<option value="Устройство A">Устройство A</option>
						<option value="Устройство B">Устройство B</option>
					</Select>

					<Box mt="5" width={"490px"} height={"300px"}>
						<Line
							data={chartData}
							options={{
								plugins: {
									title: {
										display: true,
										text: "Время работы",
										padding: {
											top: 5,
											bottom: 10,
										},
									},
								},
							}}
						/>
					</Box>
				</Flex>

				<Logs />
			</Flex>
		</Flex>
	);
}
