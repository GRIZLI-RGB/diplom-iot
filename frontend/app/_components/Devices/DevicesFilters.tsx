"use client";

import { Box, Flex, Select, Text } from "@chakra-ui/react";

export default function DevicesFilters() {
	const handleGroup = by => {};

	return (
		<Flex mt={10} gap={5}>
			<Flex align="center" justify="space-between" gap={2}>
				<Text whiteSpace={"nowrap"} fontSize="sm" fontWeight={500}>
					Группировать по
				</Text>
				<Select onChange={e => handleGroup(e.target.value)} size="sm" defaultValue={"is_connected"}>
					<option value="type">Все</option>
					<option value="is_connected">Группа</option>
					<option value="is_connected">Активность</option>
					<option value="type">Тип</option>
				</Select>
			</Flex>
			<Flex align="center" justify="space-between" gap={2}>
				<Text whiteSpace={"nowrap"} fontSize="sm" fontWeight={500}>
					Сортировать по
				</Text>
				<Select onChange={e => handleGroup(e.target.value)} size="sm" defaultValue={"is_connected"}>
					<option value="type">Все</option>
					<option value="is_connected">Имя устройства (А {'->'} Я)</option>
					<option value="is_connected">Имя устройства (Я {'->'} А)</option>
					<option value="is_connected">Название группы (А {'->'} Я)</option>
					<option value="is_connected">Название группы (Я {'->'} А)</option>
				</Select>
			</Flex>
		</Flex>
	);
}
