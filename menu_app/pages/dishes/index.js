import Link from "next/link";
import dishes from "/data/dish-data.json";
import Image from "next/image";

const Dishes = () => {
    return (
        <div className="menu-list">
            <section>
                <h1>Food</h1>
                {dishes.food.map((item) => {
                    return (
                        <article key={item.id}>
                            <h3 className="menu-item-name">{item.name}</h3>
                            <h4>{`$${item.price}`}</h4>
                            <Image
                                src={item.thumbnail}
                                alt={item.altText}
                                width={420}
                                height={270}
                            />
                        </article>
                    );
                })}
            </section>
            <section>
                <h1>Drinks</h1>
                {dishes.drinks.map((item) => {
                    return (
                        <article key={item.id}>
                            <h3 className="menu-item-name">{item.name}</h3>
                            <h4>{`$${item.price}`}</h4>
                            <Image
                                src={item.thumbnail}
                                alt={item.altText}
                                width={420}
                                height={270}
                            />
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Dishes;

// <Link href={"/dishes/" + 1} key={item.id}>
//     <a>Chicken Parmesan</a>
// </Link>
