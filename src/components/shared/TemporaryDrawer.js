import React from 'react';
import Drawer from '@material-ui/core/Drawer';

export default function TemporaryDrawer({open}) {

  return (
    <div>
      <Drawer anchor={'right'} open={open}>
        <h1>PISTI</h1>
      </Drawer>
    </div>
  );
}
