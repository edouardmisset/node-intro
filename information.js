const name = 'Edouard Misset';
let age = 30;
let passions = ['Climbing', 'Drinking', 'Cycling'];
const campus = 'Lyon';

const myObject = {
  text: `Hello ${name} from ${campus}`,
  cow: '', // Template for a cow, get inspiration from `./cows`
  eyes: 'oO', // Select the appearance of the cow's eyes, equivalent to cowsay -e
  tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
  wrap: true, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
  wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
  mode: 'd', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
};

const myInfo = () => console.log(name, age, passions);

module.exports = myObject;
