# 2024/10/29 11주차 파트 2

## 리터럴 타입

특정 값을 나타내는 타입으로 해당 값이 정확하게 일치해야 함

TypeScript에서 사용되는 리터럴 타입에는 다양한 종류가 있음

- 문자열 리터럴 타입

    ```ts
    let status: 'success' | 'error';
    status = 'success'; //유효
    status = 'pending'; // 에러
    ```

- 숫자 리터럴 타입

    ```ts
    let speed: 50 | 100 | 200;
    speed = 100; // 유효
    speed = 150; // 에러
    ```

- 불리언 리터럴 타입

    ```ts
    let isTrue: true;
    isTrue = true; // 유효
    isTrue = false; // 에러
    ```

- 객체 리터럴 타입

    ```ts
    let person: { name: 'John', age: 30 };
    person = { name: 'John', age: 30 }; // 유효
    person = { name: 'Alice', age: 25 }; // 에러
    ```

- 타입 별칭

    ```ts
    type CardinalDirection = 'North' | 'East' | 'South' | 'West';
    let direction: CardinalDirection;
    direction = 'North'; // 유효
    direction = 'Northeast'; // 에러
    ```

### 리터럴 타입을 사용하면 좋은 점

- 코드의 가독성이 높아짐
- 잘못된 값이 들어오는 것을 방지할 수 있음

## any 타입

TypeScript는 타입에 관한 정보가 더 많을수록 좋음

타입 정보는 개발자의 의도를 명확하게 전달할 수 있음

효과적인 코드의 유지보수가 가능함

any 타입을 일부러 사용할 필요는 없음

타입을 지정할 수 없는 제한적인 경우에만 any 타입을 사용해야 함

## 유니온 타입

제한된 타입을 동시에 지정하고 싶을 때가 있음

```ts
let anyVal: number | string;
```

`|` 기호를 사이에 두고 동시에 타입을 지정할 수 있음

anyVal 변수는 number나 string 타입 중 아무 타입의 값이 올 수 있음

## 타입 가드

`typeof` 연산자를 사용하여 타입 검증을 수행함

## Array

길이가 가변적이며 동일한 타입의 요소로 구성

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['apple', 'banana', 'orange'];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

```ts
let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
```

```ts
let infer = [1, 2, 3]; // 타입 추론
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3]; // 읽기 전용 배열
```

## Tuple

길이가 고정적이며 각 요소의 타입이 정해져있음

```ts
let greeting: [number, string, boolean] = [1, 'hello', true];
for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
```

## Spread 연산자

```ts
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let combineArray = [...firstArray, ...secondArray];

for (let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
```
