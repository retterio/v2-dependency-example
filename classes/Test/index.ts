import RDK, { Data, Response } from "@retter/rdk";
import * as TSUtils from "ts-utils"
import products from 'ts-utils/products.json'
const JSUtils = require("js-utils");

export async function authorizer(data: Data): Promise<Response> {
    return { statusCode: 200 };
}

export async function init(data: Data): Promise<Data> {
    data.state.public = {}
    return data
}

export async function getState(data: Data): Promise<Response> {
    return { statusCode: 200, body: data.state };
}

export async function sayHello(data: Data): Promise<Data> {
  data.response = {
      statusCode: 200,
      body: { products, hello: TSUtils.hello(), subHello: TSUtils.helloSub(), testHello: JSUtils.hello() },
  };
  return data;
}
