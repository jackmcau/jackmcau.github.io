
# Setup file for the server

# Install libatomic for node
sudo yum install libatomic -y

# Install node
if ! [ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash ]; then
    exit(1)
fi
. ~/.bashrc
if ! [ nvm install node ]; then
    exit(1)
fi
if ! [ npm install ]; then
    exit(1)
fi

npm install pm2 -g

# Run server

npm start
