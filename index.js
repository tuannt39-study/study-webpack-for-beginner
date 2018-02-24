import xinchao from './xinchao';
import './node_modules/bootstrap/dist/css/bootstrap.css';

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener("click", () => { // Khi click button
    import('./assets/xinchao.css').then(()=>{ // chúng ta sẽ import xinchao.css vào
        xinchao('Tuan');
    });
});
