import { ContextDefinition } from 'jsonld';
import { Frame } from 'jsonld/jsonld-spec';

export interface JsonldFramingModuleOptions {
  context: ContextDefinition;
  frame: Frame;
}
