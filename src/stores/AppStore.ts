import { observable, computed, action } from 'mobx';

// Config
import themes from '../styles/themes';

export class AppStore {
    /* Observables */
    @observable themeName: string = 'classic';

    /* Computed */
    @computed
    get theme(): Object {
      return themes[this.themeName];
    };

    /* Actions */
    @action
    resetAllSettings = () => {
      this.themeName = 'classic';
    };
  
    @action
    switchTheme = (name: string) => {
      this.themeName = name
    };
}


export default AppStore;
