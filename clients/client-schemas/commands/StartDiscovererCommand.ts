import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { StartDiscovererRequest, StartDiscovererResponse } from "../models/index";
import {
  deserializeAws_restJson1StartDiscovererCommand,
  serializeAws_restJson1StartDiscovererCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StartDiscovererCommandInput = StartDiscovererRequest;
export type StartDiscovererCommandOutput = StartDiscovererResponse & __MetadataBearer;

export class StartDiscovererCommand extends $Command<
  StartDiscovererCommandInput,
  StartDiscovererCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDiscovererCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDiscovererCommandInput, StartDiscovererCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDiscovererCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDiscovererCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDiscovererCommandOutput> {
    return deserializeAws_restJson1StartDiscovererCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
