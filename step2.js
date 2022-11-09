
let b = [];
b = typeof b;
switch(b) {
    case 'number':  // if (x === 'value1')
      alert('Число '+b);
      break;
      case 'string':  // if (x === 'value2')
      alert('Строка '+b);
      break;
      case 'boolean':  // if (x === 'value2')
      alert('boolean '+b);
      break;
      default:
        alert( 'Не определен!' );
    }
  