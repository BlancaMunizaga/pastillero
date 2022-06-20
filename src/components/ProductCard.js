import React from "react";
import { Typography} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStylesProductCard } from "../styles/ProductCard";

export default function ProductCard(props){
  const classes = useStylesProductCard();
  const {name, quantity, concentration, imagesUrl} = props.producto;
  const tooLittle = 20;
  
  return(
    <div className={classes.root}>
      <div> 
        <img className={classes.image} src={imagesUrl} alt=""></img>
      </div>
      <div className={classes.info}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.composition}>{concentration}</Typography>
        { quantity < tooLittle && (
          <>
            <Typography className={classes.isLeftRed}>Quedan {quantity} comprimidos</Typography>
            <Typography className={classes.forDaysRed}>Para {quantity} días</Typography>
          </>
        )}
        { quantity >= tooLittle && (
          <>
            <Typography className={classes.isLeftBlue}>Quedan {quantity} comprimidos</Typography>
            <Typography className={classes.forDaysBlue}>Para {quantity} días</Typography>
          </>
        )}
      </div>
      <div className={classes.icon}>
        <ShoppingCartIcon className={classes.cartIcon}></ShoppingCartIcon>
        <AddCircleIcon className={classes.plusIcon}></AddCircleIcon>
      </div>
      
    </div>
  );

};