function solution(A) {
    const cols = A[0].length;
    let output = [];    
    let currentX = 0;
    let currentY = 0;
    let isRight = false;

    if (cols === undefined && A.length === 1) {
        return A[0];
    }
    else if (cols === 1 && A.length > 0) {
        return A.join('');
    }
    else if (cols > 0 && A.length === 1) {
        return A[0].join('');
    }
    else {  
        let num = A[0][0];
        output.push(num);
        for (let i=0; i<A.length; i++) {                
            if (currentY+1 < cols) {
                let p1 = A[currentX][currentY+1];
                let p2 = A[(currentX+1 < A.length) ? currentX+1 : i][currentY];
                if (p1 === p2) {                                    
                    if(!isRight) {
                        currentY = (currentY+1 < A[0].length) ? currentY+1 : currentY;
                        num = A[currentX][currentY];
                        output.push(num);
                        isRight = true;
                    } else {
                        currentX = (currentX+1 < A.length) ? currentX+1 : i;
                        num = A[currentX][currentY];
                        output.push(num);
                        isRight = false;
                    }
                }
                else {
                    const num = Math.max(p1, p2);
                    if (num === p1) {                
                        currentY = currentY+1;
                    }                
                    if (num === p2) {
                        currentX = currentX + 1;
                        currentX = (currentX < A.length) ? currentX : i;
                    }                
                    output.push(num);                
                }
                if (A.length >= 3 && A[0].length >= 3 && currentY+1 === cols) {
                    num = A[(currentX+1 < A.length) ? currentX+1 : i][cols-1];
                    output.push(num);      
                }
            } 
            else if (currentY+1 === cols) {
                num = A[(currentX+1 < A.length) ? currentX+1 : i][cols-1];
                output.push(num);      
            }
            else if (currentX+1 === A.length) {
                num = A[(currentX+1 < A.length) ? currentX+1 : i][cols-1];
                output.push(num);  
            }
        }
        return output.join('');
    }
}