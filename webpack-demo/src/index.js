import _ from 'lodash';
import './style.css';
import './a.less';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
};

function component() {
  var element = document.createElement('div');
  element.classList.add('box');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());