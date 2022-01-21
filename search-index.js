var searchIndex = JSON.parse('{\
"extension_fn":{"doc":"","t":[5,5],"n":["main","my_extension"],"q":["extension_fn",""],"d":["",""],"i":[0,0],"f":[[[],["result",4,[["error",6]]]],[[["lambdaevent",3]]]],"p":[]},\
"extension_trait":{"doc":"","t":[3,11,11,11,11,11,11,12,5,11,11,11,11],"n":["MyExtension","borrow","borrow_mut","call","default","from","into","invoke_count","main","poll_ready","try_from","try_into","type_id"],"q":["extension_trait","","","","","","","","","","","",""],"d":["","","","","","","","","","","","",""],"i":[0,1,1,1,1,1,1,1,0,1,1,1,1],"f":[null,[[]],[[]],[[["lambdaevent",3]]],[[],["myextension",3]],[[]],[[]],null,[[],["result",4,[["error",6]]]],[[["context",3]],["poll",4,[["result",4]]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[3,"MyExtension"]]},\
"http_fn":{"doc":"","t":[5,5],"n":["handler","main"],"q":["http_fn",""],"d":["",""],"i":[0,0],"f":[[[["request",6]]],[[],["result",4,[["error",6]]]]],"p":[]},\
"http_trait":{"doc":"","t":[3,11,11,11,11,11,11,12,5,11,11,11,11],"n":["MyHandler","borrow","borrow_mut","call","default","from","into","invoke_count","main","poll_ready","try_from","try_into","type_id"],"q":["http_trait","","","","","","","","","","","",""],"d":["","","","","","","","","","","","",""],"i":[0,1,1,1,1,1,1,1,0,1,1,1,1],"f":[null,[[]],[[]],[[["request",6]]],[[],["myhandler",3]],[[]],[[]],null,[[],["result",4,[["error",6]]]],[[["context",3]],["poll",4,[["result",4]]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[3,"MyHandler"]]},\
"lambda_extension":{"doc":"This module includes utilities to create Lambda Runtime …","t":[6,16,3,16,13,3,3,4,16,3,3,8,13,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,12,12,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,12,10,11,12,0,5,11,5,12,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,12,11,11,12,12,3,11,11,12,12,5,11,11,5,11,11,12,11,11,11],"n":["Error","Error","ExtensionError","Future","Invoke","InvokeEvent","LambdaEvent","NextEvent","Response","Runtime","RuntimeBuilder","Service","Shutdown","ShutdownEvent","Tracing","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","builder","call","clone","clone_into","deadline_ms","deadline_ms","default","deserialize","deserialize","deserialize","deserialize","eq","extension_id","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","into","into","into","into","into","into","into","into","invoked_function_arn","ne","next","poll_ready","register","request_id","requests","run","run","service_fn","shutdown_reason","to_owned","to_string","tracing","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","value","with_events","with_extension_name","0","0","ErrorRequest","borrow","borrow_mut","error_message","error_type","exit_error","fmt","from","init_error","into","serialize","stack_trace","try_from","try_into","type_id"],"q":["lambda_extension","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","lambda_extension::NextEvent","","lambda_extension::requests","","","","","","","","","","","","","",""],"d":["Error type that extensions may result in","Errors produced by the service.","Simple error that encapsulates human readable descriptions","The future response value.","Payload when the event happens in the INVOKE phase","Event received when there is a new Lambda invocation.","Wrapper with information about the next event that the …","Event that the extension receives in either the INVOKE or …","Responses given by the service.","The Runtime handles all the incoming extension requests","Builder to construct a new extension <code>Runtime</code>","An asynchronous function from a <code>Request</code> to a <code>Response</code>.","Payload when the event happens in the SHUTDOWN phase","Event received when a Lambda function shuts down.","Request tracing information","","","","","","","","","","","","","","","","","Create a <code>RuntimeBuilder</code> to initialize the <code>Runtime</code>","Process the request and return the response asynchronously.","","","The time that the function times out","The time that the function times out","","","","","","","ID assigned to this extension by the Lambda Runtime","","","","","","","","","","","","","","","","","","","","","","","The function’s Amazon Resource Name","","Next incoming event","Returns <code>Poll::Ready(Ok(()))</code> when the service is able to …","Initialize and register the extension in the Extensions API","The ID assigned to the Lambda request","Include several request builders to interact with the …","Execute the given extension","Execute the given extension. Register the extension with …","Returns a new <code>ServiceFn</code> with the given closure.","The reason why the function terminates It can be SPINDOWN, …","","","The request tracing information","","","","","","","","","","","","","","","","","The type of tracing exposed to the extension","","","","","","","","","The span value","Create a new <code>RuntimeBuilder</code> with a list of given events. …","Create a new <code>RuntimeBuilder</code> with a given extension name","","","Payload to send error information to the Extensions API.","","","Human readable error description","The type of error to categorize","Create a new exit error request to send to the Extensions …","","","Create a new init error request to send to the Extensions …","","","The error backtrace","","",""],"i":[0,1,0,1,2,0,0,0,1,0,0,0,2,0,0,3,4,5,6,7,8,2,9,3,4,5,6,7,8,2,9,4,1,5,5,7,8,9,6,7,8,2,5,3,5,5,6,7,8,2,3,4,5,6,7,8,2,9,3,4,5,6,7,8,2,9,7,5,3,1,9,7,0,0,4,0,8,5,5,7,3,4,5,6,7,8,2,9,3,4,5,6,7,8,2,9,6,3,4,5,6,7,8,2,9,6,9,9,10,11,0,12,12,12,12,0,12,12,0,12,12,12,12,12,12],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["runtimebuilder",3]],[[]],[[],["extensionerror",3]],[[]],null,null,[[],["runtimebuilder",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["extensionerror",3]],["bool",15]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[["extensionerror",3]],["bool",15]],null,[[["context",3]],["poll",4,[["result",4]]]],[[]],null,null,[[]],[[]],[[],["servicefn",3]],null,[[]],[[],["string",3]],null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,[[]],[[["str",15]]],null,null,null,[[]],[[]],null,null,[[["str",15],["str",15],["option",4,[["errorrequest",3]]]],["result",4,[["request",3,[["body",3]]],["error",6]]]],[[["formatter",3]],["result",6]],[[]],[[["str",15],["str",15],["option",4,[["errorrequest",3]]]],["result",4,[["request",3,[["body",3]]],["error",6]]]],[[]],[[],["result",4]],null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[8,"Service"],[4,"NextEvent"],[3,"LambdaEvent"],[3,"Runtime"],[3,"ExtensionError"],[3,"Tracing"],[3,"InvokeEvent"],[3,"ShutdownEvent"],[3,"RuntimeBuilder"],[13,"Invoke"],[13,"Shutdown"],[3,"ErrorRequest"]]},\
"lambda_http":{"doc":"Enriches the <code>lambda</code> crate with <code>http</code> types targeting AWS ALB…","t":[13,4,3,13,6,16,16,8,6,3,16,8,3,13,11,11,11,11,11,11,11,11,11,11,11,11,10,12,11,11,11,11,12,11,11,11,11,11,11,11,12,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,10,11,12,11,11,11,11,11,11,11,11,11,10,11,0,12,5,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,13,4,8,13,11,11,11,11,11,11,10,10,10,10,10,11,10,11,11,11,11,10,10,10,12,12,13,3,13,3,13,3,3,3,3,4,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,12,12,12,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12],"n":["Binary","Body","Context","Empty","Error","Error","Future","IntoResponse","Request","Response","Response","Service","StrMap","Text","as_ref","body","body_mut","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","builder","call","client_context","clone","clone","clone_into","clone_into","deadline","default","default","default","default","deref","deserialize","deserialize","env_config","eq","eq","eq","ext","extensions","extensions_mut","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from_parts","get","get_all","headers","headers_mut","identity","into","into","into","into","into_body","into_parts","into_response","into_response","invoked_function_arn","is_empty","is_end_stream","iter","map","ne","ne","ne","new","poll_data","poll_ready","poll_trailers","request","request_id","run","serialize","serialize","service_fn","size_hint","status","status_mut","to_owned","to_owned","to_query_string","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","version","version_mut","with_config","xray_trace_id","0","0","Json","PayloadError","RequestExt","WwwFormUrlEncoded","borrow","borrow_mut","fmt","fmt","from","into","lambda_context","path_parameters","payload","query_string_parameters","request_context","source","stage_variables","to_string","try_from","try_into","type_id","with_lambda_context","with_path_parameters","with_query_string_parameters","0","0","Alb","AlbRequestContext","ApiGateway","ApiGatewayRequestContext","ApiGatewayV2","ApiGatewayV2RequestContext","Elb","Http","Identity","RequestContext","access_key","account_id","account_id","account_id","api_id","api_id","api_key","apiid","authorizer","authorizer","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","caller","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cognito_authentication_provider","cognito_authentication_type","cognito_identity_id","cognito_identity_pool_id","default","default","default","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","domain_name","domain_name","domain_prefix","domain_prefix","elb","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from_reader","from_str","http","http_method","identity","into","into","into","into","into","into","into","method","path","protocol","protocol","request_id","request_id","request_time","request_time_epoch","resource_id","resource_path","route_key","source_ip","source_ip","stage","stage","target_group_arn","time","time_epoch","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","user","user_agent","user_agent","user_arn","0","0","0"],"q":["lambda_http","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","lambda_http::Body","","lambda_http::ext","","","","","","","","","","","","","","","","","","","","","","","","lambda_http::ext::PayloadError","","lambda_http::request","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","lambda_http::request::RequestContext","",""],"d":["A body containing binary data","Representation of http request and response bodies as …","The Lambda function execution context. The values in this …","An empty body","Error type that lambdas may result in","Errors produced by the service.","The future response value.","A conversion of self into a <code>Response&lt;Body&gt;</code> for various …","Type alias for <code>http::Request</code>s with a fixed <code>Body</code> type","Represents an HTTP response","Responses given by the service.","An asynchronous function from a <code>Request</code> to a <code>Response</code>.","A read-only view into a map of string data which may …","A body containing string data","","Returns a reference to the associated HTTP body.","Returns a mutable reference to the associated HTTP body.","","","","","","","","","Creates a new builder-style object to manufacture a …","Process the request and return the response asynchronously.","The client context object sent by the AWS mobile SDK. This …","","","","","The execution deadline for the current invocation in …","","","","","","","","Lambda function configuration from the local environment …","","","","Extension methods for <code>http::Request</code> types","Returns a reference to the associated extensions.","Returns a mutable reference to the associated extensions.","","","","","","","","","","","","","","","","","Creates a new <code>Response</code> with the given head and body","Return a named value where available. If there is more …","Return all values associated with name where available","Returns a reference to the associated header field map.","Returns a mutable reference to the associated header field …","The Cognito identity that invoked the function. This field …","","","","","Consumes the response, returning just the body.","Consumes the response returning the head and body parts.","Return a translation of <code>self</code> into a <code>Response&lt;Body&gt;</code>","","The ARN of the Lambda function being invoked.","Return true if the underlying map is empty","","Return an iterator over keys and values","Consumes the response returning a new response with body …","","","","Creates a new blank <code>Response</code> with the body","","Returns <code>Poll::Ready(Ok(()))</code> when the service is able to …","","ALB and API Gateway request adaptations","The AWS request ID generated by the Lambda service.","Starts the Lambda Rust runtime and begins polling for …","","","Returns a new <code>ServiceFn</code> with the given closure.","","Returns the <code>StatusCode</code>.","Returns a mutable reference to the associated <code>StatusCode</code>.","","","Return the URI query representation for this map","","","","","","","","","","","","","","Returns a reference to the associated version.","Returns a mutable reference to the associated version.","Add environment details to the context by setting …","The X-Ray trace ID for the current invocation.","","","Returned when <code>application/json</code> bodies fail to deserialize …","Request payload deserialization errors","Extentions for <code>lambda_http::Request</code> structs that provide …","Returned when <code>application/x-www-form-urlencoded</code> bodies …","","","","","","","Return the Lambda function context associated with the …","Return pre-extracted path parameters, parameter provided …","Return the Result of a payload parsed into a serde …","Return pre-parsed http query string parameters, parameters …","Return request context data assocaited with the ALB or API …","","Return stage variables associated with the API gateway …","","","","","Configures instance with lambda context","Configures instance with path parameters under #[cfg(test)]…","Configures instance with query string parameters under #[…","","","ALB request context","Elastic load balancer context information","API Gateway request context","See context-variable-reference for more detail.","API Gateway v2 request context","See context-variable-reference for more detail.","Elastic load balancer context information","Http information captured API Gateway v2 request context","Identity assoicated with API Gateway request","Event request context as an enumeration of request contexts","Undocumented. Can be the API key ID associated with an API …","The API owner’s AWS account ID.","The API owner’s AWS account ID.","The AWS account ID associated with the request.","The identifier API Gateway assigns to your API.","The identifier API Gateway assigns to your API.","For API methods that require an API key, this variable is …","The identifier API Gateway assigns to your API.","The stringified value of the specified key-value pair of …","The stringified value of the specified key-value pair of …","","","","","","","","","","","","","","","The principal identifier of the caller making the request.","","","","","","","","","","","","","","","A comma-separated list of the Amazon Cognito …","The Amazon Cognito authentication type of the caller …","The Amazon Cognito identity ID of the caller making the …","The Amazon Cognito identity pool ID of the caller making …","","","","","","","","","","","The full domain name used to invoke the API. This should …","The full domain name used to invoke the API. This should …","The first label of the $context.domainName. This is often …","The first label of the $context.domainName. This is often …","Elastic load balancer context information","","","","","","","","","","","","","","","Deserializes a <code>Request</code> from a <code>Read</code> impl providing JSON …","Deserializes a <code>Request</code> from a string of JSON text.","The HTTP method used.","The HTTP method used. Valid values include: DELETE, GET, …","Cofnito identity information","","","","","","","","The HTTP method used. Valid values include: DELETE, GET, …","The request path. For example, for a non-proxy request URL …","The request protocol, for example, HTTP/1.1.","The request protocol, for example, HTTP/1.1.","The ID that API Gateway assigns to the API request.","The ID that API Gateway assigns to the API request.","The CLF-formatted request time (dd/MMM/yyyy:HH:mm:ss …","The Epoch-formatted request time, in milliseconds.","The identifier that API Gateway assigns to your resource.","The path to your resource. For example, for the non-proxy …","Undocumented, could be resourcePath","The source IP address of the TCP connection making the …","The source IP address of the TCP connection making the …","The deployment stage of the API request (for example, Beta …","The deployment stage of the API request (for example, Beta …","AWS ARN identifier for the ELB Target Group this lambda …","Undocumented, could be requestTime","Undocumented, could be requestTimeEpoch","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The principal identifier of the user making the request. …","The User-Agent header of the API caller.","The User-Agent header of the API caller.","The Amazon Resource Name (ARN) of the effective user …","","",""],"i":[1,0,0,1,0,2,2,0,0,0,2,0,0,1,1,3,3,1,4,3,5,1,4,3,5,3,2,5,4,5,4,5,5,1,4,3,5,1,4,5,5,1,4,5,0,3,3,1,4,3,5,1,1,1,1,1,1,1,1,4,4,3,5,3,4,4,3,3,5,1,4,3,5,3,3,6,3,5,4,3,4,3,1,4,5,3,3,2,3,0,5,0,1,5,0,3,3,3,4,5,4,1,4,3,5,5,1,4,3,5,1,4,3,5,3,3,5,5,7,8,9,0,0,9,9,9,9,9,9,9,10,10,10,10,10,9,10,9,9,9,9,10,10,10,11,12,13,0,13,0,13,0,0,0,0,0,14,15,16,14,15,16,14,16,15,16,15,16,17,13,18,19,14,15,16,17,13,18,19,14,14,15,16,17,13,18,19,14,15,16,17,13,18,19,14,14,14,14,14,18,19,14,15,16,17,13,18,19,14,15,16,15,16,17,15,16,17,13,18,19,14,15,16,17,13,18,19,14,0,0,15,16,16,15,16,17,13,18,19,14,19,19,16,19,15,16,16,16,16,16,15,19,14,15,16,18,15,15,15,16,17,13,18,19,14,15,16,17,13,18,19,14,15,16,17,13,18,19,14,15,16,17,13,18,19,14,14,19,14,14,20,21,22],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["builder",3]],[[]],null,[[]],[[],["context",3]],[[]],[[]],null,[[]],[[],["strmap",3]],[[],["response",3]],[[],["context",3]],[[]],[[],["result",4,[["strmap",3]]]],[[],["result",4,[["context",3]]]],null,[[["body",4]],["bool",15]],[[["strmap",3]],["bool",15]],[[["context",3]],["bool",15]],null,[[],["extensions",3]],[[],["extensions",3]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[["vec",3,[["u8",15]]]]],[[["cow",4]],["body",4]],[[]],[[]],[[]],[[["string",3]]],[[["cow",4,[["str",15]]]],["body",4]],[[["str",15]]],[[["hashmap",3,[["string",3],["vec",3,[["string",3]]]]]]],[[]],[[]],[[]],[[["parts",3]],["response",3]],[[["str",15]],["option",4,[["str",15]]]],[[["str",15]],["option",4,[["vec",3,[["str",15]]]]]],[[],["headermap",3]],[[],["headermap",3]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["response",3,[["body",4]]]],[[],["response",3,[["body",4]]]],null,[[],["bool",15]],[[],["bool",15]],[[],["strmapiter",3]],[[],["response",3]],[[["body",4]],["bool",15]],[[["strmap",3]],["bool",15]],[[["context",3]],["bool",15]],[[],["response",3]],[[["pin",3,[["response",3]]],["context",3]],["poll",4,[["option",4,[["result",4]]]]]],[[["context",3]],["poll",4,[["result",4]]]],[[["pin",3,[["response",3]]],["context",3]],["poll",4,[["result",4,[["option",4,[["headermap",3,[["headervalue",3]]]]]]]]]],null,null,[[]],[[],["result",4]],[[],["result",4]],[[],["servicefn",3]],[[],["sizehint",3]],[[],["statuscode",3]],[[],["statuscode",3]],[[]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["headermap",3,[["headervalue",3]]]],["result",4,[["context",3]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["version",3]],[[],["version",3]],[[["config",3]],["context",3]],null,null,null,null,null,null,null,[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[],["context",3]],[[],["strmap",3]],[[],["result",4,[["option",4],["payloaderror",4]]]],[[],["strmap",3]],[[],["requestcontext",4]],[[],["option",4,[["error",8]]]],[[],["strmap",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[["context",3]]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[],["apigatewayv2requestcontext",3]],[[],["apigatewayrequestcontext",3]],[[],["albrequestcontext",3]],[[],["requestcontext",4]],[[],["elb",3]],[[],["http",3]],[[],["identity",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,[[],["elb",3]],[[],["http",3]],[[],["identity",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,null,null,null,null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4,[["request",6],["jsonerror",3]]]],[[["str",15]],["result",4,[["request",6],["jsonerror",3]]]],null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null],"p":[[4,"Body"],[8,"Service"],[3,"Response"],[3,"StrMap"],[3,"Context"],[8,"IntoResponse"],[13,"Text"],[13,"Binary"],[4,"PayloadError"],[8,"RequestExt"],[13,"Json"],[13,"WwwFormUrlEncoded"],[4,"RequestContext"],[3,"Identity"],[3,"ApiGatewayV2RequestContext"],[3,"ApiGatewayRequestContext"],[3,"AlbRequestContext"],[3,"Elb"],[3,"Http"],[13,"ApiGatewayV2"],[13,"ApiGateway"],[13,"Alb"]]},\
"lambda_runtime":{"doc":"The mechanism available for defining a Lambda function is …","t":[3,3,6,16,16,3,16,8,11,11,11,11,11,11,10,12,11,11,11,11,11,11,12,12,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,5,12,11,11,11,11,12,12,12,12,11,11,11,12,10,12,5,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,12],"n":["Config","Context","Error","Error","Future","LambdaEvent","Response","Service","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","call","client_context","clone","clone","clone","clone_into","clone_into","clone_into","context","deadline","default","default","deserialize","deserialize","env_config","eq","eq","fmt","fmt","fmt","from","from","from","from_env","function_name","handler_fn","identity","into","into","into","into_parts","invoked_function_arn","log_group","log_stream","memory","ne","ne","new","payload","poll_ready","request_id","run","serialize","serialize","service_fn","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","version","with_config","xray_trace_id"],"q":["lambda_runtime","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Configuration derived from environment variables.","The Lambda function execution context. The values in this …","Error type that lambdas may result in","Errors produced by the service.","The future response value.","Incoming Lambda request containing the event payload and …","Responses given by the service.","An asynchronous function from a <code>Request</code> to a <code>Response</code>.","","","","","","","Process the request and return the response asynchronously.","The client context object sent by the AWS mobile SDK. This …","","","","","","","Invocation context.","The execution deadline for the current invocation in …","","","","","Lambda function configuration from the local environment …","","","","","","","","","Attempts to read configuration from environment variables.","The name of the function.","Return a new <code>ServiceFn</code> with a closure that takes an event …","The Cognito identity that invoked the function. This field …","","","","Split the Lambda event into its payload and context.","The ARN of the Lambda function being invoked.","The name of the Amazon CloudWatch Logs group for the …","The name of the Amazon CloudWatch Logs stream for the …","The amount of memory available to the function in MB.","","","Creates a new Lambda request","Event payload.","Returns <code>Poll::Ready(Ok(()))</code> when the service is able to …","The AWS request ID generated by the Lambda service.","Starts the Lambda Rust runtime and begins polling for …","","","Returns a new <code>ServiceFn</code> with the given closure.","","","","","","","","","","","","","","The version of the function being executed.","Add environment details to the context by setting …","The X-Ray trace ID for the current invocation."],"i":[0,0,0,1,1,0,1,0,2,3,4,2,3,4,1,2,2,3,4,2,3,4,3,2,2,4,2,4,2,2,4,2,3,4,2,3,4,4,4,0,2,2,3,4,3,2,4,4,4,2,4,3,3,1,2,0,2,4,0,2,3,4,2,2,3,4,2,3,4,2,3,4,4,2,2],"f":[null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[],["context",3]],[[],["lambdaevent",3]],[[],["config",3]],[[]],[[]],[[]],null,null,[[],["context",3]],[[],["config",3]],[[],["result",4]],[[],["result",4]],null,[[["context",3]],["bool",15]],[[["config",3]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],["result",4,[["error",6]]]],null,[[],["servicefn",3]],null,[[]],[[]],[[]],[[]],null,null,null,null,[[["context",3]],["bool",15]],[[["config",3]],["bool",15]],[[["context",3]]],null,[[["context",3]],["poll",4,[["result",4]]]],null,[[]],[[],["result",4]],[[],["result",4]],[[],["servicefn",3]],[[]],[[]],[[]],[[],["result",4]],[[["headermap",3]],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,[[["config",3]]],null],"p":[[8,"Service"],[3,"Context"],[3,"LambdaEvent"],[3,"Config"]]},\
"lambda_runtime_api_client":{"doc":"This crate includes a base HTTP client to interact with …","t":[3,3,6,12,11,11,11,11,11,5,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Client","ClientBuilder","Error","base","borrow","borrow","borrow_mut","borrow_mut","build","build_request","builder","call","client","fmt","from","from","into","into","try_from","try_from","try_into","try_into","type_id","type_id","with","with_connector","with_endpoint"],"q":["lambda_runtime_api_client","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["API client to interact with the AWS Lambda Runtime API.","Builder implementation to construct any Runtime API …","Error type that lambdas may result in","The runtime API URI","","","","","Create the new client to interact with the Runtime API.","Create a request builder. This builder uses …","Create a builder struct to configure the client.","Send a given request to the Runtime API. Use the client’…","The client that manages the API connections","","","","","","","","","","","","Create a new client with a given base URI and HTTP …","Create a new builder with a given HTTP connector.","Create a new builder with a given base URI. Inherits all …"],"i":[0,0,0,1,2,1,2,1,2,0,1,1,1,1,2,1,2,1,2,1,2,1,2,1,1,2,2],"f":[null,null,null,null,[[]],[[]],[[]],[[]],[[],["result",4,[["client",3],["error",6]]]],[[],["builder",3]],[[],["clientbuilder",3,[["httpconnector",3]]]],[[["request",3,[["body",3]]]]],null,[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[["uri",3]]],[[],["clientbuilder",3]],[[["uri",3]]]],"p":[[3,"Client"],[3,"ClientBuilder"]]},\
"runtime_fn":{"doc":"","t":[3,3,11,11,11,11,12,11,11,11,11,11,5,11,11,5,12,11,11,11,11,11,11,11],"n":["Request","Response","borrow","borrow","borrow_mut","borrow_mut","command","deserialize","fmt","fmt","from","from","handler","into","into","main","message","serialize","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["runtime_fn","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,1,2,1,2,1,1,1,2,1,2,0,1,2,0,2,2,1,2,1,2,1,2],"f":[null,null,[[]],[[]],[[]],[[]],null,[[],["result",4]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["lambdaevent",3,[["request",3]]]]],[[]],[[]],[[],["result",4,[["error",6]]]],null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[3,"Request"],[3,"Response"]]},\
"runtime_trait":{"doc":"","t":[3,3,3,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,12,5,12,11,11,11,11,11,11,11,11,11,11,11],"n":["MyHandler","Request","Response","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","call","command","default","deserialize","fmt","fmt","from","from","from","into","into","into","invoke_count","main","message","poll_ready","serialize","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id"],"q":["runtime_trait","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,1,2,3,1,2,3,3,1,3,1,1,2,1,2,3,1,2,3,3,0,2,3,2,1,2,3,1,2,3,1,2,3],"f":[null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[["lambdaevent",3,[["request",3]]]]],null,[[],["myhandler",3]],[[],["result",4]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[],["result",4,[["error",6]]]],null,[[["context",3]],["poll",4,[["result",4]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[3,"Request"],[3,"Response"],[3,"MyHandler"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};