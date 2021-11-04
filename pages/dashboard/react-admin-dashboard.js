import Link from "next/link";
import dynamic from 'next/dynamic';
// import AdminDashboard from '../dashboard/react-admin-dashboard.js';

const AdminDashboard = dynamic(() => {
    import('../../components/admin-dashboard/AdminDashboard.js');
}, {
    ssr: false
});


const ReactAdminDashboard = () => {
    return (
        <div>
            <h1>react admin page</h1>
            <AdminDashboard />
            <p>back to {' '}
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </p>
        </div>
    );
};

export default ReactAdminDashboard;