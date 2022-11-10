class Logger {
  private static instance: Logger;
  private constructor() {
  }
  public static getInstance(): Logger {
    if (Logger.instance == null) {
      Logger.instance = new Logger();
    };
    return Logger.instance
  };

  public info(msg: any) {
    console.log(msg)
  }
}

const log = Logger.getInstance();
log.info('test')