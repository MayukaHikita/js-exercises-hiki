export function compare(a,b){
    if(Math.abs(a-b) < Math.pow(10, -10)){
        return true;
    }else{
        return false;
    }
}