"use client";

import { Link as ChakraLink, Button, Flex, FormControl, Input, Text, FormHelperText } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";

import { _userAuth_ } from "../_utils/store";
import Devices from "@/app/_components/Devices/Devices";
import Logs from "../_components/Logs";

export default function HomePage() {
	const [authWindow, setAuthWindow] = useState<"register" | "login">("login");

	const [userAuth, setUserAuth] = useAtom(_userAuth_);

	const handleRegister = () => {
		setUserAuth(true);
	};

	const handleLogin = () => {
		setUserAuth(true);
	};

	return (
		<section className="flex-middle min-h-full h-full">
			{!userAuth && (
				<Flex gap={10}>
					<Flex className="w-[280px] mx-auto" gap={2} direction={"column"}>
						<FormControl>
							<Input placeholder={authWindow === "login" ? "Логин" : "Придумайте логин"} />
							{authWindow === "register" && (
								<FormHelperText ml={2} opacity={0.7} mt={0.5}>
									Допускаются английские буквы, цифры и знак нижнего подчеркивания
								</FormHelperText>
							)}
						</FormControl>
						<FormControl>
							<Input placeholder={authWindow === "login" ? "Пароль" : "Придумайте пароль"} />
							{authWindow === "register" && (
								<FormHelperText ml={2} opacity={0.7} mt={0.5}>
									Не менее 8 символов
								</FormHelperText>
							)}
						</FormControl>
						<Button
							bgColor={"#000"}
							color="white"
							_hover={{ bgColor: "rgba(0,0,0,85%)" }}
							onClick={() => {
								if (authWindow === "register") {
									handleRegister();
								} else {
									handleLogin();
								}
							}}>
							{authWindow === "register" ? "Создать аккаунт" : "Войти"}
						</Button>
						<ChakraLink
							fontSize={"14px"}
							textAlign={"center"}
							as={Link}
							href="#"
							color={"blue.500"}
							onClick={() => setAuthWindow(authWindow === "register" ? "login" : "register")}>
							{authWindow === "register" ? "Уже есть аккаунт?" : "Не зарегистрированы?"}
						</ChakraLink>
					</Flex>
					<Text opacity={0.4} fontWeight={500} maxW={300} textAlign={"center"}>
						Авторизуйтесь, чтобы получить доступ к контенту платформы: личный кабинет, управление
						устройствами умного дома, подробная статистика...
					</Text>
				</Flex>
			)}
			{userAuth && (
				<Flex gap={16} alignItems={"stretch"} className="h-[60vh]">
					<Devices />
					<div className="w-px min-h-full h-full bg-black/20" />
					<Logs />
				</Flex>
			)}
		</section>
	);
}
