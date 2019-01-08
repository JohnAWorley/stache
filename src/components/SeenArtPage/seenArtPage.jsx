import React from 'react';
import { connect } from 'react-redux';

import FinalDrawer from '../DrawerComponent/Drawer';

const SeenArt = () => (
    <div>
        <FinalDrawer />
        <div>
            <p>
                categorie page
      </p>
        </div>
    </div>
);

export default connect()(SeenArt);