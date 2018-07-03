// Local CSS must be loaded prior to loading other libs.
import '../style/index.css';

import {
  JupyterLab, JupyterLabPlugin,
} from '@jupyterlab/application';

import {
  StatusBar, IStatusBar
} from './statusBar';

// Export default status bar items
import { runningKernelsItem } from './defaults';

/**
 * Initialization data for the statusbar extension.
 */
const statusBar: JupyterLabPlugin<IStatusBar> = {
  id: 'jupyterlab-statusbar/statusbar',
  provides: IStatusBar,
  autoStart: true,
  activate: (app: JupyterLab) => {
    return new StatusBar({ host: app.shell });
  }
};

const plugins: JupyterLabPlugin<any>[] = [
  statusBar, runningKernelsItem
];

export default plugins;

export * from './statusBar';
