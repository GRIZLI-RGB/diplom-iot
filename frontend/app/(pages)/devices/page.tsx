import Devices from "@/app/_components/Devices/Devices";

export default function DevicesPage() {
	return (
		<section>
			<Devices
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
		</section>
	);
}
