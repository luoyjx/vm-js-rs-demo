Deno.core.print("Hello, vmjs!\n");
logger.debug('some debug log');
logger.info('some info log');
logger.warn('some warn log');
logger.error('some error log');

const path = "./log.txt";
try {
  const contents = await vmjs.readFile(path);
  logger.info("Read from a file", contents);
} catch (err) {
  logger.error("Unable to read file", path, err);
}

await vmjs.writeFile(path, "I can write to a file.");
const contents = await vmjs.readFile(path);
logger.info("Read from a file", path, "contents:", contents);
logger.info("Removing file", path);
vmjs.removeFile(path);
logger.info("File removed");
