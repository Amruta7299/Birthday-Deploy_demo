resource "aws_lambda_function" "birthday_lambda" {

  function_name = "birthday-lambda"

  filename      = "file.zip"
  handler       = "lambda_function.lambda_handler"
  runtime       = "python3.12"

  role = aws_iam_role.lambda_role.arn
}
