"use client";

import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import Device from "./Device";
import DevicesFilters from "./DevicesFilters";

export default function Devices({ devices }: { devices?: Device[] }) {
	return (
		<>
			<Heading>Доступные устройства</Heading>
			<DevicesFilters />
			<Flex className="w-full">
				{devices ? (
					<Flex mt={5} direction={"column"} gap={2} className="w-full">
						{devices.map(device => (
							<Box key={device.id}>
								<Device device={device} />
							</Box>
						))}
					</Flex>
				) : (
					<Text opacity={0.5} p={5}>
						Нет доступных устройств
					</Text>
				)}
			</Flex>
		</>
	);
}
