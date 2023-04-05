import { CgGlassAlt } from "react-icons/cg";
import { CgBowl } from "react-icons/cg";
import { CgShield } from "react-icons/cg";
import { CgCoffee } from "react-icons/cg";

function getIcon(name) {
    switch (name) {
        case "Starters":
            return <CgCoffee />;
        case "Mains":
            return <CgBowl />;
        case "Desserts":
            return <CgShield />;
        case "Drinks":
            return <CgGlassAlt />;
    }
}

const CategoryButton = ({ color, name, handleCategorySelect }) => {
    return (
        <div
            className={`categoryButton ${color}`}
            onClick={() => handleCategorySelect(name)}
        >
            <h1>{name}</h1>
            <h1 className="cat-icon">{getIcon(name)}</h1>
        </div>
    );
};

export default CategoryButton;
