function willSuccess(marks) {
    if(Array.isArray(marks) === true){
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
    else{
        let Reply = "Invalid";
        return Reply;
    }
}

const gotChanced = willSuccess(  [55,75,41,53,60,87,91,30])
console.log(gotChanced)