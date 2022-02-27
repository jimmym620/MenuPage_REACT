import dishes from "/data/dish-data.json";
import Link from "next/link";

const Dishes = (props) => {
    return (
        <div className="categories">
            <h1>{props.cat}</h1>
            {dishes.menu.map((item) => {
                if (item.category.includes(props.cat)) {
                    return (
                        <article key={item.id} className="menu-item">
                            <Link href={"/dishes/" + item.id}>
                                <a>
                                    <h3>
                                        {item.name}
                                    </h3>
                                </a>
                            </Link>
                            <h4>{`$${item.price}`}</h4>
                        </article>
                    );
                }
            })}
        </div>
    );
};

export default Dishes;
