((globalThis) => {
  const core = Deno.core;

  function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
  }

  function logPrint (level, ...args) {
    core.print(`${new Date().toLocaleString()} [${level}] ${argsToMessage(...args)}\n`);
  }

  globalThis.logger = {
    debug: (...args) => logPrint("DEBUG", ...args),
    info: (...args) => logPrint("INFO", ...args),
    warn: (...args) => logPrint("WARN", ...args),
    error: (...args) => logPrint("ERROR", ...args),
  };

  globalThis.vmjs = {
    readFile: (path) => {
      return core.opAsync("op_read_file", path);
    },
    writeFile: (path, contents) => {
      return core.opAsync("op_write_file", path, contents);
    },
    removeFile: (path) => {
      return core.opSync("op_remove_file", path);
    },
  };
})(globalThis)