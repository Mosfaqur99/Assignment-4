function willSuccess(marks) {

    let pass = 0;
    let fail = 0;

    for(const mark of marks){
        if(mark>=50){
            pass = pass + 1;
        }
        else{
            fail = fail + 1;
        }
    }

    if(pass > fail){
        return true;
    }
    else{
        return false;
    }


}

const gotChanced = willSuccess([50,46,100,80,74,12,44,45,10,45,78,95,33,49,70])
console.log(gotChanced)