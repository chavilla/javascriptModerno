
import { showAlert } from './messages';
import $ from 'jquery';

//Imports the css files
import './styles.css';


const btn=document.querySelector('#btn');

btn.addEventListener('click',()=> showAlert())

$('#btn-jk').click(()=>alert('Desde jquery'));