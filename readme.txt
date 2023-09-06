This nodejs projects aims to achieve following goals:

1. Setup kafka cluster using docker-compose
2. Create a node.js script to publish random 10,000 messages to kafka
3. Create a node.js script to subscribe messages from Kafka

To run this project follow below steps:

Step 1:
In terminal, run command `npm i`
This will install the dependencies (i.e kafka-node)

Step 2:
Then run command `docker-compose up -d`, make sure that docker daemon is running before you execute this command.
This will pull the required images and create and start a cluster containing two services namely 'zoo1' and 'kafka1'

Actually, ZooKeeper and Kafka have a symbiotic relationship where ZooKeeper acts as a distributed coordination service, providing Kafka with the necessary infrastructure for distributed management, metadata storage, leader election, and configuration management.

Step 3:
Now run `npm run consumer`, to start the consumer that subscribe to messages from kafka on a topic.

Step 4:
Then run `npm run producer`, to start the producer that publishes random 10,000 messages to kafka on the same topic.