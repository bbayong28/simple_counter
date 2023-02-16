# useState로 만든 simple_counter

const [number, setNumber] = useState(0);을 사용해 <br/>
초기값은 숫자 0으로 시작하고 <br/>
onClick을 이용해 <br/>

- 버튼을 누르면 1씩 숫자가 증가하게 => setNumber(number + 1) <br/>

* 버튼을 누르면 1씩 숫자가 감소하게 => setNumber(number - 1) <br/>
  reset버튼을 누르면 초기값인(0)으로 돌아가게 => setNumber(0) <br/>
  만들어봤습니다. <br/>

### State 란?

- 컴포넌트의 내부의 변화하는 값
- 특정 상황이나 시점에 따라 달라질 수 있는 값은 state로 만들어서 처리해줘야함
- ex) counter 수, input 태그의 value 값...

### useState란?

- 컴포넌트에서 State(상태)를 다룰 때 사용하는 함수
- const [state, setState] = useState("초기값"); 형태를 띔
- 0번째 index에는 state값, 1번째 index에는 state를 업데이트 할 때 사용하는 함수(setter)
- useState함수의 인자에는 state의 초기값으로 세팅해줄 값을 넣어주면 됨
- state값은 반드시 setter 함수로만 변경가능
- setter 함수는 state이름 앞에 "set"을 붙여서 작성하는 것이 일반적
