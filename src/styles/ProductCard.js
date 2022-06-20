import { makeStyles } from "@material-ui/core/styles";

export const useStylesProductCard = makeStyles(() => ({
  root: {
    width: '375px',
    height: '93px',
    left: '0px',
    display: "flex",
    borderBottomStyle: "solid",
    borderBottomColor: '#F5F5F5',
  },
  image: {
    width: '62px',
    height: '62px',
    marginLeft:'20px',
    marginTop: '15px',
  },
  info: {
    left: '98px',
    display: 'block',
    marginLeft: '16px',
  },
  name: {
    width: '187px',
    height: '23px',
    left: '98px',
    top: '8px',

    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '22px',
    letterSpacing: '0.15px',

    color: '#414046',

  },
  composition: {
    width: '51px',
    height: '20px',
    left: '98px',
    top: '29px',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.15px',

    color: 'rgba(0, 0, 0, 0.54)',

  },
  isLeftBlue:{
    width: '165px',
    height: '20px',
    left: '98px',
    top: '48px',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
    textDecorationLine: 'underline',

    color: '#0277BD',
  },
  forDaysBlue: {
    width: '79px',
    height: '18px',
    left: '98px',
    top: '67px',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.4px',
    textDecorationLine: 'underline',

    color: '#0277BD',
  },
  isLeftRed:{
    width: '165px',
    height: '20px',
    left: '98px',
    top: '48px',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
    textDecorationLine: 'underline',

    color: '#F44336',
  },
  forDaysRed: {
    width: '79px',
    height: '18px',
    left: '98px',
    top: '67px',

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.4px',
    textDecorationLine: 'underline',

    color: '#F44336',
  },
  icon: {
    position: 'relative',
    display: 'inline-block',
    left: '40px',
  },
  plusIcon: {
    position: "absolute",
    width: '23px',
    height: '23px',
    left: '10px',
    top: '26px',
    color: '#0277BD',

  },
  cartIcon: {
    position: "absolute",
    width: '23px',
    height: '23px',
    left: '0px',
    top: '37px',
   
  }

}));