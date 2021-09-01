import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import "source-map-support/register";
import * as middy from "middy";
import { cors, httpErrorHandler } from "middy/middlewares";

import { UpdateTodoRequest } from "../../requests/UpdateTodoRequest";
import { updateTodo } from "../../helpers/todos";
import { getUserId } from "../utils";

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId;
    const userId = getUserId(event);
    const updatedTodo: UpdateTodoRequest = JSON.parse(event.body);

    await updateTodo(todoId, userId, updatedTodo);

    return {
      statusCode: 204,
      body: "",
    };
  }
);

handler.use(httpErrorHandler()).use(
  cors({
    credentials: true,
  })
);
