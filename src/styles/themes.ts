import dark from './themes/dark';
import light from './themes/light';
import classic from './themes/classic';

interface Theme {
  [key:string]: any;
}

const themes: Theme = {
  dark,
  light,
  classic
};

export default themes;