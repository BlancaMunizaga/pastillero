import { makeStyles } from "@material-ui/core/styles";

export const useStylesNavbar = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '360px',
    height: '64px',
  },
  appBar: {
    backgroundColor: '#0277BD',
    position: 'absolute',
    width: '375px',
    height: '64px',
    left: '0px',
    top: '0px',
  },
  menuButton: {
    width: '48px',
    height: '48px',

    // marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));