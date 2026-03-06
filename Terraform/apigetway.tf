resource "aws_apigatewayv2_api" "birthday_api" {
  name          = "birthday-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id           = aws_apigatewayv2_api.birthday_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.birthday_lambda.invoke_arn
}

resource "aws_apigatewayv2_route" "route" {
  api_id    = aws_apigatewayv2_api.birthday_api.id
  route_key = "GET /"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}
