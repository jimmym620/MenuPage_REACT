import Link from "next/link";
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
            <div className="menu-container white-box">
                <h1 className="menu-title">View our menu</h1>
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
                        <>
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
                            <div className="course-meal-container">
                                <Link href="/dishes/three-course">
                                    <a>
                                        <h3>
                                            Click here to view our 3 course menu
                                        </h3>
                                    </a>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dishes;
