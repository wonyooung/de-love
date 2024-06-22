import Button from "./atoms/button"
import Search from "./atoms/search"
import List from "./atoms/list"
export default function SideBar({children}){
    return(
        <div className="container">
        <div className="sidebar">
         <div className="search">
            <Search/>
            <Button/>
         </div>
         <List/>
        </div>
        {children}
        </div>
    )
}