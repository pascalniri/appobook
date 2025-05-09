import React from 'react';
import StatCards from '../../components/businessDashboard/StatCards';
import PendingAppointments from '../../components/businessDashboard/PendingAppointments';

export default function DashboardPage() {
  return (
    <div className="py-4 px-10  mt-16 w-full">
      <StatCards />
      <PendingAppointments />
    </div>
  );
}