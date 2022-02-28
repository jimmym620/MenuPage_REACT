import { CgGlassAlt } from "react-icons/cg";
import { CgBowl } from "react-icons/cg";
import { CgShield } from "react-icons/cg";
import { CgCoffee } from "react-icons/cg";

function getIcon(name) {
    switch (name) {
        case "Starter":
            return <CgCoffee />;
        case "Main":
            return <CgBowl />;
        case "Dessert":
            return <CgShield />;
        case "Drinks":
            return <CgGlassAlt />;
    }
}

const CategoryButton = (props, handleCategorySelect) => {
    return (
        <div
            className={`categoryButton ${props.color}`}
            onClick={() => console.log("working div")}
        >
            <h1>{props.name}</h1>
            <h1 className="cat-icon">{getIcon(props.name)}</h1>
        </div>
    );
};

export default CategoryButton;
