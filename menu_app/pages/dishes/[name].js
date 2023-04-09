import { useRouter } from "next/router";
import dishdata from "/data/dish-data.json";
import Image from "next/image";
import BackButton from "../../comp/BackButton";

const Details = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div>
            {dishdata.menu.map((item) => {
                const slug = item.name
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/[\s_-]+/g, "-")
                    .replace(/^-+|-+$/g, "");
                if (slug === name) {
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
                                <div>
                                    <h3>${item.price}</h3>

                                    <p>{item.altText}</p>
                                </div>
                            </div>
                        </article>
                    );
                }
            })}
        </div>
    );
};

export default Details;
