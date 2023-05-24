import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetails() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`)
            const itemDetails = await fetchItem.json();
            setItem(itemDetails);
        }

        fetchItem();
    }, [id])


    return (
        <div className='itemDetails'>
            {item?.data ? (
            <>
                <h1>{item.data.name}</h1>
                <h1>{item.data.description}</h1>
                <img src={item.data.images.icon} alt="item" />
            </>
            ) : 'Loading...'}
      </div>
    );
  }
  
  export default ItemDetails;
  