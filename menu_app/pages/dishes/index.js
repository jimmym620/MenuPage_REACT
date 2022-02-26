import Link from "next/link";
import dishes from "/data/dish-data.json";
import Image from "next/image";

const Dishes = () => {
    return (
        <div className="menu-list">
            <h1 className="menu-title">Our menu</h1>
            <div className="categories">
                <section>
                    <h1>Food</h1>
                    {dishes.food.map((item) => {
                        return (
                            <article key={item.id}>
                                <Link href={"/dishes/" + item.id}>
                                    <a>
                                        <h3 className="menu-item-name">
                                            {item.name}
                                        </h3>
                                    </a>
                                </Link>
                                <h4>{`$${item.price}`}</h4>
                            </article>
                        );
                    })}
                </section>
                <section>
                    <h1>Drinks</h1>
                    {dishes.drinks.map((item) => {
                        return (
                            <article key={item.id}>
                                <Link href={"/dishes/" + item.id}>
                                    <a>
                                        <h3 className="menu-item-name">
                                            {item.name}
                                        </h3>
                                    </a>
                                </Link>
                                <h4>{`$${item.price}`}</h4>
                            </article>
                        );
                    })}
                </section>
            </div>
        </div>
    );
};

export default Dishes;

export async function getStaticProps() {
    const dishPages = dishes;

    return {
        props: { dishPages },
    };
}
