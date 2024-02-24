import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { JsonLdDocument } from 'jsonld';
import * as jsonld from 'jsonld';
import { JsonldFramingModuleOptions } from './jsonld-framing-module-options.interface';
import { MODULE_OPTIONS_TOKEN } from './jsonld-framing.module-definition';
import { Frame } from 'jsonld/jsonld-spec';

@Injectable()
export class JsonldFramingPipe implements PipeTransform {
  private _frame: Frame;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: JsonldFramingModuleOptions,
  ) {
    this._frame = options.frame;
    this._frame['@context'] = options.context;
  }

  async transform(value: JsonLdDocument, metadata: ArgumentMetadata) {
    const results = await jsonld.frame(value, this._frame, {
      omitGraph: false,
    });
    if (!results) return [];
    return results['@graph'];
  }
}
