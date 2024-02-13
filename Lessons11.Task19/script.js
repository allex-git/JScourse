const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let str = '';
        for (let i = 0; i < length; i++) {
            let pos = Math.floor(Math.random() * characters.length);
            str += characters.substring(pos,pos+1);
        }
        return str;
}
const key = generateKey(16, characters);
console.log(key); 