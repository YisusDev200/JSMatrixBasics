function det(matrix) {
  if (matrix.length == 2) {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[1][0];
    let d = matrix[1][1];
    return a * d - c * b;
  }
  const row = 0;
  let totalDet = 0;
  for (let column = 0; column < matrix.length; column += 1) {
    let cofactor = getCofactorFrom(matrix, row, column);
    let subDet = det(cofactor);
    let sum = matrix[row][column] * subDet;
    let negative = (column + 1) % 2 == 0;
    if (negative) {
      sum *= -1;
    }
    totalDet += sum;
  }

  return totalDet;
}
function getCofactorFrom(matrixO, row, column) {
  let matrix = copy(matrixO);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].splice(column, 1);
  }
  matrix.splice(row, 1);

  return matrix;
}

function isSquare(matrix) {
  return matrix.length == matrix[0].length;
}

function transpose(matrixO) {
  let matrix = copy(matrixO);
  let transpose = [];

  let height = matrix.length;
  let width = matrix[0].length;
  for (let column = 0; column < width; column++) {
    transpose.push([]);
    for (let row = 0; row < height; row++) {
      transpose[column].push(matrix[row][column]);
    }
  }

  return transpose;
}

function canMultiply(matrix1, matrix2) {
  return matrix1[0].length == matrix2.length;
}

function multiply(matrix1O, matrix2O) {
  let matrix1 = copy(matrix1O);
  let matrix2 = copy(matrix2O);
  let transformMatrix = [];

  for (let i = 0; i < matrix1.length; i++) {
    transformMatrix.push([]);
    let v1 = matrix1[i];
    for (let j = 0; j < matrix2[0].length; j++) {
      let v2 = getColumnVectorFrom(matrix2, j);
      let element = dotProductof(v1, v2);
      transformMatrix[i].push(element);
    }
  }

  return transformMatrix;
}

function dotProductof(vector1O, vector2O) {
  let vector1 = copy(vector1O);
  let vector2 = copy(vector2O);

  let sum = 0;
  for (let i = 0; i < vector1.length; i++) {
    sum += vector1[i] * vector2[i];
  }

  return sum;
}

function getColumnVectorFrom(matrixO, c) {
  let matrix = copy(matrixO);
  let cVector = [];

  for (let row = 0; row < matrix.length; row++) {
    cVector.push(matrix[row][c]);
  }

  return cVector;
}

function sameSize(matrix1, matrix2) {
  return (
    matrix1.length == matrix2.length && matrix1[0].length == matrix2[0].length
  );
}

function add(matrix1O, matrix2O) {
  let matrix1 = copy(matrix1O);
  let matrix2 = copy(matrix2O);

  let sumMatrix = [];

  for (let i = 0; i < matrix1.length; i++) {
    sumMatrix.push([]);
    for (let j = 0; j < matrix1[1].length; j++) {
      sumMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
    }
  }

  return sumMatrix;
}

function subtract(matrix1O, matrix2O) {
  let matrix2 = multiplyByConstant(-1, matrix2O);
  return add(matrix1O, matrix2);
}

function multiplyByConstant(k, matrixO) {
  let matrix = copy(matrixO);
  let transformMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    transformMatrix.push([]);
    for (let j = 0; j < matrix[1].length; j++) {
      transformMatrix[i].push(k * matrix[i][j]);
    }
  }

  return transformMatrix;
}

function copy(aObject) {
  if (!aObject) {
    return aObject;
  }
  let v;
  let bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];
    bObject[k] = typeof v === "object" ? copy(v) : v;
  }
  return bObject;
}

function calculatePowers(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let parts = arr[i].split("^");
    let base = Number(parts[0]);
    let exponent = Number(parts[1]);
    let result = Math.pow(base, exponent);
    results.push(result);
  }
  return results;
}
