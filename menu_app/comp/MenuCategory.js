import dishes from "/data/dish-data.json";
import Link from "next/link";

const Dishes = ({ cat }) => {
    return (
        <div className={`categories`}>
            <h1>{cat}</h1>
            {dishes.menu.map((item) => {
                if (item.category.includes(cat)) {
                    return (
                        <article key={item.id} className="menu-item">
                            <Link href={"/dishes/" + item.id}>
                                <a>
                                    <h3>{item.name}</h3>
                                </a>
                            </Link>
                            <h3>{`$${item.price}`}</h3>
                        </article>
                    );
                }
            })}
        </div>
    );
};

export default Dishes;
