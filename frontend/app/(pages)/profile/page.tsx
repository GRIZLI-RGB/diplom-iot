"use client";

import { Avatar, Button, FormControl, FormLabel, Input, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function ProfilePage() {
	const [username, setUsername] = useState("GRIZLI");
	const [password, setPassword] = useState("123456789");

	const handleSave = () => {};

	return (
		<div>
			<Flex gap={6}>
				<Avatar size="xl" name={"GRIZLI"} src="/avatar.jpg" />
				<Flex direction={"column"} gap={1.5}>
					<Heading>{"GRIZLI"}</Heading>
					<Button size="sm" variant={"outline"}>
						Сменить аватарку
					</Button>
				</Flex>
			</Flex>
			<FormControl mt={10}>
				<FormLabel>Логин</FormLabel>
				<Input value={username} onChange={e => setUsername(e.target.value)} />
			</FormControl>
			<FormControl mt={2}>
				<FormLabel>Пароль</FormLabel>
				<Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
			</FormControl>
			<Button mt={4} onClick={handleSave}>
				Сохранить изменения
			</Button>
		</div>
	);
}
