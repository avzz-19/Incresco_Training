let bookList =  
[
{name:"Javascript Good parts", author:"Douglas Crockford", stock:"10"},
{name:"A Smarter Way to Learn JavaScript", author:"Mark Meyers", stock:"12"},
{name:"Effective Javascript", author:"David Herman", stock:"0"}
]

const results = bookList.filter(obj => {
    return obj.stock > 0;
  });
  console.log(results.map(item => ({title:item.name, author: item.author})));