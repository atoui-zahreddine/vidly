import Raven from "raven-js";

const init = () => {
  Raven.config(
    "https://dc644ebacd794145970f7a41260923ba@o501530.ingest.sentry.io/5582732",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
};

const log = (error) => {
  Raven.captureException(error);
};
const logger = {
  init,
  log,
};
export default logger;
