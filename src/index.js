/* @flow */

import envalid, { str } from 'envalid';
import winston from 'winston';

const env = envalid.cleanEnv(process.env, {
  LOG_LEVEL: str({ default: 'debug' }),
});

winston.cli();
winston.level = env.LOG_LEVEL;

winston.info('exit');
