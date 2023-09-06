const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new kafka.Consumer(client, [{ topic: 'my-topic', partition: 0 }]);

// If there is any message in the topic, the consumer will receive it
consumer.on('message', (message) => {
  console.log(`Received message: ${message.value}`);
});

// If there is any error, the consumer will receive it and log it as error
consumer.on('error', (err) => {
  console.error(`Consumer error: ${err}`);
});