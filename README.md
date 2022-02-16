## Paystack Node.js Library

A Node client library for consuming the Paystack API  

## Prerequisite
Your need to [create a Paystack account](https://dashboard.paystack.com/#/signup), if you don't have one already, to get your test and 
live secret keys.

## Installation
```
npm install @paystack/node --save
```

## Usage
Import and initialize the library:
```
import Paystack from '@paystack/node'
const paystack = new Paystack("sk_test_xxxxxx")
```

Initiate a request and parse response:
```
paystack.customer.fetch({code: "CUS_o9rf5kuwei3lt4vl"})
                  .then(customer => console.log(customer))
                  .catch(error => console.log(error))
```

## Issues
Kindly [open an issue](https://github.com/PaystackOSS/paystack-node/issues) if you discover any bug or have problems using this library. 

## License
This repository is made available under the MIT license. Kindly read the [LICENSE](https://github.com/PaystackOSS/paystack-node/blob/main/LICENSE) file for more information.
