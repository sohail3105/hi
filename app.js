//const heading=React.createElement("h1",{id:"sohail",xyz:"bhai"},"hello sohail bhai react");
const parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"child1 created susseccfully"), React.createElement("h2",{},"child1 addedd successfully")]
    ), React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"child2 created susseccfully"), React.createElement("h1",{},"child2 created susseccfully")]
    ),]
);
console.log(parent);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);