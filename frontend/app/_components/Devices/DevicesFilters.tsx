"use client";

import { Box, Flex, Select, Text } from "@chakra-ui/react";

export default function DevicesFilters() {
	const handleGroup = by => {};

	return (
		<Box mt={10}>
			<Flex align="center" justify="space-between" gap={2}>
				<Text whiteSpace={"nowrap"} fontSize="sm" fontWeight={500}>
					Группировать по
				</Text>
				<Select onChange={e => handleGroup(e.target.value)} size="sm" defaultValue={"is_connected"}>
					<option value="type">Тип</option>
					<option value="is_connected">Активность</option>
				</Select>
			</Flex>
		</Box>
	);
}
