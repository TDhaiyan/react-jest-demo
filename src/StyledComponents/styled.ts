
/*
* 这个实现包含了 styled-components 的核心功能：
* 高阶组件包装
* className 的管理和合并
* 动态样式注入
* Props 透传
*/

import React from 'react'

interface StyledProps {
  className?: string;
  children?: React.ReactNode;
}

// 创建一个生成样式组件的函数
const styled = (Component: React.ComponentType<any>) => {
  // 返回一个函数，接收模板字符串（CSS样式）
  return (styles: string) => {
    // 生成唯一的className
    const styleClassName = `styled-${Math.random().toString(36).substring(7)}`;

    // 创建style标签并注入CSS
    const styleElement = document.createElement('style');
    styleElement.textContent = `.${styleClassName} { ${styles} }`;
    document.head.appendChild(styleElement);

    // 返回包装后的组件
    return function StyledComponent(props: StyledProps) {
      const { className: userClassName, ...restProps } = props;

      // 合并className
      const finalClassName = `${styleClassName} ${userClassName || ''}`.trim();

      return <Component {...restProps} className={finalClassName} />;
    };
  };
};

// 使用示例：
// const StyledDiv = styled('div')`
//   color: red;
//   background: blue;
// `;

export default styled;



// const Wrapper = (Components: React.ComponentType<any>) => (className: string) => {
//   return (props: props) => {
//     const {className: propsClassName} = props
//     return <Components {...props} className={`${className} ${propsClassName}`}>{props.children}</Components>
//   }
//  }




