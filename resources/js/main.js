const urlApi = 'https://jsonplaceholder.typicode.com/todos';
const domContainer = document.querySelector('.js-dataContainer');

const getData = url => {
    return fetch(url)
        .then( res => res.json() );
};


const showTodos = (data, target) => {
	const html = data.map(item => {
		
		const class_nocompleted = item.completed == false ? 'no-completed' : '';
		
		return `
			<div class="js-todo-itens ${class_nocompleted}">
				<small>${item.id}</small>
				<b>${item.title}</b>
				<span class="${class_nocompleted}">${item.completed}</span>
			</div>
		`;
	}).join('');

	target.innerHTML = html;
}



getData(urlApi).then( res => showTodos(res, domContainer));