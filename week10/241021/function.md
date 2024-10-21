# JavaScript 함수 생성 실습

```js
function foo() {
    console.log('foo');
}

foo(); // foo
```

```js
const foo = function () {
    console.log('foo2');
}

foo(); // foo2
```

```js
const foo = new Function('console.log("foo3")');

foo(); // foo3
```

```js
const foo = () => {
    console.log('foo4');
}

foo(); // foo4
```

```js
(function foo() {
    console.log('foo');
})(); // foo
```

```js
function foo(arg) {
    if (arg === 3) return;
    console.log(arg);

    foo(arg + 1);
}

foo(1); // 1, 2
```

```js
function foo(arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}

foo(1); // 1
```

```js
function foo(arg) {
    arg();
}

foo(() => {
    console.log(1);
}); // 1
```
