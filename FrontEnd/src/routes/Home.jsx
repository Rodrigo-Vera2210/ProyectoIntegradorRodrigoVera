import Category from "../components/Home/Category"
import Productos from "../components/Home/Productos"
import Recommend from "../components/Home/Recommend"
import Search from "../components/Home/Search"

const Home = () =>{
    return (
        <>
            <Search/>
            <Category/>
            <Recommend/>
            <Productos/>
        </>
    )
}

export default Home