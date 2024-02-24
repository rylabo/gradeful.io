import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './jsonld-framing.module-definition';
import { JsonldFramingPipe } from './jsonld-framing.pipe';

@Global()
@Module({
  providers: [JsonldFramingPipe],
  exports: [JsonldFramingPipe],
})
export class JsonldFramingModule extends ConfigurableModuleClass {}
