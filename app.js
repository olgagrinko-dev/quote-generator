const p = document.querySelector('p');
const array = ['If you fall asleep now, you will dream. If you study now, you will live your dream.',
    'When you think it’s too late, the truth is, it’s still early.',
    'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.',
    'Studying is not about time. It’s about effort.',
    'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
    'Success only comes with self-management and determination.',
    'If you don’t walk today, you’ll have to run tomorrow.',
    'The level of education is in direct correlation with your salary.',
    'When today is over, it will never come back.',
    'Even now, your enemies are eagerly flipping through books.']

let flag = false;
function showQuotes(p_, array_) {
    try {
        let random = Math.floor(Math.random() * 10);
        p_.textContent = array_[random];
        if (flag === false) {
            p_.style = 'color: #FFF';
            flag = true;
        } else {
            p_.style = 'color: red';
            flag = false;
        }
    } catch (error) {
        return error.message;
    }
}

setInterval(showQuotes, 3000, p, array);
