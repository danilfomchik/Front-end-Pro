var data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": true
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    }
];

const todoList = document.querySelector('.todo-list');
const isCompleted = document.querySelector('.isComplited');
const searchInput = document.querySelector('.searchInput');
const toDoSort = document.getElementById('toDoSort');
let checkBox = '';
let sortToDo = '';
let searchItem = '';


///применяем сортировку на клик по списку
toDoSort.addEventListener('change', sortToDoList);

function sortToDoList (){
  var sortOptions = toDoSort.options[toDoSort.selectedIndex].value;
  changeUrl(sortOptions, 'sort')

  if(toDoSort.selectedIndex > 0){
    if(sortOptions === 'abc'){
      data.sort(sort_by('title', false, function(a){return a}));
    } else if (sortOptions === 'bca'){
      data.sort(sort_by('title', true, function(a){return a}));
    }
  }

  filtersToParams(data, sortOptions, 'sort');
};


renderList(data);

function renderList (list) {
  list.forEach((item, indx) => {
    let todoItem = `
    <div class='todo-item todo-item-${item.id}'>
      <div class="completed completed-${item.completed}">
        <h3 class="todo-item-title" data-userId='${item.userId}'>${indx+1} ${item.title}</h3>
      </div>
    </div>`;
    todoList.innerHTML += todoItem
  }) 
}

//функция сортировки
var sort_by = function(field, reverse, primer) {
  if(primer === true){
    function key(x) {
      return primer(x[field])
    };
  } else{
    function key(x) {
      return x[field]
    }
  };
  if(reverse === false){
    reverse = 1;
  } else{
    reverse = -1;
  };
  return function (a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  } 
};

//функция изменение URL
function changeUrl(iterationElem, elemType) {
  if (elemType === 'check') {
    checkBox = `?isCompleted=${iterationElem}`;
  }
  else if (elemType === 'sort') {
    sortToDo = `&sort=${iterationElem}`;
  }
  else if (elemType === 'search') {
    searchItem = `&search=${iterationElem}`;
  }
  if(sortToDo === undefined) {
    sortToDo =''
  }
  if (checkBox === undefined) {
    checkBox ='';
  }
  if (searchItem === undefined) {
    searchItem='';
  }
  history.pushState({}, '',  `${sortToDo}${searchItem}${checkBox}`)
}


isCompleted.addEventListener('click', (event) => {
  let completed = isCompleted.checked

  changeUrl(completed, 'check')
  filtersToParams(data, completed, 'checkbox');
});
searchInput.addEventListener('input', (event) => {
  let searchText = event.target.value;

  changeUrl(searchText, 'search')
  filtersToParams(data, searchText, 'search');
});


function filtersToParams(data, searchParam, field) {

  let isCompletedArr = data.filter((item) => {
    switch(field) {
      case 'checkbox':
        if(searchParam == true) {
          return searchParam == item.completed
        } else {
          return item
        }
      case 'search':
        if(item['title'].includes(searchParam) && (isCompleted.checked === true)){
          return item.completed
        } else if(item['title'].includes(searchParam)){
          return item
        } else{
          return false
        }
      default : return item 
    }
  });
  todoList.innerHTML = "";
  renderList(isCompletedArr);
}