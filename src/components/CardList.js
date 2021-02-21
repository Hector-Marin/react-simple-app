import React from 'react';
import Card from './Card';

const CardList = ({data}) => (
    <div>
        {
            data.map((card) => {
                return (
                    <Card
                        key={card.id}
                        {...card}
                    />
                );
            })
        }
    </div>
);

export default CardList;