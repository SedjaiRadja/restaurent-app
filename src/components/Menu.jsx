import { useEffect } from "react";
import { menu_list, food_list } from "../assets/assets";
import "./Menu.css";
function Menu({ category, setCategory, setFoodList }) {
  useEffect(() => {
    if (category) {
      setFoodList(food_list.filter((item) => item.category === category));
    } else {
      setFoodList(food_list);
    }
  }, [category, setFoodList]);

  return (
    <div className="explore-menu">
      <h1>Explore our Menu !</h1>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and provide an exceptional dining
        experience.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "" : item.menu_name,
                )
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
