import React, { ReactNode } from "react";
 
const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
 
const Header: React.FC<{ text: string | ReactNode }>= ({ text }) => <h3>{text}</h3>;

 
const Page: React.FC<{ title: string, header: string | ReactNode, }>  = ({ title, header }) => (
  <div>
    <Header text={title} />
    {header && <Header text={header} />}
  </div>
);
 
const About = () => (
  <Page
    title="title"
    header="subTitle"
  />
);
 
const Home = () => (
  <Page title="Welcome">
    <List items={["Item 1", "Item 2", "Item 3"]} />
  </Page>
);
 
const App = () => (
  <div>
    <About />
    <Home />
  </div>
);
 
export default App;