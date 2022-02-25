import Link from "next/link";
import dishes from "/data/dish-data.json";

const Dishes = () => {
    return (
        <div>
            <h1>Food</h1>
            {dishes.food.map((item) => {
                return (
                    <article key={item.id}>
                        <h3 className="menu-item-name">{item.name}</h3>
                        <h4>{`$${item.price}`}</h4>
                    </article>
                );
            })}
        </div>
    );
};

export default Dishes;

// <Link href={"/dishes/" + 1} key={item.id}>
//     <a>Chicken Parmesan</a>
// </Link>
