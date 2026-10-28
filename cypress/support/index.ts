import './commands';
import '@cypress/code-coverage/support';
import 'cypress-real-events';
import '../fixtures/css/plasmaGlobalStyle.css';
import { resizeBrowserWindowBeforeScreenshots } from './browserWindow';

resizeBrowserWindowBeforeScreenshots();

require('cypress-plugin-tab');
