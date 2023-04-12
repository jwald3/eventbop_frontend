import Card from "../Card/Card";


const VenueCard = ({ venue }) => {
    const { id, title, address } = venue;
    return (
        <Card
            itemType="venue"
            imageUrl={venue.image}
            title={title}
            subtitle={address}
            linkPath={`/venues/${id}`}
        />
    );
};

export default VenueCard;
