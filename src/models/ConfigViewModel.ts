import { Config } from "../types";
import ConfigItemViewModel, { ConfigItemViewModelType } from "./ConfigItemViewModel";

export interface ConfigViewModelType extends Config {
  getItems: () => ConfigItemViewModelType[];
  getLogoUrl: () => string;
}

const ConfigViewModel = (config: Config): ConfigViewModelType => {
  return {
    ...config,
    getItems: () => (config.items || []).map(item => ConfigItemViewModel(item)),
    getLogoUrl: () => config.logoUrl,
  }
}

export default ConfigViewModel;
