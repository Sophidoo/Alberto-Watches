var app = angular.module('myApp', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
        templateUrl: '../pages/index.html',
        controller: 'homeController'
        }).
        when('/about', {
        templateUrl: '../pages/about.html',
        controller: 'aboutController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
);
app.controller('homeController', function($scope){
    $scope.message="hello from first controlles"
})
app.controller('aboutController', function($scope){
    $scope.message="hello from first controlles"
})

const productCard = document.getElementById('productModal')
const techCard = document.getElementById('techModal')


const ShowProductModal = () => {
    if(techCard.style.display === 'flex'){
        techCard.style.display = 'none'
    }
    productCard.style.display = 'flex'
}
const ShowTechModal = () => {
    if(productCard.style.display === 'flex'){
        productCard.style.display = 'none'
    }
    techCard.style.display = 'flex'
}
const hideProductModal = () => {
    productCard.style.display = 'none'
}
const hideTechModal = () => {
    techCard.style.display = 'none'
}
