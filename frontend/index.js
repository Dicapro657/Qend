
import { checkAccess } from './components/LaxirimosaAccess';

const userCode = prompt("Enter your secret code:");

if (checkAccess(userCode)) {
    alert("Access granted to XIRION SUPER INTELLIGENT mode.");
    // Load the advanced AI interface
} else {
    alert("Access denied. You may only interact with public site features.");
}
