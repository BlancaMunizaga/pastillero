import React, { useEffect, useState } from 'react';
import {useStylesIsLeftList } from "../styles/IsLeftList";
import ProductCard from './ProductCard';

export default function IsLeftList() {
  const classes = useStylesIsLeftList;
  const [isLeft, setIsLeft] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const productsList = await fetch('https://private-b76b9a-inventurestest.apiary-mock.com/products').then(response=> response.json());
      const purchasesList = await fetch('https://private-b76b9a-inventurestest.apiary-mock.com/purchases').then(response=> response.json());
      const left = calculateIsLeft(productsList.payload,purchasesList.payload);
      setIsLeft(left);
    }
    fetchData();


  }, []);

  
  return (
    <>
      { isLeft && (
        <>
          <div className={classes.space}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
          <div className={classes.isLeft}>
          {isLeft.map((product) => {
            if (product.quantity>0){
              return <ProductCard key={product.id} producto={product}/>;
            }
            return null;
          })}
          </div>  
        </>
      )}  
    </>
  );
}

function calculateIsLeft(products,purchases) {
  let isLeft = [];
  for (let i = 0; i < purchases.length; i++) {
    let itemsPurchase = purchases[i].details;
    let receivedDate = new Date(purchases[i].received_date).getTime();
    if (isLeft.length === 0) { //Si es la primera compra agrego nomas la lista y pongo cuando fue comprado
      for (let j = 0; j < itemsPurchase.length; j++) {
        let entry = {id: itemsPurchase[j].product_id, quantity: itemsPurchase[j].quantity, received_date: purchases[i].received_date };
        isLeft.push(entry);
      }
    } else { //otras  compras
      for (let n = 0; n < itemsPurchase.length; n++) {
        //revisar si es primera vez que compramos ese item
        let item = itemsPurchase[n];
        let itIs = false;
        for (let k = 0; k < isLeft.length; k++) {
          if (isLeft[k].id === item.product_id) {
            itIs = true;
            //retar las pastillas que se han ocupado con los dias y sumar las que llegaron
            let last_purchase = new Date(isLeft[k].received_date).getTime();
            let days_pass = (receivedDate - last_purchase)/(1000*60*60*24);
            if (isLeft[k].quantity - days_pass < 0) { // se quedo sin remedios
              isLeft[k].quantity = 0;
            } else {
              isLeft[k].quantity -= days_pass;
            }
            isLeft[k].quantity += itemsPurchase[n].quantity;
            isLeft[k].received_date = purchases[i].received_date;
          }
        }
        // es un producto nuevo
        if (!itIs) {
          let entry = {id: item.product_id, quantity: item.quantity, received_date: purchases[i].received_date };
          isLeft.push(entry);
        }
      }
    }
  }
  // restar las pastillas desde la ultima entrga a la fecha actual y agregar información adiconal
  for (let k = 0; k < isLeft.length; k++) {
    let last_purchase = new Date(isLeft[k].received_date).getTime();
    let today = Date.now();
    let days_pass = Math.floor((today - last_purchase)/(1000*60*60*24));
    if (isLeft[k].quantity - days_pass < 0) { // se quedo sin remedios
      isLeft[k].quantity = 0;
    } else {
      isLeft[k].quantity -= days_pass;
    }
    for (let j = 0; j < products.length; j++) {
      if (isLeft[k].id === products[j].id){
        isLeft[k]["name"]= products[j].name;
        isLeft[k]["concentration"]= products[j].concentration;
        isLeft[k]["imagesUrl"]= products[j].imagesUrl;

      }
    }
  }
  isLeft.sort((a,b) =>{
    return a.quantity - b.quantity;
  });
  return isLeft;
}
