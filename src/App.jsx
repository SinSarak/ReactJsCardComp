import "./index.css";
import "./App.css";
import CardCategory from "./components/CardCategory";
import cate_laptop from "./assets/images/category/laptop/logodel.png";
import cate_Phone from "./assets/images/category/iphone/12.jpg";
import cate_Moto from "./assets/images/category/yamaha r15/images.jpg";
import cate_Car from "./assets/images/category/car/images.png";

import prod_Phone from "./assets/images/category/laptop/mac1.jpg";
import prod_laptop from "./assets/images/category/iphone/12_.jpg";
import prod_Moto from "./assets/images/category/yamaha r15/images (2).jpg";
import prod_Car from "./assets/images/category/car/images.jpg";

import CardProduct from "./components/CardProduct";

function App() {
  const catogoies = [
    { name: "Laptop", imageSrc: cate_laptop },
    { name: "Phone", imageSrc: cate_Phone },
    { name: "Moto", imageSrc: cate_Moto },
    { name: "Car", imageSrc: cate_Car },
  ];

  return (
    <>
      <h2>CATEOGRY</h2>
      <div style={{ display: "flex", padding: "0px 10px" }}>
        {catogoies.map((category) => (
          <CardCategory
            key={category.name}
            name={category.name}
            imageSrc={category.imageSrc}
          />
        ))}
        {/* <CardCategory name="Laptop" imageSrc={cate_laptop} />
        <CardCategory name="Phone" imageSrc={cate_Phone} />
        <CardCategory name="Moto" imageSrc={cate_Moto} />
        <CardCategory name="Car" imageSrc={cate_Car} /> */}
      </div>

      <h2>PRODUCT</h2>
      <div style={{ display: "flex", padding: "0px 10px" }}>
        <CardProduct
          name="IPhone 12"
          imageSrc={prod_laptop}
          model="Color Black 18GB"
          originalPrice={1200}
          offPrice={30}
          isNew={true}
        />
        <CardProduct
          name="MacBook M2"
          imageSrc={prod_Phone}
          model="Computer A100"
          originalPrice={2300}
          offPrice={240}
        />
        <CardProduct
          name="Hong Dream"
          imageSrc={prod_Moto}
          model="Black Off-road"
          originalPrice={4500}
          offPrice={1500}
          isNew={true}
        />
        <CardProduct
          name="Mazda"
          imageSrc={prod_Car}
          model="BT-50"
          originalPrice={3500}
          offPrice={230}
        />
      </div>
    </>
  );
}

export default App;
