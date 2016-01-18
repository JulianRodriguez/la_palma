'use strict';

/**
 * @ngdoc function
 * @name barApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the barApp
 */

angular.module('barApp', ["ngResource"]);
angular.module('barApp').controller('ContactoCtrl', function ContactoCtrl($scope, $http) {
    		$scope.enviarconsulta = function(){
    			$http.put('https://api.mongolab.com/api/1/databases/lapalmaiiss/collections/Consulta/'+generateUUID()+'?apiKey=D60O7v07BvUYuFYQ8HX6QB5NAgVdy-7A',
      				{ nombre: $scope.nombre,
        			  email: $scope.email,
        			  asunto: $scope.subject,
        			  consulta: $scope.consulta,
                resuelta: 'NO'
      				})
    			alert("Consulta recibida, gracias.");
    		}

    		$scope.reservar = function(){
    			$http.put('https://api.mongolab.com/api/1/databases/lapalmaiiss/collections/Reserva/'+generateUUID()+'?apiKey=D60O7v07BvUYuFYQ8HX6QB5NAgVdy-7A',
      				{ nombre: $scope.first_name,
      				  apellidos: $scope.last_name,
      				  fecha: $scope.datepicker,
      				  telefono: $scope.phone,
      				  personas: $scope.guest,
        			  email: $scope.email,
                confirmada: 'NO'
      				})
    			alert("Reserva solicitada, nos pondremos en contacto con usted para confirmarla.");
    		}

  		});

	
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['barApp']);
        });

//Funcion que genera un numero unico y aleatorio
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};
