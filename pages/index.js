import Head from 'next/head'
import dynamic from 'next/dynamic';
import RightToLeft from '../components/RightToLeft/RightToLeft.js';



export default function Home() {

  return (
    <div lang="fa">
      <Head dir="rtl" lang="fa">
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <title>سماکنترل</title>
        <meta name="description" content="SamaControl PWA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="manifest" href="../public/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightToLeft>
        <AdminDashboard />
      </RightToLeft>
    </div>
  );
}

const AdminDashboard = dynamic(() => import('../components/admin-dashboard/AdminDashboard.js'), {
  ssr: false,
});

