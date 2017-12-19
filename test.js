
var arr1 = [1,2,5,7,8],
    arr2 = [4,6,32,3,5];

console.log('числа которые есть в обеих массивах');
for (var i = 0; i < arr1.length; i++){
  for (var j = 0; j < arr2.length; j++){
    if (arr1[i] === arr2[j]){
      console.log(arr1[i]);
    }
  }
}

console.log('числа которые есть в одном но нет в другом');

for (var i = 0; i < arr1.length; i++){
  for (var j = 0; j < arr2.length; j++){
    if (arr1[i] === arr2[j]){
      arr1.splice(i,1);
    }
  }
}
console.log(arr1);


//произведение элементов массива
var arr = [2, 3, 4, 5];
var sum = 1;
for (var i = 0; i < arr.length; i++){
  sum *= arr[i];
}
console.log(sum);


//элементы массива, которые больше 3-х, но меньше 10
var arr = [2, 5, 9, 15, 0, 4];

for (var i = 0; i < arr.length; i++){
  if (arr[i] > 3 && arr[i] < 10){
    console.log(arr[i]);
  }
}

== перед сравнением величин производит приведение типов;
=== сравнивает величины без приведения (если величины разных типов, вернет false, даже не сравнивая);
1 == "1" // возвращает true
1 === "1" // возвращает false
