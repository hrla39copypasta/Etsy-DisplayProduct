import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from 'App.jsx';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

