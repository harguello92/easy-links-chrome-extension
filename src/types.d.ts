
interface ConfigItemLink {
  name: string;
  url: string;
}

export interface ConfigItem {
  name: string;
  description?: string;
  links: ConfigItemLink[];
}

export interface Config {
  logo: string;
  items: ConfigItem[];
}

