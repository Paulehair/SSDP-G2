resource "aws_key_pair" "admin" {
  key_name   = "admin"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCv+gblJX5ogr0WuLUZmFmKm3SusQmN4S2QRA1iL20epmw7i2fuGxyc0IuY9zAxPPdA3UMHHdlC6tvLx0+K9jLYCAmnDo8NFT3fOEwlSqilu/Hxh9yS+L5AESG99VUYmTXDHUHt8bly81iak7FbJLFwk1fIBZXbJmreVY0erZGeUjpCJIIIfjPUk+KE3uQeRNBsCJhli7KKvhDhwGuXxRZX+qtZNNq5JnqIC8TchLCKZgieBCZmC4CZ+kXgTjb+5cwi5DxwURaE1WJF5e1VbIhpqFXEttaMC6abO2wfF5eEyTb5dMT2Ua2a5PhHAzQhcLzIUpuVowEvH4OK5F3a6ifl p.herman@DIGI-LAPA066.local"
}
resource "aws_instance" "server" {
  ami           = "ami-0c367ebddcf279dc6"
  instance_type = "t2.micro"
  key_name      = "admin"
}
