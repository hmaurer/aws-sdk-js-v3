import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput
} from "../commands/CreateLifecyclePolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput
} from "../commands/GetLifecyclePoliciesCommand";
import {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "../commands/GetLifecyclePolicyCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput
} from "../commands/UpdateLifecyclePolicyCommand";
import {
  CreateRule,
  CrossRegionCopyRetainRule,
  CrossRegionCopyRule,
  FastRestoreRule,
  InternalServerException,
  InvalidRequestException,
  LifecyclePolicy,
  LifecyclePolicySummary,
  LimitExceededException,
  PolicyDetails,
  ResourceNotFoundException,
  ResourceTypeValues,
  RetainRule,
  Schedule,
  Tag,
  _Parameters
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1_1CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/policies";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ExecutionRoleArn !== undefined && {
      ExecutionRoleArn: input.ExecutionRoleArn
    }),
    ...(input.PolicyDetails !== undefined && {
      PolicyDetails: serializeAws_restJson1_1PolicyDetails(
        input.PolicyDetails,
        context
      )
    }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagMap(input.Tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/policies/{PolicyId}";
  if (input.PolicyId !== undefined) {
    const labelValue: string = input.PolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PolicyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetLifecyclePoliciesCommand = async (
  input: GetLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/policies";
  const query: any = {
    ...(input.PolicyIds !== undefined && {
      policyIds: (input.PolicyIds || []).map(_entry => _entry)
    }),
    ...(input.ResourceTypes !== undefined && {
      resourceTypes: (input.ResourceTypes || []).map(_entry => _entry)
    }),
    ...(input.State !== undefined && { state: input.State }),
    ...(input.TagsToAdd !== undefined && {
      tagsToAdd: (input.TagsToAdd || []).map(_entry => _entry)
    }),
    ...(input.TargetTags !== undefined && {
      targetTags: (input.TargetTags || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/policies/{PolicyId}";
  if (input.PolicyId !== undefined) {
    const labelValue: string = input.PolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PolicyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagMap(input.Tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/policies/{PolicyId}";
  if (input.PolicyId !== undefined) {
    const labelValue: string = input.PolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PolicyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ExecutionRoleArn !== undefined && {
      ExecutionRoleArn: input.ExecutionRoleArn
    }),
    ...(input.PolicyDetails !== undefined && {
      PolicyDetails: serializeAws_restJson1_1PolicyDetails(
        input.PolicyDetails,
        context
      )
    }),
    ...(input.State !== undefined && { State: input.State })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: CreateLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLifecyclePolicyResponse",
    PolicyId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.PolicyId !== undefined && data.PolicyId !== null) {
    contents.PolicyId = data.PolicyId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLifecyclePolicyResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLifecyclePoliciesCommandError(
      output,
      context
    );
  }
  const contents: GetLifecyclePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePoliciesResponse",
    Policies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policies !== undefined && data.Policies !== null) {
    contents.Policies = deserializeAws_restJson1_1LifecyclePolicySummaryList(
      data.Policies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetLifecyclePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyResponse",
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = deserializeAws_restJson1_1LifecyclePolicy(
      data.Policy,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: UpdateLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLifecyclePolicyResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
    MutuallyExclusiveParameters: undefined,
    RequiredParameters: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (
    data.MutuallyExclusiveParameters !== undefined &&
    data.MutuallyExclusiveParameters !== null
  ) {
    contents.MutuallyExclusiveParameters = deserializeAws_restJson1_1ParameterList(
      data.MutuallyExclusiveParameters,
      context
    );
  }
  if (
    data.RequiredParameters !== undefined &&
    data.RequiredParameters !== null
  ) {
    contents.RequiredParameters = deserializeAws_restJson1_1ParameterList(
      data.RequiredParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
    ResourceIds: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceIds !== undefined && data.ResourceIds !== null) {
    contents.ResourceIds = deserializeAws_restJson1_1PolicyIdList(
      data.ResourceIds,
      context
    );
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const serializeAws_restJson1_1AvailabilityZoneList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1CreateRule = (
  input: CreateRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    }),
    ...(input.Times !== undefined && {
      Times: serializeAws_restJson1_1TimesList(input.Times, context)
    })
  };
};

const serializeAws_restJson1_1CrossRegionCopyRetainRule = (
  input: CrossRegionCopyRetainRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    })
  };
};

const serializeAws_restJson1_1CrossRegionCopyRule = (
  input: CrossRegionCopyRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.CmkArn !== undefined && { CmkArn: input.CmkArn }),
    ...(input.CopyTags !== undefined && { CopyTags: input.CopyTags }),
    ...(input.Encrypted !== undefined && { Encrypted: input.Encrypted }),
    ...(input.RetainRule !== undefined && {
      RetainRule: serializeAws_restJson1_1CrossRegionCopyRetainRule(
        input.RetainRule,
        context
      )
    }),
    ...(input.TargetRegion !== undefined && {
      TargetRegion: input.TargetRegion
    })
  };
};

const serializeAws_restJson1_1CrossRegionCopyRules = (
  input: CrossRegionCopyRule[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CrossRegionCopyRule(entry, context)
  );
};

const serializeAws_restJson1_1FastRestoreRule = (
  input: FastRestoreRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_restJson1_1AvailabilityZoneList(
        input.AvailabilityZones,
        context
      )
    }),
    ...(input.Count !== undefined && { Count: input.Count }),
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    })
  };
};

const serializeAws_restJson1_1_Parameters = (
  input: _Parameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludeBootVolume !== undefined && {
      ExcludeBootVolume: input.ExcludeBootVolume
    })
  };
};

const serializeAws_restJson1_1PolicyDetails = (
  input: PolicyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_restJson1_1_Parameters(input.Parameters, context)
    }),
    ...(input.PolicyType !== undefined && { PolicyType: input.PolicyType }),
    ...(input.ResourceTypes !== undefined && {
      ResourceTypes: serializeAws_restJson1_1ResourceTypeValuesList(
        input.ResourceTypes,
        context
      )
    }),
    ...(input.Schedules !== undefined && {
      Schedules: serializeAws_restJson1_1ScheduleList(input.Schedules, context)
    }),
    ...(input.TargetTags !== undefined && {
      TargetTags: serializeAws_restJson1_1TargetTagList(
        input.TargetTags,
        context
      )
    })
  };
};

const serializeAws_restJson1_1ResourceTypeValuesList = (
  input: (ResourceTypeValues | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1RetainRule = (
  input: RetainRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Count !== undefined && { Count: input.Count }),
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    })
  };
};

const serializeAws_restJson1_1Schedule = (
  input: Schedule,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTags !== undefined && { CopyTags: input.CopyTags }),
    ...(input.CreateRule !== undefined && {
      CreateRule: serializeAws_restJson1_1CreateRule(input.CreateRule, context)
    }),
    ...(input.CrossRegionCopyRules !== undefined && {
      CrossRegionCopyRules: serializeAws_restJson1_1CrossRegionCopyRules(
        input.CrossRegionCopyRules,
        context
      )
    }),
    ...(input.FastRestoreRule !== undefined && {
      FastRestoreRule: serializeAws_restJson1_1FastRestoreRule(
        input.FastRestoreRule,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RetainRule !== undefined && {
      RetainRule: serializeAws_restJson1_1RetainRule(input.RetainRule, context)
    }),
    ...(input.TagsToAdd !== undefined && {
      TagsToAdd: serializeAws_restJson1_1TagsToAddList(input.TagsToAdd, context)
    }),
    ...(input.VariableTags !== undefined && {
      VariableTags: serializeAws_restJson1_1VariableTagsList(
        input.VariableTags,
        context
      )
    })
  };
};

const serializeAws_restJson1_1ScheduleList = (
  input: Schedule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Schedule(entry, context));
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1TagsToAddList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const serializeAws_restJson1_1TargetTagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const serializeAws_restJson1_1TimesList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1VariableTagsList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const deserializeAws_restJson1_1AvailabilityZoneList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CreateRule = (
  output: any,
  context: __SerdeContext
): CreateRule => {
  let contents: any = {
    __type: "CreateRule",
    Interval: undefined,
    IntervalUnit: undefined,
    Times: undefined
  };
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  if (output.Times !== undefined && output.Times !== null) {
    contents.Times = deserializeAws_restJson1_1TimesList(output.Times, context);
  }
  return contents;
};

const deserializeAws_restJson1_1CrossRegionCopyRetainRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRetainRule => {
  let contents: any = {
    __type: "CrossRegionCopyRetainRule",
    Interval: undefined,
    IntervalUnit: undefined
  };
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  return contents;
};

const deserializeAws_restJson1_1CrossRegionCopyRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRule => {
  let contents: any = {
    __type: "CrossRegionCopyRule",
    CmkArn: undefined,
    CopyTags: undefined,
    Encrypted: undefined,
    RetainRule: undefined,
    TargetRegion: undefined
  };
  if (output.CmkArn !== undefined && output.CmkArn !== null) {
    contents.CmkArn = output.CmkArn;
  }
  if (output.CopyTags !== undefined && output.CopyTags !== null) {
    contents.CopyTags = output.CopyTags;
  }
  if (output.Encrypted !== undefined && output.Encrypted !== null) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.RetainRule !== undefined && output.RetainRule !== null) {
    contents.RetainRule = deserializeAws_restJson1_1CrossRegionCopyRetainRule(
      output.RetainRule,
      context
    );
  }
  if (output.TargetRegion !== undefined && output.TargetRegion !== null) {
    contents.TargetRegion = output.TargetRegion;
  }
  return contents;
};

const deserializeAws_restJson1_1CrossRegionCopyRules = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CrossRegionCopyRule(entry, context)
  );
};

const deserializeAws_restJson1_1FastRestoreRule = (
  output: any,
  context: __SerdeContext
): FastRestoreRule => {
  let contents: any = {
    __type: "FastRestoreRule",
    AvailabilityZones: undefined,
    Count: undefined,
    Interval: undefined,
    IntervalUnit: undefined
  };
  if (
    output.AvailabilityZones !== undefined &&
    output.AvailabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1AvailabilityZoneList(
      output.AvailabilityZones,
      context
    );
  }
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicy = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy => {
  let contents: any = {
    __type: "LifecyclePolicy",
    DateCreated: undefined,
    DateModified: undefined,
    Description: undefined,
    ExecutionRoleArn: undefined,
    PolicyArn: undefined,
    PolicyDetails: undefined,
    PolicyId: undefined,
    State: undefined,
    StatusMessage: undefined,
    Tags: undefined
  };
  if (output.DateCreated !== undefined && output.DateCreated !== null) {
    contents.DateCreated = new Date(output.DateCreated);
  }
  if (output.DateModified !== undefined && output.DateModified !== null) {
    contents.DateModified = new Date(output.DateModified);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.ExecutionRoleArn !== undefined &&
    output.ExecutionRoleArn !== null
  ) {
    contents.ExecutionRoleArn = output.ExecutionRoleArn;
  }
  if (output.PolicyArn !== undefined && output.PolicyArn !== null) {
    contents.PolicyArn = output.PolicyArn;
  }
  if (output.PolicyDetails !== undefined && output.PolicyDetails !== null) {
    contents.PolicyDetails = deserializeAws_restJson1_1PolicyDetails(
      output.PolicyDetails,
      context
    );
  }
  if (output.PolicyId !== undefined && output.PolicyId !== null) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicySummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary => {
  let contents: any = {
    __type: "LifecyclePolicySummary",
    Description: undefined,
    PolicyId: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.PolicyId !== undefined && output.PolicyId !== null) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicySummaryList = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LifecyclePolicySummary(entry, context)
  );
};

const deserializeAws_restJson1_1ParameterList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1_Parameters = (
  output: any,
  context: __SerdeContext
): _Parameters => {
  let contents: any = {
    __type: "Parameters",
    ExcludeBootVolume: undefined
  };
  if (
    output.ExcludeBootVolume !== undefined &&
    output.ExcludeBootVolume !== null
  ) {
    contents.ExcludeBootVolume = output.ExcludeBootVolume;
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyDetails = (
  output: any,
  context: __SerdeContext
): PolicyDetails => {
  let contents: any = {
    __type: "PolicyDetails",
    Parameters: undefined,
    PolicyType: undefined,
    ResourceTypes: undefined,
    Schedules: undefined,
    TargetTags: undefined
  };
  if (output.Parameters !== undefined && output.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1_1_Parameters(
      output.Parameters,
      context
    );
  }
  if (output.PolicyType !== undefined && output.PolicyType !== null) {
    contents.PolicyType = output.PolicyType;
  }
  if (output.ResourceTypes !== undefined && output.ResourceTypes !== null) {
    contents.ResourceTypes = deserializeAws_restJson1_1ResourceTypeValuesList(
      output.ResourceTypes,
      context
    );
  }
  if (output.Schedules !== undefined && output.Schedules !== null) {
    contents.Schedules = deserializeAws_restJson1_1ScheduleList(
      output.Schedules,
      context
    );
  }
  if (output.TargetTags !== undefined && output.TargetTags !== null) {
    contents.TargetTags = deserializeAws_restJson1_1TargetTagList(
      output.TargetTags,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ResourceTypeValuesList = (
  output: any,
  context: __SerdeContext
): (ResourceTypeValues | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1RetainRule = (
  output: any,
  context: __SerdeContext
): RetainRule => {
  let contents: any = {
    __type: "RetainRule",
    Count: undefined,
    Interval: undefined,
    IntervalUnit: undefined
  };
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  return contents;
};

const deserializeAws_restJson1_1Schedule = (
  output: any,
  context: __SerdeContext
): Schedule => {
  let contents: any = {
    __type: "Schedule",
    CopyTags: undefined,
    CreateRule: undefined,
    CrossRegionCopyRules: undefined,
    FastRestoreRule: undefined,
    Name: undefined,
    RetainRule: undefined,
    TagsToAdd: undefined,
    VariableTags: undefined
  };
  if (output.CopyTags !== undefined && output.CopyTags !== null) {
    contents.CopyTags = output.CopyTags;
  }
  if (output.CreateRule !== undefined && output.CreateRule !== null) {
    contents.CreateRule = deserializeAws_restJson1_1CreateRule(
      output.CreateRule,
      context
    );
  }
  if (
    output.CrossRegionCopyRules !== undefined &&
    output.CrossRegionCopyRules !== null
  ) {
    contents.CrossRegionCopyRules = deserializeAws_restJson1_1CrossRegionCopyRules(
      output.CrossRegionCopyRules,
      context
    );
  }
  if (output.FastRestoreRule !== undefined && output.FastRestoreRule !== null) {
    contents.FastRestoreRule = deserializeAws_restJson1_1FastRestoreRule(
      output.FastRestoreRule,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RetainRule !== undefined && output.RetainRule !== null) {
    contents.RetainRule = deserializeAws_restJson1_1RetainRule(
      output.RetainRule,
      context
    );
  }
  if (output.TagsToAdd !== undefined && output.TagsToAdd !== null) {
    contents.TagsToAdd = deserializeAws_restJson1_1TagsToAddList(
      output.TagsToAdd,
      context
    );
  }
  if (output.VariableTags !== undefined && output.VariableTags !== null) {
    contents.VariableTags = deserializeAws_restJson1_1VariableTagsList(
      output.VariableTags,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ScheduleList = (
  output: any,
  context: __SerdeContext
): Schedule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Schedule(entry, context)
  );
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1TagsToAddList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TargetTagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TimesList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1VariableTagsList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
