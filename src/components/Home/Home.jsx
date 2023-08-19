import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const {categories,setCategories} = useContext(Context);
    const {products,setProducts} = useContext(Context);
    const getCategories =()=>{
            fetchDataFromApi("/api/categories?populate=*").then(res => {
            console.log(res);
            setCategories(res);
        })
    }
    const getProducts = async()=>{
            fetchDataFromApi("/api/products?populate=*").then(res => {
            console.log(res);
            setProducts(res);
        })
    }
    useEffect(()=>{
        getCategories();
        getProducts();
    },[]);
    return (
        <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products products = {products} headingText="Popular Products"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
