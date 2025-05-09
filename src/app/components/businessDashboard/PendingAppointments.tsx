'use client'

const appointments = [
    {
        id: 1,
        clientName: "John Doe",
        service: "Haircut",
        date: "2025-05-10",
        time: "10:00 AM",
        status: "confirmed",
        duration: "45 min",
        notes: "Prefer left side"
    },
    {
        id: 2,
        clientName: "Jane Smith",
        service: "Manicure",
        date: "2025-05-10",
        time: "11:30 AM",
        status: "confirmed",
        duration: "30 min",
        notes: "No specific preferences"
    },
    {
        id: 3,
        clientName: "Mike Johnson",
        service: "Facial Treatment",
        date: "2025-05-11",
        time: "2:00 PM",
        status: "pending",
        duration: "60 min",
        notes: "Sensitive skin"
    },
    {
        id: 4,
        clientName: "Sarah Williams",
        service: "Full Body Massage",
        date: "2025-05-12",
        time: "4:30 PM",
        status: "confirmed",
        duration: "90 min",
        notes: "Focus on back"
    }
];



export default function PendingAppointments() {
    const formatDate = (date: string) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="mt-10">
            <h1 className="font-semibold mb-6">Upcoming Appointments</h1>
            
            <div className="bg-white border">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Client
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date & Time
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Duration
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Notes
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {appointments.map((appointment) => (
                                <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="">
                                                <div className="text-xs font-medium text-gray-900">
                                                    {appointment.clientName}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-xs text-gray-900">{appointment.service}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-xs text-gray-900">
                                            {formatDate(appointment.date)}<br />
                                            {appointment.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-xs text-gray-900">{appointment.duration}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            appointment.status === 'confirmed' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {appointment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-xs text-gray-900">{appointment.notes}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap flex flex-row gap-2 items-center justify-start  text-sm">
                                        <button className="bg-black text-white px-[30px] py-[10px] border border-black hover:bg-transparent hover:text-black transition-all">Accept</button>
                                        <button className="bg-transparent text-black px-[30px] py-[10px] border border-black hover:bg-gray-100 transition-all">Reject</button>  
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}