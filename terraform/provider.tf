provider "aws" {
  profile                 = "user"
  shared_credentials_file = "./shared/credentials"
  region                  = "eu-west-3"
}
