import React from 'react';
import Home from './home';
import TTG from './ttg';
import TCC from './tcc';
import TNN from './tnn';

export default function App() {
    const [option, setOption] = React.useState(0);
    let s = 0;

    React.useEffect(() => {
        if (option > 0) {s = 1;}
        else {s = 0;}
        let first = document.getElementById("first");
        first.style.filter = `brightness(${1 - 0.8 * s})`;
        first.style.transform = `translate(${-15 * s}vw, 0)`;
        let second = document.getElementById("second");
        if (s == 0) {setTimeout(function() {second.style.width = `0vw`}, 600); first.style.opacity = `1`;}
        else {second.style.width = `100vw`; setTimeout(function() {first.style.opacity = `0`}, 600);}
        second.style.transform = `translate(${-100 * s}vw, 0)`;
    }, [option]);

    return (
        <div id='main'>
            <div id='first'>
                <Home option={option} setOption={setOption}></Home>
            </div>
            <div id='second'>
                <TTG option={option} setOption={setOption}></TTG>
                <TCC option={option} setOption={setOption}></TCC>
                <TNN option={option} setOption={setOption}></TNN>
            </div>
        </div>
    );
}
