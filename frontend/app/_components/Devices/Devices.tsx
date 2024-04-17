"use client";

import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import Device from "./Device";
import DevicesFilters from "./DevicesFilters";
import { usePathname } from "next/navigation";

export default function Devices({ devices, onEditClickDevice }: { devices?: Device[]; onEditClickDevice: () => void }) {
	const pathname = usePathname();

	return (
		<Flex direction={"column"}>
			{pathname === "/" && <Heading>Подключённые устройства</Heading>}
			{!(pathname === "/") && <DevicesFilters />}
			<Flex className="w-full">
				{devices ? (
					<Flex mt={5} direction={"column"} gap={2} className="w-full">
						{devices.map(device => (
							<Box key={device.id}>
								<Device onEditClick={onEditClickDevice} device={device} />
							</Box>
						))}
					</Flex>
				) : (
					<Text opacity={0.5} p={5}>
						Нет доступных устройств
					</Text>
				)}
			</Flex>
		</Flex>
	);
}
