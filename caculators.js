var a = 1;

// 1. if...else
if(a > 2){
    console.log('a > 2');
}else{
    console.log('a <= 2');
}

// 2. if...else if...else
if (a > 2) {
    console.log('a > 2');
}else if( a == 2){
    console.log('a = 2');
}else if (a == 0) {
    console.log('a = 0'); // 먼저 참이 나오면 다음 조건문으로 가지 않는다.
}else if (a < 2) {
    console.log('a < 2');
}

// 3. switch

var mbti = 'INFP';
var val;

switch (mbti) {
    case 'INFP':
        val = 'INFP';
        break;
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        val = 'ISTJ';
        break;
    defalut:
        val = '유효한 값이 아닙니다.'
}