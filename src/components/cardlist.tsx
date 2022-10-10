import logements from "../data/logements.json";
import Card from "./card";

export default function CardList(): JSX.Element {
    return (
        <section className="cardlist">
            {logements.map((element) => (
                <Card
                    idLink={element.id}
                    key={element.id}
                    cover={element.cover}
                    title={element.title} />
            ))}
        </section>
    )
};