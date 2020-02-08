import { IpcMessageEvent, IpcRenderer } from 'electron';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { TimerTemplate } from './components/templates/TimerTemplate';

const electron = window.require("electron"); // require electron like this in all the files. Don't Use import from 'electron' syntax for importing IpcRender from electron.

let ipcRenderer: IpcRenderer = electron.ipcRenderer;

ipcRenderer.on("response", (event: IpcMessageEvent, args: any) => {
  console.log(args);
});

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TimerTemplate />
    </>
  );
};

export default App;
