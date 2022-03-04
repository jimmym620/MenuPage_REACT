import BackButton from "../../comp/BackButton";

const ThreeCourse = () => {
    return (
        <div className="tcm-container">
            <div className="tcm-header">
                <p>Choose a starter, main and a dessert for £19.99</p>
                <BackButton />
            </div>
            <section>
                <div className="tcm-r1">
                    <div className="tcm-block">
                        <h2>Starters</h2>
                        <ul>
                            <li>Garlic Bread</li>
                            <li>BBQ Chicken Wings</li>
                            <li>Bruschetta </li>
                            <li>Crab Cakes</li>
                            <li>Pumpkin Soup</li>
                            <li>Sweet Potato & Lentil Soup</li>
                        </ul>
                    </div>
                    <div className="tcm-block">
                        <h2>Mains</h2>
                        <ul>
                            <li>Cheeseburger with Fries</li>
                            <li>Salmon Chowder with Leeks & Potatoes</li>
                            <li>Grilled Pork Spare Ribs</li>
                            <li>Chicken Caesar Salad</li>
                            <li>Seared Scallops with Basil Risotto</li>
                            <li>Pepperoni Pizza</li>
                            <li>Texas BBQ Pizza</li>
                            <li>Margherita Pizza</li>
                        </ul>
                    </div>
                </div>
                <div className="tcm-r2">
                    <div className="tcm-block">
                        <h2>Desserts</h2>
                        <ul>
                            <li>Chocolate Molten Cake</li>
                            <li>Lemon Sponge Cake</li>
                            <li>White Chocolate Cheesecake</li>
                            <li>Tiramisu</li>
                            <li>Strawberry Mousse</li>
                            <li>Mango & Coconut Trifle</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThreeCourse;
