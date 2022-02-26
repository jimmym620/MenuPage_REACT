import { useRouter } from "next/router";
import dishes from "/data/dish-data.json";
import Image from "next/image";
import Link from "next/link";

const Details = () => {
    const router = useRouter();
    const { id, name } = router.query;
    return (
        <div>
            {dishes.food.map((item) => {
                if (item.id === id) {
                    return (
                        <article className="dish-details">
                            <Link href="/dishes">
                                <a className="item-menu-btn">Return to menu</a>
                            </Link>
                            <div>
                                <h1>{item.name}</h1>
                                <Image
                                    src={item.thumbnail}
                                    alt={item.altText}
                                    width={420}
                                    height={270}
                                />
                                <p>{item.altText}</p>
                            </div>
                        </article>
                    );
                }
            })}
        </div>
    );
};

export default Details;

// export const getStaticPaths = async () => {
//     const res = await fetch(`${SERVER_HOST}/dishes`);
//     const data = await res.json();

//     return {
//         props: { dishes: data },
//     };
// };

// export async function getStaticPaths() {
//     const res = await fetch (`${process.env.PUBLIC_URL}/dishes`)
// }
