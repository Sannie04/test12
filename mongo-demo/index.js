const mongoose = require('mongoose');
const User = require('./models/User'); // ✅ Phải export đúng

mongoose.connect('mongodb://localhost:27017/mongo-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  const user = new User({ name: 'Sang', age: 25 });
  await user.save();
  console.log('✅ User saved:', user);
}

run();
