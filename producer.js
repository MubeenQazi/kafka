const kafka = require('kafka-node');

// Create a client and producer
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  const topic = 'my-topic';

  // Send 10,000 messages to the topic
  for (let i = 1; i <= 10000; i++) {
    const message = `Message: ${i}`;
    const payloads = [
      {
        topic: topic,
        messages: message,
      },
    ];

    console.log(`Sending message: ${message}`);
    producer.send(payloads, (err, data) => {
      if (err) {
        console.error(`Error sending message: ${err}`);
      } else {
        console.log(`Sent message: ${message}`);
      }
    });
  }
});

producer.on('error', (err) => {
  console.error(`Producer error: ${err}`);
});