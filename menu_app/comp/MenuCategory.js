import dishes from "/data/dish-data.json";
import Link from "next/link";

const Dishes = ({ cat }) => {
    return (
        <div className={`categories`}>
            <h1>{cat}</h1>
            {dishes.menu.map((item) => {
                if (item.category.includes(cat)) {
                    const slug = item.name
                        .toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, "")
                        .replace(/[\s_-]+/g, "-")
                        .replace(/^-+|-+$/g, "");
                    return (
                        <article key={item.id} className="menu-item">
                            <Link href={"/dishes/" + slug}>
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
