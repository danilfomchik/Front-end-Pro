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


//рендерим страницу
renderList(data);
   
function renderList (list) {
  list.forEach((item, indx) => {
    // console.log('item-->', item);
    let todoItem = `
    <div class='todo-item todo-item-${item.id}'>
      <div class="completed completed-${item.completed}">
        <h3 class="todo-item-title" data-userId='${item.userId}'>${indx+1} ${item.title}</h3>
      </div>
    </div>`;
    todoList.innerHTML += todoItem
  }) 
}
///////

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
////////




///применяем сортировку на клик по списку
function sortToDoList (event){
  history.pushState({}, '', `#sort=${event.target.value}`)

  if(toDoSort.selectedIndex > 0){
    if(toDoSort.options[toDoSort.selectedIndex].value === 'abc'){
      data.sort(sort_by('title', false, function(a){return a}));
    } else if (toDoSort.options[toDoSort.selectedIndex].value === 'bca'){
      data.sort(sort_by('title', true, function(a){return a}));
    } else if (toDoSort.options[toDoSort.selectedIndex].value === 'nochosen'){
      return todoList
    }
  }
  
  var reverseСondition = toDoSort.options[toDoSort.selectedIndex].value;
  filtersToParams(data, reverseСondition, 'sort');
};

toDoSort.addEventListener('change', sortToDoList);
/////////////



/////////////добавляем события
// toDoSort.addEventListener('change', (event) => {
//   // const isCompleted = document.querySelector('.isComplited');
//   history.pushState({}, '', `#sort=${event.target.value}`)

//   var reverseСondition = toDoSort.options[toDoSort.selectedIndex].value;
//   filtersToParams(data, reverseСondition, 'sort');
// });
//////////
isCompleted.addEventListener('click', (event) => {
  history.pushState({}, '', `?isCompleted=${isCompleted.checked}`)
   
  let completed = isCompleted.checked
  filtersToParams(data, completed, 'checkbox');
});
//////////
searchInput.addEventListener('input', (event) => {
  history.pushState({}, '', `#search=${event.target.value}`)

  let searchText = event.target.value;
  console.log('searchText-->', event);
  filtersToParams(data, searchText, 'search');
});
//////////





///фильтрация данных
function filtersToParams(data, searchParam, field) {

  let isCompletedArr = data.filter((item) => {
    // history.pushState({}, '', `?isCompleted=${isCompleted.checked}&search=${searchParam}&sort=${searchParam}`)

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
      case 'sort':
        return item
      // case 'sort':
      //   if(searchParam === 'abc'){
      //     return data.sort(sort_by('title', false, function(a){return a}));
      //   } else if (searchParam === 'bca'){
      //     return data.sort(sort_by('title', true, function(a){return a}));
      //   } else if (searchParam === 'nochosen'){
      //     return item
      //   } else {
      //     return false
      //   }
      default : return item 
    }
  });
  todoList.innerHTML = "";
  renderList(isCompletedArr);
}