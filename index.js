// Here we learn Matrix structure:
// # 	   0  1  2
// 0	[ [1, 2, 3],
// 1	  [4, 5, 6],
// 2	  [7, 8, 9] ]

function logEachMatrix(matrix) {
  console.log(`Log each matrix item:\n`);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`item {${i}, ${j}} - ${matrix[i][j]}`);
    }
  }
}
function showMatrix(matrix) {
  console.log(`\nShow each matrix items beautifully:`);
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("  "));
  }
}
function showSumByRow(matrix) {
  console.log(`\nShow sum of each row:`);
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = matrix[i].reduce((acc, cur) => acc + cur);
    result.push(sum);
    // console.log(`sum of row ${i + 1}: ${sum}`);
  }
  console.log(result);
}
function findColumnWithZero(matrix) {
  console.log(`\nThese columns have 0:`);

  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        result.push(i);
        break;
      }
    }
  }
  console.log(result);
}
function snakeJazz(matrix) {
  console.log(`\nShow items like snake walk`);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let currentIndex = i % 2 === 0 ? j : matrix[i].length - 1 - j;
      console.log(matrix[i][currentIndex]);
    }
  }
}
function showMainDiag(matrix) {
  console.log(`\nShow main diagonal:`);

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}
function showSideDiag(matrix) {
  console.log(`\nShow side diagonal:`);

  let leng = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][leng - 1 - i]);
  }
}
function showBottomTriangle(matrix) {
  console.log(`\nShow bottom triangle:`);

  let result;
  for (let i = 0; i < matrix.length; i++) {
    result = [];
    for (let j = 0; j <= i; j++) {
      result.push(matrix[i][j]);
    }
    console.log(result.join("  "));
  }
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 3, 6, 9],
  [6, 8, 0, 2],
];
// Uncomment these function calls below to see what they do:

// logEachMatrix(matrix);
// showMatrix(matrix);
// showSumByRow(matrix);
// findColumnWithZero(matrix);
// snakeJazz(matrix);
// showMainDiag(matrix);
// showSideDiag(matrix);
// showBottomTriangle(matrix);
