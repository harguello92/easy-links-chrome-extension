
interface ConfigItemLink {
  name: string;
  url: string;
  CSSClasses?: string;
  checkable?: boolean;
}

export interface ConfigItem {
  name: string;
  links: ConfigItemLink[];
}

export interface Config {
  logoUrl: string;
  items: ConfigItem[];
}

