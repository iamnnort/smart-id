import { randomBytes } from 'crypto';
import { config } from './config';
import { GenerateParams } from './index.types';

export const generate = (params: GenerateParams = {}) => {
  const sugarSize = params?.size || config.sugarSize;
  const sugar = randomBytes(sugarSize);

  const hash = [];

  for (
    let sugarCharIndex = 0;
    sugarCharIndex < sugarSize;
    sugarCharIndex += 1
  ) {
    const templateChatIndex = sugar[sugarCharIndex] % config.template.length;
    hash[sugarCharIndex] = config.template[templateChatIndex];
  }

  if (!params.prefix) {
    return hash.join('');
  }

  return [params.prefix, hash.join('')].join('_');
};
