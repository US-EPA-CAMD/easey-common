import { existsSync, readFileSync } from 'fs';

export class DataDictionary {
  static properties = DataDictionary.load();

  private static load() {
    const path = '../../../../data-dictionary.json';

    if (existsSync(path)) {
      return JSON.parse(readFileSync(path, 'utf8'));
    } else {
      console.log('data-dictionary.json is mising and can not be loaded...');
      console.log('To properly create swagger documentation download data-dictionary.json using the content api and place in the "app" root');
    }

    return {};
  }

  static getMetadata(property?: any, metadata?: any) {
    const noMetadata = { description: null, example: null };
  
    if (!property) {
      return noMetadata;
    }
 
    if (!metadata) {
      return property.metadata.default;
    }
  
    return metadata;
  }
}
