# wing-register

## Install

```bash
$ npm install wing-register
```

## Usage

```typescript
import Register from 'wing-register';

const register = new Register();
const fn1 = () => console.log('fn1 called');
const fn2 = () => console.log('fn2 called');

register.register(fn1);
register.register(fn2);

/* ****************************** */
register.excute();
/**
 * will output:
 *
 * fn1 called
 * fn2 called
 */

/* ****************************** */
register.unregister(fn1);
register.excute();
/**
 * will output:
 *
 * fn2 called
 */

/* ****************************** */
register.clear();
register.excute();
/**
 * nothing will output
 */
```
