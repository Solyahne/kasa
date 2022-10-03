import logements from "../data/logements.json";
import Card from "./card";

export default function CardList() {
    return (
        <section className="cardlist">
            {logements.map((element) => (
                <Card
                    key={element.id}
                    cover={element.cover}
                    title={element.title} />
            ))}
        </section>
    )
};