var app = angular.module('myApp', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
        templateUrl: '../pages/home.html',
        controller: 'homeController'
        }).
        when('/about', {
        templateUrl: '../pages/about.html',
        controller: 'aboutController'
        }).
        when('/contact', {
        templateUrl: '../pages/contact.html',
        controller: 'contactController'
        }).
        when('/product', {
        templateUrl: '../pages/vintage.html',
        controller: 'productController'
        }).
        when('/technology', {
        templateUrl: '../pages/technology.html',
        controller: 'productController'
        }).
        when('/gallery', {
        templateUrl: '../pages/gallery.html',
        controller: 'productController'
        }).
        when('/sitemap', {
        templateUrl: '../pages/sitemap.html',
        controller: 'sitemapController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
);
app.controller('productController', function($scope){
    $scope.showDetails = false;
    $scope.showFilter = false;

    $scope.showFilterModal = function (){
        $scope.showFilter = true
    }
    $scope.showDetailsModal = function (){
        $scope.showDetails = true
    }
    $scope.closeFilterModal = function (){
        $scope.showFilter = false
    }
    $scope.closeDetailsModal = function (){
        $scope.showDetails = false
    }
})
app.controller('navController', function($scope){
    $scope.showNav = false
    
    $scope.showResponsiveNav = function() {
        if($scope.showNav){
            $scope.showNav = false
        }else{
            $scope.showNav = true
        }
    }
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
