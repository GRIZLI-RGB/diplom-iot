"use client";

import { useState } from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Input,
	Flex,
	Select,
	Textarea,
} from "@chakra-ui/react";

import Devices from "@/app/_components/Devices/Devices";
import { AddIcon, PlusSquareIcon } from "@chakra-ui/icons";

export default function DevicesPage() {
	const [addDeviceModalWindow, setAddDeviceModalWindow] = useState(false);
	const [editDeviceModalWindow, setEditDeviceModalWindow] = useState(false);

	return (
		<>
			<section>
				<Devices
					onEditClickDevice={() => setEditDeviceModalWindow(true)}
					devices={[
						{
							id: 1,
							type: "camera",
							name: "Sony Erickson V4",
							added_at: new Date(),
							is_connected: true,
						},
						{
							id: 2,
							type: "sensor",
							name: "Raspberry Pi",
							added_at: new Date(),
							is_connected: false,
						},
						{
							id: 3,
							type: "light",
							name: "Bathroom Light",
							added_at: new Date(),
							is_connected: true,
						},
					]}
				/>
				<Button
					mt={3}
					width={"100%"}
					onClick={() => setAddDeviceModalWindow(true)}
					leftIcon={<AddIcon height={3.5} />}
					colorScheme="blue"
					variant="outline">
					Добавить устройство
				</Button>
			</section>
			<Modal isOpen={addDeviceModalWindow} onClose={() => setAddDeviceModalWindow(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Добавление нового устройства</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex gap={2.5} direction={"column"}>
							<Input type="text" placeholder="Имя устройства" />
							<Textarea resize={"none"} placeholder="Описание устройства" />
							<Input type="text" placeholder="Адрес для подключения" />
							<Select placeholder="Укажите тип устройства">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
							<Select placeholder="Укажите группу">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
						</Flex>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue">Сохранить</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Modal isOpen={editDeviceModalWindow} onClose={() => setEditDeviceModalWindow(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Редактирование устройства</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex gap={2.5} direction={"column"}>
							<Input type="text" placeholder="Имя устройства" />
							<Textarea resize={"none"} placeholder="Описание устройства" />
							<Input type="text" placeholder="Адрес для подключения" />
							<Select placeholder="Укажите тип устройства">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
							<Select placeholder="Укажите группу">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
						</Flex>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue">Сохранить изменения</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
