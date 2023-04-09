import Link from "next/link";
import Head from "next/head";
import MenuCategory from "../../comp/MenuCategory";
import CategoryButton from "../../comp/CategoryButton";
import { useState } from "react";

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
                <title>John Smith's | Menu </title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="menu-container">
                <h1 className="menu-title">Our Menu</h1>
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

                    {!categoryChosen && (
                        <>
                            <div className="category-btn-list">
                                <CategoryButton
                                    name="Starters"
                                    color="starter-pastel"
                                    handleCategorySelect={handleCategorySelect}
                                />
                                <CategoryButton
                                    name="Mains"
                                    color="main-pastel"
                                    handleCategorySelect={handleCategorySelect}
                                />
                                <CategoryButton
                                    name="Desserts"
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
