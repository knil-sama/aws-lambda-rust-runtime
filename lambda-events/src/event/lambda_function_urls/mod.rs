use http::{HeaderMap, Method};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use crate::{custom_serde::{deserialize_lambda_map, serialize_headers, http_method, deserialize_headers, serialize_multi_value_headers},
    encodings::Body, event::apigw::ApiGatewayRequestAuthorizer};
use query_map::QueryMap;

/// `LambdaFunctionUrlsRequest` contains data coming from the HTTP request to a Lambda Function URL.
/// https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsRequest {
    /// Version is expected to be `"2.0"`
    #[serde(default)]
    pub version: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to $default as a placeholder.
    pub route_key: Option<String>,
    #[serde(default)]
    pub raw_path: Option<String>,
    #[serde(default)]
    pub raw_query_string: Option<String>,
    pub cookies: Option<Vec<String>>,
    #[serde(deserialize_with = "http_serde::header_map::deserialize", default)]
    #[serde(serialize_with = "serialize_headers")]
    pub headers: HeaderMap,
    #[serde(
        default,
        deserialize_with = "query_map::serde::aws_api_gateway_v2::deserialize_empty"
    )]
    #[serde(skip_serializing_if = "QueryMap::is_empty")]
    #[serde(serialize_with = "query_map::serde::aws_api_gateway_v2::serialize_query_string_parameters")]
    pub query_string_parameters: QueryMap,
    pub request_context: LambdaFunctionUrlsRequestContext,
    #[serde(default)]
    pub body: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to null or excludes this from the JSON.
    pub path_parameters:  Option<String>, 
    pub is_base64_encoded: bool,
    /// Function URLs don't use this parameter. Lambda sets this to null or excludes this from the JSON.
    pub stage_variables:  Option<String>,
}

/// `LambdaFunctionUrlsRequestContext` contains the information to identify the AWS account and resources invoking the Lambda function.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsRequestContext {
    #[serde(default)]
    pub account_id: Option<String>,
    /// APIID is the Lambda URL ID
    #[serde(default)]
    #[serde(rename = "apiId")]
    pub apiid: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to null or excludes this from the JSON.
    pub authentication: Option<String>,
    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub authorizer: Option<ApiGatewayRequestAuthorizer>,
    /// DomainName is of the format `"<url-id>.lambda-url.<region>.on.aws"`
    #[serde(default)]
    pub domain_name: Option<String>,
    /// DomainPrefix is the Lambda URL ID
    #[serde(default)]
    pub domain_prefix: Option<String>,
    pub http: LambdaFunctionUrlsRequestContextHttpDescription,
    #[serde(default)]
    pub request_id: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to $default as a placeholder.
    pub route_key: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to $default as a placeholder.
    pub stage: Option<String>, 
    #[serde(default)]
    pub time: Option<String>,
    pub time_epoch: i64,
}

/// `LambdaFunctionUrlsRequestContextHttpDescription` contains HTTP information for the request context.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsRequestContextHttpDescription {
    #[serde(with = "http_method")]
    pub method: Method,
    #[serde(default)]
    pub path: Option<String>,
    #[serde(default)]
    pub protocol: Option<String>,
    #[serde(default)]
    pub source_ip: Option<String>,
    #[serde(default)]
    pub user_agent: Option<String>,
}

/// `LambdaFunctionUrlsResponse` configures the HTTP response to be returned by Lambda Function URL for the request.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsResponse {
    pub status_code: i64,
    #[serde(deserialize_with = "http_serde::header_map::deserialize", default)]
    #[serde(serialize_with = "serialize_headers")]
    pub headers: HeaderMap,
    #[serde(deserialize_with = "deserialize_headers", default)]
    #[serde(serialize_with = "serialize_multi_value_headers")]
    pub multi_value_headers: HeaderMap,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub body: Option<Body>,
    pub is_base64_encoded: bool,
    pub cookies: Vec<String>,
}


#[cfg(test)]
mod test {
    use super::*;

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_request_type_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-custom-auth-request-type-request.json");
    //     let parsed: ApiGatewayCustomAuthorizerRequestTypeRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerRequestTypeRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_request_type_request_websocket() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-custom-authorizer-websocket-request.json");
    //     let parsed: ApiGatewayCustomAuthorizerRequestTypeRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerRequestTypeRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-custom-auth-request.json");
    //     let parsed: ApiGatewayCustomAuthorizerRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_response() {
    //     let data = include_bytes!("../../fixtures/example-apigw-custom-auth-response.json");
    //     let parsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_response_with_single_value_action() {
    //     let data = include_bytes!("../../fixtures/example-apigw-custom-auth-response-with-single-value-action.json");
    //     let parsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_response_with_single_value_resource() {
    //     let data = include_bytes!("../../fixtures/example-apigw-custom-auth-response-with-single-value-resource.json");
    //     let parsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-request.json");
    //     let parsed: ApiGatewayProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_response() {
    //     let data = include_bytes!("../../fixtures/example-apigw-response.json");
    //     let parsed: ApiGatewayProxyResponse = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayProxyResponse = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    #[test]
    #[cfg(feature = "lambda_function_urls")]
    fn example_lambda_function_urls_response() {
        let data = include_bytes!("../../fixtures/example-lambda-function-urls-response.json");
        let parsed: LambdaFunctionUrlsResponse = serde_json::from_slice(data).unwrap();
        let output: String = serde_json::to_string(&parsed).unwrap();
        let reparsed: LambdaFunctionUrlsResponse = serde_json::from_slice(output.as_bytes()).unwrap();
        assert_eq!(parsed, reparsed);
    }


    #[test]
    #[cfg(feature = "lambda_function_urls")]
    fn example_lambda_function_urls_request() {
        let data = include_bytes!("../../fixtures/example-lambda-function-urls-request.json");
        let parsed: LambdaFunctionUrlsRequest = serde_json::from_slice(data).unwrap();
        let output: String = serde_json::to_string(&parsed).unwrap();
        let reparsed: LambdaFunctionUrlsRequest = serde_json::from_slice(output.as_bytes()).unwrap();
        assert_eq!(parsed, reparsed);
    }
    
    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_request_multi_value_parameters() {
    //     let data = include_bytes!("../../fixtures/example-apigw-request-multi-value-parameters.json");
    //     let parsed: ApiGatewayProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);

    //     assert!(output.contains(r#""multiValueQueryStringParameters":{"name":["me","me2"]}"#));
    //     assert!(output.contains(r#""queryStringParameters":{"name":"me"}"#));
    //     assert!(output.contains(r#""headername":["headerValue","headerValue2"]"#));
    //     assert!(output.contains(r#""headername":"headerValue2""#));
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_restapi_openapi_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-restapi-openapi-request.json");
    //     let parsed: ApiGatewayProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_request_iam() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-request-iam.json");
    //     let parsed: ApiGatewayV2httpRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2httpRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_request_jwt_authorizer() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-request-jwt-authorizer.json");
    //     let parsed: ApiGatewayV2httpRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2httpRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_request_lambda_authorizer() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-request-lambda-authorizer.json");
    //     let parsed: ApiGatewayV2httpRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2httpRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_request_multi_value_parameters() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-request-multi-value-parameters.json");
    //     let parsed: ApiGatewayV2httpRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2httpRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);

    //     assert!(output.contains(r#""header2":"value1,value2""#));
    //     assert!(output.contains(r#""queryStringParameters":{"Parameter1":"value1,value2"}"#));
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_request_no_authorizer() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-request-no-authorizer.json");
    //     let parsed: ApiGatewayV2httpRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2httpRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_websocket_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-websocket-request.json");
    //     let parsed: ApiGatewayWebsocketProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayWebsocketProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_console_test_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-console-test-request.json");
    //     let parsed: ApiGatewayProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_websocket_request_without_method() {
    //     let data = include_bytes!("../../fixtures/example-apigw-websocket-request-without-method.json");
    //     let parsed: ApiGatewayWebsocketProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayWebsocketProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_websocket_request_disconnect_route() {
    //     let data = include_bytes!("../../fixtures/example-apigw-websocket-request-disconnect-route.json");
    //     let parsed: ApiGatewayWebsocketProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayWebsocketProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_custom_authorizer_v1_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-custom-authorizer-v1-request.json");
    //     let parsed: ApiGatewayV2httpRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2httpRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    //     assert_eq!("REQUEST", parsed.kind.unwrap());
    //     assert_eq!(Method::GET, parsed.http_method);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_custom_authorizer_v2_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-custom-authorizer-v2-request.json");
    //     let parsed: ApiGatewayV2CustomAuthorizerV2Request = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2CustomAuthorizerV2Request = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_custom_authorizer_v2_request_without_cookies() {
    //     let data = include_bytes!("../../fixtures/example-apigw-v2-custom-authorizer-v2-request-without-cookies.json");
    //     let parsed: ApiGatewayV2CustomAuthorizerV2Request = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2CustomAuthorizerV2Request = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_v2_custom_authorizer_v2_request_without_identity_source() {
    //     let data =
    //         include_bytes!("../../fixtures/example-apigw-v2-custom-authorizer-v2-request-without-identity-source.json");
    //     let parsed: ApiGatewayV2CustomAuthorizerV2Request = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayV2CustomAuthorizerV2Request = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_console_request() {
    //     let data = include_bytes!("../../fixtures/example-apigw-console-request.json");
    //     let parsed: ApiGatewayProxyRequest = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayProxyRequest = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_request_authorizer_fields() {
    //     let data = include_bytes!("../../fixtures/example-apigw-request.json");
    //     let parsed: ApiGatewayProxyRequest = serde_json::from_slice(data).unwrap();

    //     let fields = parsed.request_context.authorizer.fields;
    //     assert_eq!(Some("admin"), fields.get("principalId").unwrap().as_str());
    //     assert_eq!(Some(1), fields.get("clientId").unwrap().as_u64());
    //     assert_eq!(Some("Exata"), fields.get("clientName").unwrap().as_str());
    // }

    // #[test]
    // #[cfg(feature = "apigw")]
    // fn example_apigw_custom_auth_response_with_statement_condition() {
    //     use crate::iam::IamPolicyEffect;

    //     let data = include_bytes!("../../fixtures/example-apigw-custom-auth-response-with-condition.json");
    //     let parsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(data).unwrap();
    //     let output: String = serde_json::to_string(&parsed).unwrap();
    //     let reparsed: ApiGatewayCustomAuthorizerResponse = serde_json::from_slice(output.as_bytes()).unwrap();
    //     assert_eq!(parsed, reparsed);

    //     let statement = parsed.policy_document.statement.first().unwrap();
    //     assert_eq!(IamPolicyEffect::Deny, statement.effect);

    //     let condition = statement.condition.as_ref().unwrap();
    //     assert_eq!(vec!["xxx"], condition["StringEquals"]["aws:SourceIp"]);
    // }
}
