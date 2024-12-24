import React, { useState, useEffect } from 'react';
import { FaUserInjured, FaUserMd, FaUserNurse, FaSkull } from 'react-icons/fa';
import { FaHeartbeat} from 'react-icons/fa';  // Add new icons for wards
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, BarElement } from 'chart.js';

// Register the necessary components for the chart
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, BarElement);

const Home = () => {
  const [patientsAdmitted, setPatientsAdmitted] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [medicalOfficers, setMedicalOfficers] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  // Mock data for Line Chart (Patient Demographics by Gender over Months)
  const demographicsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        label: 'Men',
        data: [30, 40, 45, 50, 60, 65], // Mock data for men's count over months
        fill: false,
        borderColor: '#3498db', // Blue color for men's line
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: '#3498db',
      },
      {
        label: 'Women',
        data: [25, 35, 40, 45, 50, 55], // Mock data for women's count over months
        fill: false,
        borderColor: '#e74c3c', // Red color for women's line
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: '#e74c3c',
      },
    ],
  };

  // Mock data for Bar Chart (Patient Admissions and Discharges by Month)
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        label: 'Admissions',
        data: [120, 140, 150, 160, 180, 200], // Mock data for admissions count over months
        backgroundColor: '#3498db', // Blue color for admissions bars
      },
      {
        label: 'Discharges',
        data: [80, 90, 100, 110, 130, 140], // Mock data for discharges count over months
        backgroundColor: '#e74c3c', // Red color for discharges bars
      },
    ],
  };

  const demographicsOptions = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio to allow custom size
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Adjust step size for the Y-axis ticks
        },
      },
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  useEffect(() => {
    // Simulating a fetch from a database
    setPatientsAdmitted(120);
    setDoctors(50);
    setMedicalOfficers(30);
    setDeaths(5);

    const interval = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString();
      setCurrentDateTime(formattedTime);

      const day = date.toLocaleDateString('en-GB', { weekday: 'long' });
      const dateFormatted = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
      setCurrentDate(`${day}, ${dateFormatted}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      {/* Title, Subtitle, and Date/Time */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-700 mt-1">Welcome to Patient Centric Management System.</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900 mt-2">{currentDateTime}</p>
          <p className="text-sm text-gray-700 mt-1">{currentDate}</p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-roboto">
        {/* Patients Admitted Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">Count of Patients</h3>
            <p className="text-3xl font-bold text-gray-800">{patientsAdmitted}</p>
          </div>
          <FaUserInjured className="text-blue-500 text-4xl" />
        </div>

        {/* Doctors Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">Count of Doctors</h3>
            <p className="text-3xl font-bold text-gray-800">{doctors}</p>
          </div>
          <FaUserMd className="text-green-500 text-4xl" />
        </div>

        {/* Medical Officers Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">Medical Officers</h3>
            <p className="text-3xl font-bold text-gray-800">{medicalOfficers}</p>
          </div>
          <FaUserNurse className="text-yellow-500 text-4xl" />
        </div>

        {/* Deaths Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">Count of Deaths</h3>
            <p className="text-3xl font-bold text-gray-800">{deaths}</p>
          </div>
          <FaSkull className="text-red-500 text-4xl" />
        </div>
      </div>

      {/* Second Section: Cardiology Unit */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* ICU Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">ICU Patients</h3>
            <p className="text-3xl font-bold text-gray-800">25</p> {/* Example number */}
          </div>
          <FaHeartbeat className="text-red-500 text-4xl" /> {/* Red icon for ICU */}
        </div>

        {/* CCU Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">CCU Patients</h3>
            <p className="text-3xl font-bold text-gray-800">15</p> {/* Example number */}
          </div>
          <FaHeartbeat className="text-yellow-500 text-4xl" /> {/* Yellow icon for CCU */}
        </div>

        {/* Normal Wards Card */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-500">Normal Ward Patients</h3>
            <p className="text-3xl font-bold text-gray-800">60</p> {/* Example number */}
          </div>
          <FaHeartbeat className="text-green-500 text-4xl" />{/* Green icon for Normal Ward */}
        </div>
      </div>

      {/* Line Chart for Patient Demographics by Gender over Months */}
      <div className="mt-6 bg-white p-6 rounded-lg border border-gray-300" style={{ height: '300px' }}>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Breakdown of Patient by Gender</h3>
        <Line data={demographicsData} options={demographicsOptions} height={250} width={500} />
      </div>

      {/* First Section: Bar Chart for Admissions and Discharges */}
      <div className="mt-6 bg-white p-6 rounded-lg border border-gray-300" style={{ height: '300px' }}>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Bar Chart: Compare Patient Admissions and Discharges</h3>
        <Bar data={barChartData} options={barChartOptions} height={250} width={500} />
      </div>
    </div>
  );
};

export default Home;
