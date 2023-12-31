import { createServer } from "http2";
import { connectNodeAdapter } from "@bufbuild/connect-node";
import routes from "./entity-service/service.js";

const server = createServer(connectNodeAdapter({ routes }));

export default server;
