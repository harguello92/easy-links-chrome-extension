import { ConfigItem } from "../types";
export interface ConfigItemViewModelType extends ConfigItem {
  getCheckeableLinks: () => ConfigItem['links'];
  getLinks: () => ConfigItem['links'];
  getName: () => ConfigItem['name'];
}

const ConfigItemViewModel = (configItem: ConfigItem): ConfigItemViewModelType => {
  return {
    ...configItem,
    getCheckeableLinks: () => configItem.links.filter(link => link.checkable),
    getLinks: () => configItem.links,
    getName: () => configItem.name,
  }

}

export default ConfigItemViewModel;
