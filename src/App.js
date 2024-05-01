import "./App.css";
import Footer from "./components/footer";
import ProductList from "./components/product_list";
import images from "./images.jsx";
import Header from "./components/header.jsx";

function App() {
  const listTitles = [
    {
      title: "New arrival",
      products: [
        {
          title: "Leather long dress",
          color: "핑크색",
          price: "$350.0",
          image: images["Dress1"],
        },
        {
          title: "Leather long dress2",
          color: "파란색",
          price: "$450.0",
          image: images["Dress2"],
        },
        {
          title: "Leather long dress3",
          color: "검은색",
          price: "$550.0",
          image: images["Dress3"],
        },
      ],
    },
    {
      title: "Collection",
      products: [
        {
          title: "Leather long dress",
          color: "pink",
          price: "$350.0",
          image: images["Dress3"],
        },
        {
          title: "Leather long dress2",
          color: "black",
          price: "$450.0",
          image: images["Dress3"],
        },
        {
          title: "Leather long dress3",
          color: "white",
          price: "$550.0",
          image: images["Dress3"],
        },
      ],
    },
    {
      title: "Most watched",
      products: [
        { title: "Leather long dress", color: "pink", price: "$350.0" },
        { title: "Leather long dress2", color: "black", price: "$450.0" },
        { title: "Leather long dress3", color: "white", price: "$550.0" },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <ProductList productTitles={listTitles} />
      <Footer />
    </div>
  );
}

export default App;
