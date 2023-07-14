// project imports
import Dashboard from "./dashboard/default";

// export meta
export const meta = () => ({
    title: 'Dashboard | Hindustan EV Motors',
    description:
        'Hindustan EV Motors is a leading electric vehicle manufacturer in Kerala, India. Our mission is to provide affordable and sustainable transportation solutions to the masses.',
    keywords: ['Hindustan EV Motors', 'electric vehicles', 'sustainable transportation','Landi Lanzo'],
    ogImage: 'https://hindustanevmotors.com/wp-content/uploads/2022/12/LAN.png'
});

// ==============================|| DAFAULT PAGE ||============================== //

export default function Index() {
  return (
    <>
      <Dashboard />
    </>
  );
}
