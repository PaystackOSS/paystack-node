## Paystack Node Library

A Node client library for consuming the Paystack API  

## Prerequisite
Your need to [create a Paystack account](https://dashboard.paystack.com/#/signup), if you don't have one already, to get your test and 
live secret keys.

## Installation
```
npm install @paystack/paystack-sdk --save
```

## Usage
Import and initialize the library:
```javascript
const { Paystack } = require('@paystack/paystack-sdk')
const paystack = new Paystack("sk_test_xxxxxx")

paystack.transaction.initialize({email: "test@example.com", amount: 20000})
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
```

Import and initialize the library using ES module with `async/await`:
```javascript
import { Paystack } from '@paystack/paystack-sdk'
const paystack = new Paystack("sk_test_xxxxxx")

const initialize = async(email, amount) => {
  const response = await paystack.transaction.initialize({
    email,
    amount
  })

  console.log(response)
}

const email = 'test@example.com'
const amount = 2000
initialize(email, amount)
```

### Typescript
```typescript
import { Paystack } from '@paystack/paystack-sdk';
const paystack = new Paystack("sk_test_xxxxxx");

const initialize = async(email, amount) => {
  const response = await paystack.transaction.initialize({
    email,
    amount
  });

  console.log(response);
}

const email = 'test@example.com';
const amount = 2000;
initialize(email, amount);
```

## Issues
Kindly [open an issue](https://github.com/PaystackOSS/paystack-node/issues) if you discover any bug or have problems using this library. 

## License
This repository is made available under the MIT license. Kindly read the [LICENSE](https://github.com/PaystackOSS/paystack-node/blob/main/LICENSE) file for more information.
