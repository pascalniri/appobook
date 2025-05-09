import { Calendar, User, Check, Clock } from "lucide-react";

export default function StatCards() {

    const cards = [
        {
            title: "Total Appointments",
            value: "100",
            icon: <Calendar strokeWidth={1.5} size={20} />
        },
        {
            title: "Total Clients",
            value: "100",
            icon: <User strokeWidth={1.5} size={20} />
        },
        {
            title: "Completed Bookings",
            value: "100",
            icon: <Check strokeWidth={1.5} size={20} />
        },
        {
            title: "Pending Bookings",
            value: "100",
            icon: <Clock strokeWidth={1.5} size={20} />
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 text-sm">
            {cards.map((card) => (
                <div key={card.title} className="flex flex-row items-center justify-between p-4 border w-full">
                    <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-gray-500">{card.title}</p>
                        <p className="text-md">{card.value}</p>
                    </div>
                    <div className="bg-gray-100/40 border border-gray-200 p-2 rounded-full">
                        {card.icon}
                    </div>
                </div>
            ))}
        </div>
    )
}