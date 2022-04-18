import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {
      backgroundColor:'red'
    },
    page: {
      background: 'transparent',
      flex: '1 0 auto',
      minWidth: '100%',
      padding: 0,
      margin: 0,
      flexGrow: 1,
      order: 1,
      minHeight: '50%'
    }
  });

export default styles;
