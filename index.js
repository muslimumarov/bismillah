// const firstName = 'Muslim'
// const lastName = "Umarov"
// const age = 27
// console.log(`My name is ${firstName}, My Last Name ${lastName}, my age ${age}`);
// const isMarrid = true
// const Nomarrid = false
// const sr = false
// const how = isMarrid || Nomarrid  && sr
// console.log(how);
// const how = prompt("how old are you", "")
// // console.log(`I am ${how} yaars old`);
// const serial = +prompt(`nechta serila ko'rdingiz?`, " ")
// const obj ={
//   count : serial,
//   series : [],
// }
// const a = prompt('qaysi serial kording', '')
// const b = +prompt('nechhi baho berasiz', " ")
//  obj.series[a] = b
//  console.log(obj);

// const rang = prompt("Rang kirit", 'rang kirit')
// // if(Svetafor == "qizil") {
// //   console.log('Stop')
// // } else if (Svetafor == "sariq") {
// //   console.log("tayorlan")
// // } else  if(Svetafor == "yashil") {
// //   console.log('bos')
// // } else {
// //   console.log('yo, yashil, yo, sariq , yo qizil, rang kirit')
// // }
// // const a = +prompt('yosh kirit', '')
// // if(a > 18) {
// //   console.log('ruxsat')
// // } else if (a >= 18) {
// //   console.log('ha mayli')
// // } else if(a < 18) {
// //   console.log('ukam yoshsan')
// // }
// // else {
// //   console.log('son kirting')
// // }
// // type
// // const a  = 33
// // console.log(a === "33");
// switch(rang) {
//   case "red":
//    console.log('stop');
//    break
//    case "yellow":
//     console.log('tayorlan')
//     break
//     case "blue":
//       console.log('gov')
//       default:
//
// }

// const a = prompt('fasl kirit', "")
// switch(a) {
//   case "yanvar":
//     console.log('hozir qish');
//     break
//     case "mart":
//       console.log('hozr bahor')
//       break
//       case "August":
//         console.log('hozr yoz')
//         break
//         case "sentabr":
//           console.log("hozr kuz")
//           break
//           default:
//             console.log('xatolik')
// }
// let num = 1
// while(num <= 5 ) {
//   console.log(num);
//   num++

// }
// do {
// console.log(num);
// num++
// // } while(num <= 5)
// for (num; num <= 5; num++) {
//   if(num == 2) {
//     // break
//     continue
//   }
//   console.log(num);

// }

const kino = prompt('nechta serila kordingiz')

const obj = {
  count: kino,
  series: {},
  actors: [],
}
for (let i = 0; i < 3; i++) {
  const a = prompt(`qaysi serialni kordingiz ${i}`, "")
  const b = prompt(`nechchi baho qoyasz ${i}`, "")
  obj.series[a] = b
  if(a !== null && b !== null && a !=="" && b !=="") {
    console.log('DONE')
  } else {
    i--
  }
}

if(obj.count < 1 ) {
  console.log('siz kam kino korarkansz')
} else if(obj.count < 5 ) {
  console.log('siz klsasic')
} else if(obj.count  > 10 )
 {console.log('siz zvezdasz')}
console.log(obj);
