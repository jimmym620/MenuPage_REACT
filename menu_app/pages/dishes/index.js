import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import MenuCategory from "../../comp/MenuCategory";
import CategoryButton from "../../comp/CategoryButton";
import { useState, useEffect } from "react";

const Dishes = () => {
    const [category, setCategory] = useState("");
    const [categoryChosen, setCategoryChosen] = useState(false);

    const handleCategorySelect = (cat) => {
        setCategory(cat);
        setCategoryChosen(true);
    };

    return (
        <>
            <Head>
                <title>Restaurant Name | Menu </title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="menu-container">
                <h1 className="menu-title">Our menu</h1>
                <div className="menu-content">
                    {categoryChosen && (
                        <>
                            <button
                                className="cat-close-btn"
                                onClick={() => setCategoryChosen(false)}
                            >
                                Go Back
                            </button>
                            <MenuCategory cat={category.toLowerCase()} />
                        </>
                    )}
                    {/* <MenuCategory cat="drink" /> */}
                    {!categoryChosen && (
                        <div className="category-btn-list">
                            <CategoryButton
                                name="Starter"
                                color="starter-pastel"
                                handleCategorySelect={handleCategorySelect}
                            />
                            <CategoryButton
                                name="Main"
                                color="main-pastel"
                                handleCategorySelect={handleCategorySelect}
                            />
                            <CategoryButton
                                name="Dessert"
                                color="dessert-pastel"
                                handleCategorySelect={handleCategorySelect}
                            />
                            <CategoryButton
                                name="Drinks"
                                color="drinks-pastel"
                                handleCategorySelect={handleCategorySelect}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dishes;
