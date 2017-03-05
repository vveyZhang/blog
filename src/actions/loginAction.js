import Reflux from 'reflux';
export let loginAction= Reflux.createActions([
    'getUrl',
    'clearUrl',
    'changeUser',
    'changePw',
    'isComplete',
    "loginFail"
]);
