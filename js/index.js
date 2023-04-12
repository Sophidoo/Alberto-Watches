var app = angular.module('myApp', ['ngRoute'])


// Routing With Angular js
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
        controller: 'techController'
        }).
        when('/gallery', {
        templateUrl: '../pages/gallery.html',
        controller: 'galleryController'
        }).
        when('/sitemap', {
        templateUrl: '../pages/sitemap.html',
        controller: 'sitemapController'
        }).
         when('/location', {
        templateUrl: '../pages/location.html',
        controller: 'locationController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
);

// Functions controlling the modal for product details
app.controller('productController', function($scope){
    $scope.showDetails = false;
    $scope.showFilter = false;
    $scope.showDetailsModal = function (){
        $scope.showDetails = true
    }
    $scope.closeDetailsModal = function (){
        $scope.showDetails = false
    }
})

// Functions controlling the modal for the responsive navbar
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
