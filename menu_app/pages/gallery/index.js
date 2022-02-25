import Image from "next/image";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();

    return {
        props: { gallery: data },
    };
};

const Gallery = ({ gallery }) => {
    return (
        <div>
            <h1>Gallery</h1>
            {gallery.map((photo) => (
                <div key={photo.id}>
                    <a>
                        <h2>{photo.title}</h2>
                        <p>{photo.url}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
