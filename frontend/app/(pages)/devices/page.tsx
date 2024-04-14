import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Devices() {
	return <section>
        <Heading>Доступные устройства</Heading>
        <Flex>
            <Text opacity={0.5} p={5}>Нет доступных устройств</Text>
        </Flex>
    </section>;
}
