let data = [
  {
    name: 'Matero',
    age: '30',
    sex: 'male',
  },

  {
    name: 'Sarah',
    age: '32',
    sex: 'female',
  },

  {
    name: 'John',
    age: '20',
    sex: 'male',
  },

  {
    name: 'Tim',
    age: '27',
    sex: 'male',
  },

  {
    name: 'Sam',
    age: '22',
    sex: 'male',
  },

  {
    name: 'Matilda',
    age: '34',
    sex: 'female',
  },
];

const info = document.querySelector('#info');

let details = data.map(function (item) {
  return (
    '<div>' +
    item.name +
    ' ' +
    'is ' +
    item.age +
    ' years old' +
    ' and' +
    ' ' +
    item.sex +
    '</div>'
  );
});

info.innerHTML = details.join('\n');
