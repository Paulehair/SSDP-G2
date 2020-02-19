[ToC]

# Terraform

## Prerequisites

Have terraform installed

## Getting started

### Generate ssh key pair

Run the folowing commands from project folder to generate your ssh key
:::info
:pushpin: You will need it to connect to your EC2 AWS instances
:::

<code>$ cd terraform</code>
<code>$ mkdir ssh-keys</code>
<code>$ cd ssh-keys</code>
<code>$ ssh-keygen -t rsa -f id_rsa_aws</code>

### Modify terraform files

In file ec2.tf, on line 3, replace ==public_key== value with your public key

```javascript=1
resource "aws_key_pair" "admin" {
  key_name   = "admin"
  public_key = "replace here with your id_rsa_aws.pub"
}
```

In file security_group.tf, on line 9, replace ==cidr_blocks== value with your IP address (here I've only put HETIC's)

```javascript=3
ingress {
    # TLS
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    description = "HETIC IP"
    cidr_blocks = ["78.31.41.54/32"]
  }
```

### Create user in AWS

In AWS, in IAM section, create a User and add it to a GroupUser with AmazonEC2FullAccess granted.

AWS will generate you an ==access key id== and a ==secret access key==.

### Add credentials

Run in terraform folder
<code>\$ cp shared/credentials.sample shared/credentials</code>

In credentials replace

-   [ ] line 2 : my_aws_access_key_id with ==access key id== provided by AWS in previous step
-   [ ] line 3 : my_aws_secret_access_key with ==secret access key== provided by AWS in previous step

```javascript=1
[user];
aws_access_key_id = my_aws_access_key_id;
aws_secret_access_key = my_aws_secret_access_key;
```

### Deploy EC2 instance

Run the following commands

<code>$ terraform init</code>
<code>$ terraform plan</code>

Check if there is no error, then run

<code>\$ terraform apply</code>
:::warning
Type **yes** to confirm
:::

### Check if instance has been created

Go to AWS in section **Instances**.
Your instance should be running :tada:
:::info
If you can't see it, make sure you are in **eu-west-3** tab
:::

Copy the public DNS then go back to your terminal and run from terraform folder

<code>\$ ssh -i ssh-keys/id_rsa_aws ubuntu@my_public_dns</code>

### Start doing stuff

If you want to see how to deploy the webapp with ansible ➜ click [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/ansible)

![cat video](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

## Author

Paule Herman
