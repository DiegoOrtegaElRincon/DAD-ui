import BottomNavBar from "@/components/bottomNavBar/BottomNavbar"
import TopNavBar from "@/components/topNavBar/TopNavbar"

export default function PagesLayout({
  children, // will be a page or nested layout
  title
}: {
  children: React.ReactNode,
  title: string
}) {
  return (
    <>
      <TopNavBar title={title}/>
      {children}
      <BottomNavBar />
    </>
  )
}