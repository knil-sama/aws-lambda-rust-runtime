use http::HeaderMap;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use crate::custom_serde::{deserialize_lambda_map, serialize_headers};

/// `LambdaFunctionUrlsRequest` contains data coming from the HTTP request to a Lambda Function URL.
/// https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
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
    #[serde(deserialize_with = "deserialize_lambda_map")]
    #[serde(default)]
    pub query_string_parameters: HashMap<String, String>,
    pub request_context: LambdaFunctionUrlsRequestContext,
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
    pub authorizer: Option<LambdaFunctionUrlsRequestContextAuthorizerDescription>,
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

/// `LambdaFunctionUrlsRequestContextAuthorizerDescription` contains authorizer information for the request context.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsRequestContextAuthorizerDescription {
    pub iam: Option<LambdaFunctionUrlsRequestContextAuthorizerIamDescription>,
}

/// `LambdaFunctionUrlsRequestContextAuthorizerIamDescription` contains IAM information for the request context.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsRequestContextAuthorizerIamDescription {
    #[serde(default)]
    pub access_key: Option<String>,
    #[serde(default)]
    pub account_id: Option<String>,
    #[serde(default)]
    pub caller_id: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to null or excludes this from the JSON.
    pub cognito_identity: Option<String>,
    /// Function URLs don't use this parameter. Lambda sets this to null or excludes this from the JSON.
    pub principal_org_id: Option<String>, 
    #[serde(default)]
    pub user_arn: Option<String>,
    #[serde(default)]
    pub user_id: Option<String>,
}

/// `LambdaFunctionUrlsRequestContextHttpDescription` contains HTTP information for the request context.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LambdaFunctionUrlsRequestContextHttpDescription {
    #[serde(default)]
    pub method: Option<String>,
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
    #[serde(default)]
    pub body: Option<String>,
    pub is_base64_encoded: bool,
    pub cookies: Vec<String>,
}
