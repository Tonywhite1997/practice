// function sameValue(arr1, arr2){
//     let hashTable = {}
//     for(let i=0; i < arr1.length; i++){
//         hashTable[arr1[i]] = true
//     }
//     for(let j=0; j<arr2.length; j++){
//         if(hashTable[arr2[j]]){
//             return true
//         }
//     }
//     return false
// }

// let a = [1,2,3]
// let b = [1,4,5]

// console.log(sameValue(a,b))

// function recurrChar(array){
//     for(let i=0; i< array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i]===array[j]){
//                 return array[i]
//             }
//         }
//     }
//     return false
// }

// console.log(recurrChar(["b", "a", "c"]));

//with hash table

// function recurChar(array){
//     let obj = {}
//     let count = 0
//     for(let i=0; i<array.length; i++){
//         if(array[i] in obj){
//             return array[i]
//         }
//         else{
//             obj[array[i]] = count+1
//         }
//         console.log(obj);
//     }
//     return null
// }

// console.log(recurChar([0,1,1,2,3, 4,4]));

// function binarySearch(array){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === 7){
//             return i
//         }
//     }
//     return -1
// }

// let numbers = [1,2,78,5]
// console.log(binarySearch(numbers))

// function threeFive(num){
//     if(num % 3 === 0 && num % 5 === 0){
//         return "fizzBuzz"
//     }
//     else if(num % 5 ===0){
//         return "buzz"
//     }
//     else if(num % 3 === 0){
//         return "fizz"
//     }
//     else{
//         return num
//     }
// }
// console.log(threeFive(30))

// function binarySearch(array, target){
//     let first = 0
//     let last = array.length-1
//     while(first <= last){
//         let midpoint = Math.round((first + last) /2)
//         if(array[midpoint]=== target){
//             return midpoint
//         }
//         else if(array[midpoint] < target){
//             first = midpoint  + 1
//         }
//         else{
//             array[midpoint] > target
//             last = midpoint - 1
//         }
//     }
//     return "not dound"
// }

// function recursiveBinarySearch(array, target){
//     if(array.length === 0){
//         return false
//     }
//     else{
//         let midpoint = Math.floor(array.length/2)
//         if(array[midpoint]=== target){
//             return true
//         }
//         else if(array[midpoint] < target){
//             return recursiveBinarySearch(array.slice(midpoint + 1), target)
//         }
//         else{
//             return recursiveBinarySearch(array.slice(0, midpoint), target)
//         }

//     }
// }
// let numbers = [1,2,3,4,5,6, 7, 8, 9]
// console.log(recursiveBinarySearch((numbers), 10));

// function linearSearch(array, target){
//     for(let i=0; i< array.length; i++){
//         if(array[i]=== target){
//             return i
//         }
//     }
//     return "not found"
// }

// let numbers = [1,2,3,4,5,6, 7, 8, 9]
// console.log(linearSearch((numbers), 0));



// function binarySearch(array, target){
    //     let first = 0
    //     let last = array.length-1
    //     while(first <= last){
    //         let midpoint = Math.round((first + last) /2)
    //         if(array[midpoint]=== target){
    //             return midpoint
    //         }
    //         else if(array[midpoint] < target){
    //             first = midpoint  + 1
    //         }
    //         else{
    //             array[midpoint] > target
    //             last = midpoint - 1
    //         }
    //     }
    //     return "not dound"
    // }
    
// function searchName(array, target){
    
//     let first = 0
//     let last = array.length-1
//     while(first <= last){
//         let mid = Math.round((first + last)/2)
//         if(array[mid] === target){
//             return array[mid]
//         }
//         else if(array[mid] < target){
//             first = mid + 1 
//         }
//         else{
//             array[mid] > target
//             last = mid - 1
//         }
//     }
    
//     return "not found"

// }

// numbers = ["ade", "ayo", "dada", "deji", "debo", "emmanuel"]

// console.log(searchName(numbers, "ayo"));
// const input = document.querySelector("input")

// let timeId;
// function onInput(event){
//     if(timeId){
//         clearTimeout(timeId)
//     }
//     timeId = setTimeout(()=>{
//         console.log(event.target.value);
//     }, 1000)
// }

// input.addEventListener("input", onInput)

// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }
//     let sorted = []
//     let pivot = array[0];
//     let smallerArray = [];
//     let biggerArray = [];
//     for(let number of array.slice(1)){
//         if(number <= pivot){
//             smallerArray.push(number)
//         }
//         else{
//             biggerArray.push(number)
//         }
//     } 

//     return sorted.concat(quickSort(smallerArray), pivot, quickSort(biggerArray))

// }

// let numbers = [3,5,6,3,22,1,6,8,64,3, 2]
// console.log(quickSort(numbers))



// function mergeSort(array){
//     if(array.length <=1){
//         return array
//     }
//     let middle = Math.round(array.length/2)
//     let leftHalf  = mergeSort(array.slice(0, middle))
//     let rightHalf  = mergeSort(array.slice(middle))
//     let sorted = []
//     let i = 0
//     let j = 0
//     while(i < leftHalf.length && j< rightHalf.length){
//         if(leftHalf[i] < rightHalf[j]){
//             sorted.push(leftHalf[i])
//             i+=1
//         }
//         else{
//             sorted.push(rightHalf[j])
//             j+=1
//         }
//     }
//     sorted += leftHalf.slice(i)
//     sorted += rightHalf.slice(j)
//     return sorted
// }

// let numbers = [1,2,3,4,5]
// console.log(mergeSort(numbers))

// let numbers = [5,1,4,64,22,68,5,3,6]
// numbers.sort(()=>{
//     return Math.random() - 0.5
// })

// console.log(numbers);

// function quicksort(array){
//     if(array.length <= 1){
//         return array;
//     };
//     let pivot = array[0];
//     let smallerArray = [];
//     let biggerArray = [];
//     for(let number of array.slice(1)){
//         if(number <= pivot){
//             smallerArray.push(number)
//         }
//         else{
//             biggerArray.push(number)
//         }
//     }
//     let newArray = []

//     return newArray.concat(quicksort(smallerArray), pivot, quicksort(biggerArray))
// }

// function verifySort(array){
//     if(array.length < 2){
//         return true
//     }
//     return array[0] <= array[1] && verifySort(array.slice(1))
// }

// let result = quicksort(numbers)
// console.log(result);
// console.log(verifySort(result));

// function twoSum(array, target){
//     let storage = {}
//     for(let [index, num] of array.entries()){
//         if(storage[num] !== undefined){
//             return [storage[num], index]
//         }
//         else{
//             storage[target-num] = index
//         }
//     }

//     // return storage

// }

// let codes = [1,2,3,4,5]
// console.log(twoSum(codes, 5))



// function verifySort(array){
//     if(array.length <= 1){
//         return true
//     }

//     return array[0] <= array[1] && verifySort(array.slice(1))

    
// }



// let numbers = []
// for(let i=0; i<10000; i++){
//     numbers.push(Math.floor(Math.random()*10000))
// }
// console.log(numbers);
// let start = new Date().getTime()
// console.log(quickSort(numbers));
// let end = new Date().getTime()
// let timeTaken = end - start
// console.log(timeTaken / 1000 + " seconds");

// console.log(verifySort(quickSort(numbers)))

// function occurrence(array){
//     if(array.length <=1){
//         return array
//     }
    
//     let hashMap = {}
//     for(let number of array){
//         if(hashMap[number] = hashMap[number]){
//             hashMap[number] = hashMap[number] + 1
//         }
//         else{
//             hashMap[number] = 1
//         }
        
//     }

//     return hashMap
// }

// let numbers = [1,1,1,1,1,1, 2,2,2]
// console.log(occurrence(numbers));

// let lengthOfLongestSubstring = function(s) {
//     for(let i=0; i<s.length; i++){
//         let count = 0
//         for(let j = i+1; j<s.length; j++){
//             if(s[i] !== s[j]){
//                 count += 1
//             }
//             else{
//                 if(s[i] === s[j]){
//                     count += 1
//                 }
//             }
//         }
//         return count
//     }
// };

// let alpaha = ["a", "b", "c", "d", "d", "d"]

// console.log(lengthOfLongestSubstring(alpaha))


// async function getData(latitude, longitude){
//     let res = await axios.get("https://api.openweathermap.org/data/3.0/", {
//         params:{
//             lat: latitude,
//             lon: longitude,
//             appid: "9a4f4bb3e9b9706556c90de2a41fb2db"
//         }
//     })

//     let result = res

//     console.log(result);
// }


// window.addEventListener("load", ()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPostion)
//     }
//     else{
//         return alert("Geolocation not supported in Browser.")
//     }
// })

// async function showPostion(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;

//     let response = await axios.get("https://api.openweathermap.org/data/2.5/weather?", {
//         params:{
//             lat: latitude,
//             lon: longitude,
//             appid: "9a4f4bb3e9b9706556c90de2a41fb2db"
//         }
//     })

//     console.log(response);
// }

// window.addEventListener("load", ()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(getLocation)
//     }
//     else{
//         return alert("Geolocation not supported")
//     }
// })


// let numbers = [1,2,3,4,5,6]

// numbers.sort(()=>{
//     return Math.random()-0.5
// })

// console.log(numbers);


// function getoccurence(array){
//     if(array.length <=1){
//         return array
//     }
//     let storage = {}
//     for(let number of array){
//         if(storage[number] = storage[number]){
//             storage[number] = storage[number] +1
//         }
//         else{
//             storage[number] = 1
//         }
//     }

//     return storage
// }

// let numbers = [1,2,3,4,4,4,1,2,1,5,6,6,6,6,6]

// console.log(getoccurence(numbers));

// let merge = function(nums1, m, nums2, n) {
//     return nums1.slice(0,m).concat(nums2.slice(0,n)).sort((a,b)=>{
//         return a-b
//     })
// };

// number1 = [1,2,3,0,0,0]
// number2 = [2,5,6]
// console.log(merge(number1, 3, number2, 3))

// let mostElement = function(nums){
//     let storage = {}
//     let max = 0
//     let result;
//     for(let number of nums){
//         let count = 0
//         if(storage[number] = storage[number]){
//             count ++
//             storage[number] = count
//         }
//         else{
//             count = 1
//             storage[number] = 2
//         }
//     }
//     return storage
// }

// let numbers = [6,6,6,6,6,6,6,5,5,5,5,5,5]

// console.log(mostElement(numbers))

// window.addEventListener("load", ()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(getPosition)
//     }
// })

// async function getPosition(position){
//     let longitude = position.coords.longitude;
//     let latitude = position.coords.latitude;
//     let res = await axios.get("https://api.openweathermap.org/data/3.0/onecall?", {
//         params:{
//             lat: latitude,
//             lon: longitude,
//             appid: "64945743c155b8baa811f31703d5204c"
//         }
//     })

//     console.log(res);
// }

// const message = btoa("i love you");

// console.log(message);
// let address = `${window.location}#${message}`
// console.log(address);
// let {hash} = window.location
// console.log(hash.slice(1));
// if(window.location.hash !== ""){
//     const reveal = atob(message)
//     console.log(reveal);
// }
// else{
//     console.log("nothing");
// }

const expandButton = document.querySelector(".expand")
// const example = document.querySelector(".example")

// expandButton.addEventListener("click", ()=>{
//     example.classList.add("show")
// })

// let a = [1,2,3,4,5,6]
// let target = 4
// let index = a.indexOf(target)
// let matched = a.find((x)=>{
//     return target === x 
// })

let nameText = document.querySelector("#name")


async function copyToClip(){
    
    try{
        await navigator.clipboard.writeText(nameText.value)
        alert("copied")
    }
    catch(err){
        console.log(err);
    }
}

nameText.addEventListener("change", copyToClip)


let buttonWidth;
expandButton.addEventListener("click", (e)=>{
    console.log(e.clientX);
    buttonWidth = e.clientX
    localStorage.setItem("position", JSON.stringify(buttonWidth))
    location.reload()
})

// original = 0

// window.addEventListener("keydown", (e)=>{
//     let newPosition = JSON.parse(localStorage.getItem("position"))
//     let monitorWidth = e.target.clientWidth
//     let left = monitorWidth - newPosition
//     let right = monitorWidth - left
//     console.log("left", left);
//     console.log("right", right);
//     console.log("total: ", left + right);
    
//     switch(e.key){
//         case "ArrowRight":
//             e.key === "ArrowRight"
//             original += 10
//             right -= 10
//             left += 10
//             newPosition += 10
//             localStorage.setItem("position", JSON.stringify(newPosition))
//             expandButton.style.transform = `translateX(${original}px)`
//             if(right > monitorWidth-10){
//                 return alert("cannot move further")
//             }
//             console.log("monitorWidth", monitorWidth);
//             break
//         case "ArrowLeft":
//             e.key === "ArrowLeft"
//             original -= 10
//             left -= 10
//             right += 10
//             newPosition -= 10
//             localStorage.setItem("position", JSON.stringify(newPosition))
//             expandButton.style.transform = `translateX(${original}px)`
//             console.log("monitorWidth", monitorWidth);
//             break
//         default:
//             return
//     }
// })














