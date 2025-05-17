import { Config } from "../types";

export const saveConfig = (config: Config): void => {
  localStorage.setItem('config', JSON.stringify(config));
};

export const getConfig = (): Config | [] => {
  const config = localStorage.getItem('config');
  return config ? JSON.parse(config) : []
};

export const clearConfig = (): void => {
  localStorage.removeItem('config');
};
