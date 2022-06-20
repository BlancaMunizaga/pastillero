import { makeStyles } from "@material-ui/core/styles";

export const useStylesExplicativeText = makeStyles(() => ({
  pill: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    left: '160px',
    top: '80px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '40px',
    lineHeight: '47px',
    textAlign: 'center',

    color: '#414046',
  },
  reviewText: {
    position: 'absolute',
    width: '192px',
    height: '29px',
    left: '84px',
    top: '141px',

    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '19px',
    lineHeight: '28px',
    textAlign: 'center',
    letterSpacing: '0.15px',

    color: '#414046',

  },
  cartText: {
    position: 'absolute',
    width: '320px',
    height: '24px',
    left: '20px',
    top: '172px',

    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '0.16px',

    color: '#414046',

  },
  titleDiv:{  
    position: 'absolute',
    width: '375px',
    height: '40px',
    left: '0px',
    top: '219px',
    
    background: '#F5F5F5',

  },
  text: {
    position: 'absolute',
    width: '92px',
    height: '29px',
    left: '16px',
    top: '7px',

    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '19px',
    lineHeight: '28px',
    letterSpacing: '0.15px',

    color: '#414046',

  }

  
}));