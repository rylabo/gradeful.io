import { ConfigurableModuleBuilder } from '@nestjs/common';
import { JsonldFramingModuleOptions } from './jsonld-framing-module-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<JsonldFramingModuleOptions>({
    moduleName: 'JsonldFraming',
  }).build();
