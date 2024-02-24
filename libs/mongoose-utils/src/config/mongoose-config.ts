export function mongooseConfig(): string {
  const stringArray: string[] = [];
  stringArray.push(process.env.DATABASE_TYPE + '://');
  if (process.env.DATABASE_USERNAME !== '') {
    stringArray.push(
      process.env.DATABASE_USERNAME + ':' + process.env.DATABASE_PASSWORD + '@',
    );
  }
  if (process.env.DATABASE_HOST && process.env.DATABASE_HOST !== '') {
    stringArray.push(process.env.DATABASE_HOST);
  }
  if (process.env.DATABASE_PORT && process.env.DATABASE_PORT !== '') {
    stringArray.push(':' + process.env.DATABASE_PORT);
  }
  if (process.env.DATABASE_NAME && process.env.DATABASE_NAME !== '') {
    stringArray.push('/' + process.env.DATABASE_NAME);
  }
  stringArray.push(
    '?' +
      'authSource=' +
      process.env.DATABASE_AUTH_DB +
      '&' +
      'connectTimeoutMS=' +
      process.env.DATABASE_CONNECTION_TIME_OUT +
      '&' +
      'waitQueueTimeoutMS=' +
      process.env.DATABASE_ACQUIRE_TIME_OUT +
      '&' +
      'maxPoolSize=' +
      process.env.DATABASE_CONNECTION_LIMIT,
  );
  return stringArray.join('');
}
