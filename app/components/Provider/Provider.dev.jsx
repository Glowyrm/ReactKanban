import React from 'react';
import AltContainer from 'alt-container';
import chromeDebug from 'alt-utils/lib/chromeDebug';
import alt from '../../libs/alt';
import setup from './setup';
React.Perf = require('react-addons-perf');

setup(alt);

chromeDebug(alt);

export default ({children}) =>
  <AltContainer flux={alt}>
    {children}
  </AltContainer>
