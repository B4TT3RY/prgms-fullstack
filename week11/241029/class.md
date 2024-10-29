# 클래스 및 객체 생성 결과 코드 업로드

```ts
class Employee {
    constructor (
        private _empName: string,
        private _age: number,
        private _empJob: string
    ) {}

    get empName() {
        return this._empName;
    }
    set empName(val: string) {
        this._empName = val;
    }

    get age() {
        return this._age;
    }
    set age(val: number) {
        this._age = val;
    }

    get empJob() {
        return this._empJob;
    }
    set empJob(val: string) {
        this.empJob = val;
    }

    printEmp = (): void => {
        console.log(`${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob} 입니다.`)
    }
}

let employee1 = new Employee('Kim', 20, '개발자');
employee1.empName = 'Lee';
employee1.printEmp();
```

```console
Lee의 나이는 20이고, 직업은 개발자 입니다.
```
