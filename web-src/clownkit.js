import { Clownkit } from '@nzsc/clownkit';
import firebase from './firebase';

const clownkit = new Clownkit(firebase);

window.clownkit = clownkit;

export default clownkit;
