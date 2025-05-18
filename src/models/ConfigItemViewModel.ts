import { ConfigItem } from "../types";
export interface ConfigItemViewModelType extends ConfigItem {
  getLinks: () => ConfigItem['links'];
  getName: () => ConfigItem['name'];
  getDescription: () => ConfigItem['description'];
}

const ConfigItemViewModel = (configItem: ConfigItem): ConfigItemViewModelType => {
  return {
    ...configItem,
    getLinks: () => configItem.links,
    getName: () => configItem.name,
    getDescription: () => configItem.description || '',
  }

}

export default ConfigItemViewModel;
