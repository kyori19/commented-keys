export const invalidUserNameError = (userName: string) => `
# Invalid username "${userName}" requested.
`.trim();

export const unknownError = (message: string) => `
# Unknown error happened: ${message}
`.trim();

export const commentedKeys = (userName: string, keys: string) => `
# authorized_keys for GitHub account ${userName}
${keys}
`.trim();

export const joinMessage = (domain: string, message: string) => `
${message}
# Generated with commented-keys (${domain}) at ${(new Date()).toISOString()}

`.trimStart();
