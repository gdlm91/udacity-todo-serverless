import "source-map-support/register";

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import * as middy from "middy";
import { cors } from "middy/middlewares";

// import { getTodosForUser as getTodosForUser } from "../../businessLogic/todos";
// import { getUserId } from "../utils";

// TODO: Get all TODO items for a current user
export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Write your code here
    // const todos = "...";

    console.log(event);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "hello world" }),
    };
  }
);

handler.use(
  cors({
    credentials: true,
  })
);
