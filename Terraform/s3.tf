resource "aws_s3_bucket" "birthday_site" {
  bucket = "amruta-birthday-site"

  website {
    index_document = "index.html"
  }
}
