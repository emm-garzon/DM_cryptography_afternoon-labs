// 3,5 -- 'cats' would be ffwx; it would appear on the surface that 'ff' would be the same letters when decoded, but that isnt the case because we are alternating the values that each letter is translated by

const codeMe = (str) => {
  let newCharArray = [];
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (i % 2 === 0) {
      // console.log(strArray[i], str.charCodeAt(i));
      let newChar = String.fromCharCode(str.charCodeAt(i) + 3);
      newCharArray.push(newChar);
      // console.log(newChar);
    } else {
      // console.log(strArray[i], str.charCodeAt(i));
      let newChar2 = String.fromCharCode(str.charCodeAt(i) + 5);
      newCharArray.push(newChar2);
      // console.log(newChar2);
    }
  }
  let codedMsg = newCharArray.join("");
  console.log(codedMsg);
};

codeMe("cats"); // ffwx
codeMe("dogs"); //
codeMe("turtles"); //

// alpha = "a";
// console.log(alpha.charCodeAt(0));
