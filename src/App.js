import "./App.css";
import Footer from "./components/footer";
import ProductList from "./components/product_list";
import images from "./images.jsx";
import Header from "./components/header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import Login from "./pages/login.jsx";
import CartView from "./pages/cartView.jsx";

function App() {
  const listTitles = [
    {
      title: "New arrival",
      products: [
        {
          title: "short dress",
          color: "pink",
          price: "$99",
          image: images["Dress1"],
        },
        {
          title: "short dress",
          color: "blue",
          price: "$65",
          image: images["Dress2"],
        },
        {
          title: "short dress",
          color: "black",
          price: "$20",
          image: images["Dress3"],
        },
      ],
    },
    {
      title: "Collection",
      products: [
        {
          title: "long dress",
          color: "purple",
          price: "$120",
          image: images["Dress4"],
        },
        {
          title: "long dress",
          color: "white",
          price: "$99",
          image: images["Dress5"],
        },
        {
          title: "long dress",
          color: "white red",
          price: "$35",
          image: images["Dress6"],
        },
      ],
    },
    {
      title: "Most watched",
      products: [
        {
          title: "long dress",
          color: "white pink",
          price: "$55",
          image: images["Dress7"],
        },
        {
          title: "short dress",
          color: "blue",
          price: "$85",
          image: images["Dress8"],
        },
        {
          title: "long dress",
          color: "red",
          price: "$110",
          image: images["Dress9"],
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<ProductList productTitles={listTitles} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cartView" element={<CartView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
