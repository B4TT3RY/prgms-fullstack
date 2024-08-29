# Node.js 동작 원리 정리

## Node.js란?

Node.js 공식 홈페이지에서 아래와 같이 설명하고 있다.

> Node.js is an open-source and cross-platform JavaScript runtime environment.
>
> Node.js는 오픈 소스 및 크로스 플랫폼 자바스크립트 런타임 환경입니다.
>
> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
>
> 비동기 이벤트 중심 자바스크립트 런타임인 Node.js는 확장 가능한 네트워크 애플리케이션을 구축하도록 설계되었습니다.

## Node.js의 특징

- 싱글 스레드
- 논 블로킹 I/O 모델
- 이벤트 기반

## Node.js의 내부 구조

```text
┌────────────────────────────┐
│    Node.js Core Library    │
├────────────────────────────┤
│      Node.js Bindings      │
├──────────────┬─────────────┤
│      V8      │    libuv    │
│    Engine    │             │
└──────────────┴─────────────┘
```

Node.js를 크게 나눠봤을 때, 내장 라이브러리와 V8 Engine, libuv로 구성되어 있다.

Node.js의 특성인 이벤트 기반, 논 블로킹 I/O 모델들은 모두 libuv 라이브러리에서 구현된다.

## 논 블로킹 I/O (Non-Blocking I/O)

Node.js에서의 논 블로킹 I/O 모델은 Input과 Output이 관련된 작업 (http, database, filesystem, third party api) 등의 블로킹 작업들을 백그라운드에서 수행하고, 이를 비동기 콜백 함수로 이벤트 루프에 전하는 것을 말한다.

```text
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

* Node.js 공식 홈페이지에 나와있는 이벤트 루프 다이어그램
```

> Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.
>
> 각 페이즈에는 실행할 콜백의 FIFO 대기열이 있습니다. 각 단계마다 고유한 특징이 있지만, 일반적으로 이벤트 루프가 특정 단계에 들어가면 해당 단계에 해당하는 모든 작업을 수행한 다음, 큐가 모두 소진되거나 최대 콜백 수가 실행될 때까지 해당 단계의 큐에서 콜백을 실행합니다. 큐가 모두 소진되거나 콜백 제한에 도달하면 이벤트 루프는 다음 단계로 이동하는 등의 방식으로 진행됩니다.
>
> Since any of these operations may schedule more operations and new events processed in the poll phase are queued by the kernel, poll events can be queued while polling events are being processed. As a result, long running callbacks can allow the poll phase to run much longer than a timer's threshold.
>
> 이러한 작업들 중 어느 것이든 더 많은 작업을 예약할 수 있고, poll 단계에서 처리되는 새로운 이벤트들은 커널에 의해 큐에 추가되기 때문에, poll 이벤트들이 처리되는 동안에도 poll 이벤트들이 큐에 추가될 수 있습니다. 그 결과, 오래 실행되는 콜백들로 인해 poll 단계가 timer의 임계값보다 훨씬 더 오래 실행될 수 있습니다.

- timers: 이 단계에서는 `setTimeout()`, `setInterval()` 같은 timer 함수에 의해 예약된 콜백이 실행됨
- pending callbacks: 다음 루프 반복으로 지연된 I/O 콜백들을 실행함
- idle, prepare: 내부적으로만 사용됨
- poll: 새 I/O 이벤트를 검색하고, I/O 관련된 콜백 (close 콜백, timer로 예약된 콜백, `setImmediate()`를 제외한 거의 모든 콜백)들을 실행함
- check: `setImmediate()` 콜백이 여기서 실행됨
- close callbacks: 일부 close 콜백 (예: `socket.on('close', ...)`)

이벤트 루프가 실행될 때 마다 Node.js는 비동기 I/O 또는 타이머가 대기중인지 확인하고 대기 중인 것이 없는 경우 종료한다고 한다.
