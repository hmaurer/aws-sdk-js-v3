import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateConfigurationSetReputationMetricsEnabledRequest } from "../models/index";
import {
  deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand,
  serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand,
} from "../protocols/Aws_query";
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

export type UpdateConfigurationSetReputationMetricsEnabledCommandInput = UpdateConfigurationSetReputationMetricsEnabledRequest;
export type UpdateConfigurationSetReputationMetricsEnabledCommandOutput = __MetadataBearer;

export class UpdateConfigurationSetReputationMetricsEnabledCommand extends $Command<
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigurationSetReputationMetricsEnabledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    UpdateConfigurationSetReputationMetricsEnabledCommandOutput
  > {
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

  private serialize(
    input: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> {
    return deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
