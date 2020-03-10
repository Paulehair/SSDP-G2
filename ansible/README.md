[ToC]

# Ansible

## Prerequisites

Have ansible installed

## Getting started

### Change IP in inventory

From ansible folder, go to inventory/inventory and add your instance's public ip provided by AWS.
Change it also in group_vars/webapp.yml (field webapp_public_ip)

### Setup mongo credentials

In group_vars/webapp.yml you can change database credentials to whatever you want replacing the value of webapp_db_user and webapp_db_password

### Launch playbook

Replace 'path-to-your-private-key' with the path to key generated in previous step (should be "../terraform/id_rsa_aws") an run this command from ansible folder
<code>\$ ansible-playbook -i inventory/inventory common.yml --user ubuntu --key path-to-your-private-key </code>

If you want to relaunch docker on your server run
<code>\$ ansible-playbook -i inventory/inventory dockerLauncher.yml --user ubuntu --key path-to-your-private-key </code>

## Author

Paule Herman
