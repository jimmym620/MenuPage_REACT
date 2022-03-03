import { useRouter } from "next/router";
import dishes from "/data/dish-data.json";
import Image from "next/image";
import Link from "next/link";
import BackButton from "../../comp/BackButton";

const Details = () => {
    const router = useRouter();
    const { id, name } = router.query;
    return (
        <div>
            {dishes.menu.map((item) => {
                if (item.id === id) {
                    return (
                        <article className="dish-details">
                            <BackButton />

                            <div>
                                <h1>{item.name}</h1>
                                <Image
                                    src={item.thumbnail}
                                    alt={item.altText}
                                    width={420}
                                    height={270}
                                />
                                <h3>${item.price}</h3>

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
