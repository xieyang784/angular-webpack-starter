/*
 * Javascripts
 * ========================================================================== */

import angular          from 'angular';
import HomeController   from './HomeCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/home.scss';

/* ========================================================================== */


export default angular.module('Home', []).controller('HomeController', HomeController).name;
