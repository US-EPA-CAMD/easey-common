import { uuidv4 } from 'uuid';
import { existsSync, readFileSync } from 'fs';

export class DataDictionaryService {
  private static propertyData = DataDictionaryService.load();

  private static load() {
    if (existsSync('src/data-dictionary.json')) {
      return JSON.parse(
        readFileSync('src/data-dictionary.json', 'utf8')
      );
    } else if (existsSync('./data-dictionary.json')) {
      return JSON.parse(
        readFileSync('./data-dictionary.json', 'utf8')
      );
    } else {
      console.log('data-dictionary.json is mising and can not be loaded...');
      console.log('To properly create swagger documentation download data-dictionary.json using the content api and place in app root');
    }

    return null;
  }

  static getDescription(propertyName: string, metadataKey: string = 'default') {
    return DataDictionaryService.getMetadata(propertyName, metadataKey).description;
  }

  static getMetadata(propertyName: string, metadataKey: string = 'default') {
    let property: any;
    let noMetadata = { description: null, example: null };

    if (propertyName === 'id') {
      return {
        description: `Primary unique identifier of a ${metadataKey} record. `,
        example: uuidv4(),
      };
    }

    if (!DataDictionaryService.propertyData) {
      return noMetadata;
    } else {
      property = DataDictionaryService.propertyData[propertyName];
      if (!property) {
        return noMetadata;
      }
    }

    let metadata = property.metadata[metadataKey];

    if (!metadata) {
      return property.metadata.default;
    }

    return metadata;
  }
}
