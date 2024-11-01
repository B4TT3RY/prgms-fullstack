# 시계 추가 결과 코드

```tsx
import { FC, useEffect, useState } from 'react';

const Clock: FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>현재 시간: {time.toLocaleTimeString()}</div>;
};

export default Clock;

```
