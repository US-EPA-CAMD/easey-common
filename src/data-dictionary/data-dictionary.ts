import { existsSync, readFileSync } from 'fs';
import { PropertyKeys } from './property-keys.enum';
import { OverrideKeys } from './override-keys.enum';

export class DataDictionary {
  private static data = DataDictionary.load();
  
  private static load() {
    const path = `${__dirname}/../../../../data-dictionary.json`;

    if (existsSync(path)) {
      return JSON.parse(readFileSync(path, 'utf8'));
    } else {
      console.log('data-dictionary.json is mising and can not be loaded...');
      console.log('To properly create swagger documentation run "./.profile" in Git Bash or download data-dictionary.json using the content api and place in the "app" root');
    }

    return {};
  }

  static get(key: PropertyKeys, overrideKey: OverrideKeys) {
    let overrides = null;
    const item = DataDictionary.data[key];

    if (item) {
      const properties = {
        label: item.label,
        value: item.value??key,
        description: item.description,
        examples: item.examples,
        example: item.example,
      };

      if (item.overrides) {
        overrides = item.overrides[overrideKey];

        return {
          ...properties,
          ...overrides,
        }
      }

      return properties;
    }

    return {};
  }

  static getFieldLables(key: PropertyKeys, overrideKey: OverrideKeys) {
    const properties = DataDictionary.get(key, overrideKey);
    delete properties.description;
    delete properties.examples;
    delete properties.example;
    return properties;
  }

  static getMetadata(
    key: PropertyKeys,
    overrideKey: OverrideKeys,
    excludeExampleData?: boolean
  ) {
    const properties = DataDictionary.get(key, overrideKey);

    delete properties.label;
    delete properties.value;
    
    if (excludeExampleData || !properties.examples) {
      delete properties.examples;
    }
    
    if (excludeExampleData || !properties.example || properties.examples) {
      delete properties.example;
    }
    
    return properties;
  }
}