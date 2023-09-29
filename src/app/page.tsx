import BarChart from '@/components/BarChart'
import Header from '@/components/Header'
import RecentOrders from '@/components/RecentOrders'
import TopCard from '@/components/TopCard'

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Header />
      <TopCard />
      <BarChart />
      <RecentOrders />
    </main>
  )
}
