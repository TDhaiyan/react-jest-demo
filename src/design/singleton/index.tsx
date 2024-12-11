import { Singleton } from "../singleton";

const MyComponent = (() => {
    // 保证一个实例
    let instance = new Singleton(() => {})
   
    function init() {
      // 初始化组件
      instance.create(() => {})
      return instance;
    }
   
    return () => {
      if (!instance) {
        // 当实例不存在时才进行初始化
        instance = init();
      }
      return instance;
    };
  })();
   
  function App() {
    const component = MyComponent();
    return (
      <div>
        <div>{component.toString()}</div>
        <div>{component.toString()}</div> {/* 两次调用返回的相同组件实例 */}
      </div>
    );
  }