type Device = {
	id: number;
	type: "camera" | "sensor" | "light";
	name: string;
	is_connected: boolean;
	added_at: Date;
};
