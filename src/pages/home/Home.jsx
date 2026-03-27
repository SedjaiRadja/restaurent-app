import { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import FoodDisplay from "../../components/FoodDisplay";
import Footer from "../../components/Footer";
function Home() {
  const [category, setCategory] = useState("");
  const [foodList, setFoodList] = useState([]);
  return (
    <div>
      <NavBar />
      <Header />
      <Menu
        category={category}
        setCategory={setCategory}
        setFoodList={setFoodList}
      />
      <FoodDisplay foodList={foodList} />
      <Footer />
    </div>
  );
}
export default Home;
