resource "aws_cloudwatch_log_group" "lambda_logs" {

  name = "/aws/lambda/birthday-site"

  retention_in_days = 14
}
