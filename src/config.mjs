// IMPORTANT NOTE:
//
// Please DO NOT hardcode private keys in your code.
// Private keys are secrets. Store private keys in a safe place (e.g. SecretsManager, Vault, ...).
// The below private keys are hardcoded here for the convenience of the demo.
// Please DO NOT hardcode private keys in your code.

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// let config;

// try {
//   config = JSON.parse(fs.readFileSync(path.join(__filename, '../../../config.json')));
//   console.info('[INFO]: config is imported.');
// } catch (e) {
//   config = {};
//   console.error('[ERROR]: facing error when parsing config.', e);
// }

// export default config;

import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables



export default {
  ISSUER_URL: process.env.ISSUER_URL || 'https://stg-id.singpass.gov.sg',
  CLIENT_ID: process.env.CLIENT_ID,
  REDIRECT_URI: process.env.REDIRECT_URI || 'https://BACKEND-URL-EXAMPLE.onrender.com/callback',
  SCOPES: process.env.SCOPES || 'openid uinfin name',
  KEYS: {
    PRIVATE_SIG_KEY: {
      alg: 'ES256',
      kty: 'EC',
      x: 'rOezyrzMsivOld-mf3GRj2nbX2Lqz5fDfeTtbDB23hI',
      y: 'Ecgzkn6eELiYPGrUHJohB89cyooeLUuewC-_w1dBtSY',
      crv: 'P-256',
      d: 'fctMG1QZ9uQsroWXfIzhxFhwprrCDuyGN5PjpOv3iuA',
      kid: 'sarah-sig-key',
    },
    PRIVATE_ENC_KEY: {
      alg: 'ECDH-ES+A256KW',
      kty: 'EC',
      x: 'qfa03d3Q14X6UUfQFgyVYB1JxQ5VfiuRpHZYgTnFbKw',
      y: 'cBrbJRW9qVZjvkCjmASSSyJde2-OZYkql-_5tgj9DZI',
      crv: 'P-256',
      d: 'FcxG_mzJwRa2vtzAGEHsteD9mbUBbLBeOoR6lfstYF4',
      kid: 'sarah-enc-key',
    },
    PUBLIC_SIG_KEY: {
      alg: 'ES256',
      kty: 'EC',
      x: 'rOezyrzMsivOld-mf3GRj2nbX2Lqz5fDfeTtbDB23hI',
      y: 'Ecgzkn6eELiYPGrUHJohB89cyooeLUuewC-_w1dBtSY',
      crv: 'P-256',
      use: 'sig',
      kid: 'sarah-sig-key',
    },
    PUBLIC_ENC_KEY: {
      alg: 'ECDH-ES+A256KW',
      kty: 'EC',
      x: 'qfa03d3Q14X6UUfQFgyVYB1JxQ5VfiuRpHZYgTnFbKw',
      y: 'cBrbJRW9qVZjvkCjmASSSyJde2-OZYkql-_5tgj9DZI',
      crv: 'P-256',
      use: 'enc',
      kid: 'sarah-enc-key',
    },
  },

  validateConfig: () => {
    if (!process.env.CLIENT_ID) throw new Error('CLIENT_ID is missing');
    if (!process.env.PRIVATE_SIG_KEY || !process.env.PRIVATE_ENC_KEY) {
      throw new Error('Private keys are missing in environment variables');
    }
  }
  
}






