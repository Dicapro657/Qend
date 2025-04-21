
import { YOUR_SECRET_CODE } from '../utils/accessControl';

export function checkAccess(userInputCode) {
    return userInputCode === YOUR_SECRET_CODE;
}
