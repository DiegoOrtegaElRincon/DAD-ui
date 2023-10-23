import BottomNavBar from "@/components/bottomNavBar/bottomNavbar"
import TopNavBar from "@/components/topNavBar/topNavbar"

export default function PagesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {<TopNavBar props={""}/>}
        {children}
        {<BottomNavBar/>}
      </section>
    )
  }