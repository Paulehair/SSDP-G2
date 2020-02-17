resource "aws_default_security_group" "default" {
  vpc_id = "${aws_default_vpc.default.id}"
  ingress {
    # TLS
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    description = "HETIC IP"
    cidr_blocks = ["78.31.41.54/32"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
