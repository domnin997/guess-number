export default function getRightForm (num, forms) {
  
    let n = Math.abs(num);
    n %= 100;
  
    if (n >= 5 && n <= 20) {
        return forms[2];
      }

    n %= 10;
    
    if (n === 1) {
        return forms[0];
    }

    if (n >= 2 && n <= 4) {
        return forms[1];
    }

    return forms[2];
}