"use client";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Text, Box, Flex, IconButton, Switch} from "@chakra-ui/react";
import clsx from "clsx";
import { BiBulb, BiCamera, BiTargetLock } from "react-icons/bi";
import {useState} from "react";
import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
} from '@chakra-ui/react'

export default function Device({ device, onEditClick }: { device: Device; onEditClick: () => void }) {
	const [brightness, setBrightness] = useState(50);

	const handleBrightnessChange = (value: number) => {
		setBrightness(value);
	};

	return (
		<Box
			borderWidth="1px"
			borderRadius="lg"
			p={4}
			className={clsx(!device.is_connected && "opacity-60 pointer-events-none")}>
			<Flex align="center" justify={"space-between"}>
				<Flex align="center" mb={2} gap={2}>
					{
						{
							camera: <BiCamera size={32} />,
							light: <BiBulb size={32} />,
							sensor: <BiTargetLock size={32} />,
						}[device.type]
					}
					<Text fontWeight={600}>{device.name}</Text>
				</Flex>
				<Switch colorScheme="teal" size="md" />
			</Flex>
			{device.type === "light" && (<Box textAlign="center" p={4}>
				<Slider aria-label='slider-ex-4' defaultValue={30}>
					<SliderTrack bg='red.100'>
						<SliderFilledTrack bg='tomato' />
					</SliderTrack>
					<SliderThumb boxSize={6}>
						<Box color='tomato' as={MdGraphicEq} />
					</SliderThumb>
				</Slider>
			</Box>)}
			<Flex align="flex-end" mt={4} justify="space-between" gap={10}>
				<Flex direction={"column"}>
					<Text fontSize="13px" fontWeight={500} color={device.is_connected ? "green" : "red"}>
						{device.is_connected ? "Подключено" : "Не подключено"}
					</Text>
					<Text fontSize="13px" opacity={0.6}>
						Добавлено: {new Date(device.added_at).toLocaleDateString()}
					</Text>
				</Flex>
				<Flex align="center" justify="space-between" gap={2}>
					<IconButton size="sm" aria-label="" icon={<DeleteIcon />} />
					<IconButton size="sm" aria-label="" icon={<EditIcon />} onClick={onEditClick} />
				</Flex>
			</Flex>
		</Box>
	);
}
