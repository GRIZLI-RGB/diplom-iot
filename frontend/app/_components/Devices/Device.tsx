"use client";

import { DeleteIcon } from "@chakra-ui/icons";
import { Text, Box, Flex, IconButton, Switch, Tooltip, Button, Input, Grid } from "@chakra-ui/react";
import clsx from "clsx";
import { BiBulb, BiCamera, BiSolidVideoRecording, BiTargetLock } from "react-icons/bi";
import { useState } from "react";
import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
	Modal,
	ModalOverlay,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalFooter,
} from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";
import { FaEye, FaPowerOff } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { RiEdit2Fill } from "react-icons/ri";
import ScriptItem from "../ScriptItem";

export default function Device({ device, onEditClick }: { device: Device; onEditClick: () => void }) {
	const [brightness, setBrightness] = useState(100);
	const [showTooltip, setShowTooltip] = useState(false);

	const [trackingEnabled, setTrackingEnabled] = useState(false);
	const [trackingEnabled2, setTrackingEnabled2] = useState(false);

	const [scriptModalWindow, setScriptModalWindow] = useState(false);

	const toggleTracking = () => {
		setTrackingEnabled(prev => !prev);
	};

	const toggleTracking2 = () => {
		setTrackingEnabled2(prev => !prev);
	};

	const onSettingsClick = () => {
		setScriptModalWindow(true);
	};

	return (
		<>
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
					<Switch colorScheme="green" size="md" />
				</Flex>
				{device.type === "light" && (
					<Box textAlign="center" py={3}>
						<Slider
							aria-label="slider-ex-4"
							defaultValue={100}
							step={1}
							onChange={v => setBrightness(v)}
							onMouseEnter={() => setShowTooltip(true)}
							onMouseLeave={() => setShowTooltip(false)}>
							<SliderMark value={25} mt={2} ml="-2.5" fontSize="sm" color="tomato" fontWeight={700}>
								25%
							</SliderMark>
							<SliderMark value={50} mt={2} ml="-2.5" fontSize="sm" color="tomato" fontWeight={700}>
								50%
							</SliderMark>
							<SliderMark value={75} mt={2} ml="-2.5" fontSize="sm" color="tomato" fontWeight={700}>
								75%
							</SliderMark>
							<SliderTrack bg="red.100">
								<SliderFilledTrack bg="tomato" />
							</SliderTrack>
							<Tooltip
								hasArrow
								bg="tomato"
								color="white"
								placement="top"
								isOpen={showTooltip}
								label={`${brightness}%`}>
								<SliderThumb boxSize={6}>
									<Box color="tomato" as={MdLightMode} />
								</SliderThumb>
							</Tooltip>
						</Slider>
					</Box>
				)}
				{device.type === "sensor" && (
					<Flex pt={2} pl={2} align="center" gap={2.5}>
						<Flex align="center" gap={2} fontWeight={500} pb={0.5}>
							<Box pt={"3px"}>
								<FaEye />
							</Box>
							Режим слежки
						</Flex>
						<Switch colorScheme="green" isChecked={trackingEnabled} onChange={toggleTracking}></Switch>
					</Flex>
				)}
				{device.type === "camera" && (
					<Flex pt={2} pl={2} align="center" gap={2.5}>
						<Flex align="center" gap={2} fontWeight={500} pb={0.5}>
							<Box pt={"3px"}>
								<BiSolidVideoRecording />
							</Box>
							Режим записи
						</Flex>
						<Switch colorScheme="green" isChecked={trackingEnabled2} onChange={toggleTracking2}></Switch>
					</Flex>
				)}
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
						<IconButton size="sm" aria-label="" icon={<RiEdit2Fill size="17" />} onClick={onEditClick} />
						<IconButton
							size="sm"
							aria-label=""
							icon={<HiDocumentText size={18} />}
							onClick={onSettingsClick}
						/>
						<IconButton size="sm" aria-label="" icon={<DeleteIcon />} />
					</Flex>
				</Flex>
			</Box>
			<Modal isOpen={scriptModalWindow} onClose={() => setScriptModalWindow(false)} size="lg">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Выбор сценария</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Grid gap={2} className="grid-cols-3">
							<ScriptItem label="Управление питанием" icon={<FaPowerOff size={20} opacity={0.9}/>} />
							<ScriptItem label="Управление питанием" icon={<FaPowerOff size={20} opacity={0.9}/>} />
							<ScriptItem label="Управление питанием" icon={<FaPowerOff size={20} opacity={0.9}/>} />
							<ScriptItem label="Управление питанием" icon={<FaPowerOff size={20} opacity={0.9}/>} />
							<ScriptItem label="Управление питанием" icon={<FaPowerOff size={20} opacity={0.9}/>} />
							<ScriptItem label="Управление питанием" icon={<FaPowerOff size={20} opacity={0.9}/>} />
						</Grid>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue">Сохранить</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
