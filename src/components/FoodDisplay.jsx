import "./FoodDisplay.css";
function FoodDisplay({ foodList }) {
  return (
    <>
      <hr></hr>
      <h1 className="title">Top dishes near you</h1>
      <div className="Food-Display">
        {foodList.map((item) => {
          return (
            <div className="Food-Display-item" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FoodDisplay;
