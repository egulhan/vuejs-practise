import StrengthPassword from '../src/StrengthPassword';
import test from 'ava';

test('fail if password length is less than 6', t => {
    let strengthPassword=new StrengthPassword();
    t.is(strengthPassword.checkMinLength('123456'), true);
});
