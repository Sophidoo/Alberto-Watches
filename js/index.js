
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
    $scope.showDetailsModal = function (product){
        $scope.showDetails = true
        $scope.prdname = product.picturename
        $scope.desc = product.picturedescription
        $scope.price = product.price
        $scope.picture = product.picture
        $scope.brand = product.brand
        $scope.product = product.product
        $scope.technology = product.technology
    }
    $scope.closeDetailsModal = function (){
        $scope.showDetails = false
    }

    $scope.products = [
        // Vintage
        {
            id: 1,
            picture: "../images/Vintage-Rolex-Watch.webp",
            picturename: "50's Swiss Wittnauer Chronograph",
            picturedescription:	" Late 1950's Swiss Wittnauer Chronograph. Original multicolored dial looks fantastic. Applied markers and numerals. ",
            price: "$3,990",
            technology: "Nano-Technology",
            brand: "Rolex",
            product: "Chronograph Watches",
        },
        {
            id: 2,
            picture: "../images/rolexpercision.webp",
            picturename: "1960's Enicar Chronograph Valjoux",
            picturedescription:	"1960's Swiss Enicar Chronograph. Original matte black colored	dial looks fantastic. Chrome applied markers. Dial is perfect.Sharp looking matching hands.",
            price: "$3,990",
            technology: "Nano-Technology",
            brand: "Rolex",
            product: "Chronograph Watches",
        },
        {
            id: 3,
            picture: "https://imgs.search.brave.com/rP6C4hKYbSfw7Yc1mfGcA-gZlsVq8o6UeR_hNi9jN3I/rs:fit:1200:1125:1/g:ce/aHR0cHM6Ly9pbWcw/LmV0c3lzdGF0aWMu/Y29tLzAwMC8wLzU2/Nzk5NzUvaWxfZnVs/bHhmdWxsLjM0NzI2/NTM4OC5qcGc",
            picturename: "1971 Bulova Accutron Spaceview 214",
            picturedescription:	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia. Saepe veritatis totam consequuntur nesciunt recusandae voluptate placeat.",
            price: "$3,990",
            technology: "Quartz",
            brand: "Gucci",
            product: "GMT Watches",
        },
        {
            id: 4,
            picture: "https://imgs.search.brave.com/nyQcQ1nrabUIsRoJ0omTNrUvyytpYTQ-kjE7d2bJr-w/rs:fit:1200:1200:1/g:ce/aHR0cDovL2kuZWJh/eWltZy5jb20vMDAv/JFQyZUMxNlpISkg4/RTlxU0VXeTIwQlJZ/MGxPYjJ1d35-/XzMyLkpQRw",
            picturename: "Antique Clock",
            picturedescription:	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia. Saepe veritatis totam consequuntur nesciunt recusandae voluptate placeat.",
            price: "$3,990",
            technology: "Quartz",
            brand: "clock",
            product: "Clocks",
        },
    
        {
            id: 5,
            picture: "https://imgs.search.brave.com/2k0G1hElzQSDd6Bc0O4eYw2l6_HXC9QNDeyl_AZd1js/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tYW5k/YndhdGNoZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL0lNR18wMzM5/LmpwZw",
            picturename: "30's Gruen Techni-Quadron Dr's Watch",
            picturedescription:	"1930’s hard to find Gruen Doctor’s watch. Unique designed duo registers dial. The larger second register allowed a doctor tosee the seconds easier while taking a pulse. Original dial looks awesome.",
            price: "$3,990",
            technology: "Solar",
            brand: "Rolex",
            product: "Fashion Watches",
        },
        // Luxury
        {
            id: 6,
            picture: "https://www.toptrendsguide.com/wp-content/uploads/2020/03/Audemars-Piguet.jpg",
            picturename: "Audemars Piguet",
            picturedescription:	"Audemars Piguet is one of the best luxury watch brands in the world, offering premium timepieces with elegant designs and high-quality mechanics that make a bold statement.",
            price: "$4,990",
            technology: "Solar",
            brand: "Gucci",
            product: "Luxury",
        },
        {
            id: 7,
            picture: "https://www.toptrendsguide.com/wp-content/uploads/2020/03/Vacheron-Constantin.jpg",
            picturename: "Vacheron Constantin",
            picturedescription:	"Vacheron Constantin is one of the oldest and most reputable upscale watch brands and was founded in 1755.",
            price: "$3,990",
            technology: "GPS",
            brand: "Gucci",
            product: "Luxury",
        },
        {
            id: 8,
            picture: "https://imgs.search.brave.com/_1cD5VRdT7qeBgIRbTnZ0Mm2rrobJHl_yMCWM36Shwc/rs:fit:664:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tVmsxR2Q0UzBE/RzQvVXBSQkJwS1d6/akkvQUFBQUFBQUFE/OXMvMVBUX0NJbmNV/Z2cvczE2MDAvVmlu/dGFnZS1Sb2xleC13/YXRjaGVzLVVLLUNv/bGxlY3Rpb24tZm9y/LU1lbi1GYXNoaW9u/KDMpLmpwZw",
            picturename: "Unique LeCoultre V&C Mystery Diamond Dial 14kt",
            picturedescription:	"60's LeCoultre Mystery Dial. Original silver tone dial with thin chrome markers. Dial showing some unique aging.",
            price: "$1,990",
            technology: "Wireless Charging",
            brand: "Gucci",
            product: "Sports Watches",
        },
        {
            id: 9,
            picture: "https://www.toptrendsguide.com/wp-content/uploads/2020/03/Patek-Philippe.jpg",
            picturename: "Patek Philippe",
            picturedescription:	"Patek Philippe is a high-end Swiss watch brand specializing in timepieces that are built to last. Favoring mechanical ingenuity and classic styling.",
            price: "$990",
            technology: "Bluetooth",
            brand: "Gucci",
            product: "Sports Watches",
        },
        {
            id: 10,
            picture: "https://imgs.search.brave.com/2k0G1hElzQSDd6Bc0O4eYw2l6_HXC9QNDeyl_AZd1js/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tYW5k/YndhdGNoZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL0lNR18wMzM5/LmpwZw",
            picturename: "30's Gruen Techni-Quadron Dr's Watch",
            picturedescription:	"1930’s hard to find Gruen Doctor’s watch. Unique designed duo registers dial. The larger second register allowed a doctor to see the seconds easier while taking a pulse.",
            price: "$3,990",
            technology: "Bluetooth",
            brand: "Gucci",
            product: "Casual Watches",
        },
    
        // Smart Watches
        {
            id: 11,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/apple-watch-sport-dec172019-min.jpg.webp",
            picturename: "Apple Watch",
            picturedescription:	" Apple has become the leader of mobile devices. From laptops to iPhones, the majority of humans on this planet have an Apple device.",
            price: "$10,364",
            technology: "Water Resistance",
            brand: "Apple",
            product: "Smart Watches",
        },
        {
            id: 12,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/samsung-galaxy-watch-dec172019-min.jpg.webp",
            picturename: "Samsung Galaxy Watch",
            picturedescription:	"Samsung offers a full-line of smartwatches that are stepping into the realm of the big-boy Apple Watch in terms of user-friendliness and compatibilities.",
            price: "$10,345",
            technology: "Atomic Timekeeping",
            brand: "Samsung",
            product: "Fashion Watches",
        },
        {
            id: 13,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/garmin-venu-dec172019-min.jpg.webp",
            picturename: "Garmin Venu",
            picturedescription:	"As you probably heard of Garmin back when those bulky GPS devices were a thing, they have recently made their resurgence in the smartwatch space.",
            price: "$5,990",
            technology: "Microprocessors",
            brand: "Garmin",
            product: "Casual Watches",
        },
        {
            id: 14,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/fitbit-ionic-smartwatch-dec172019-min.jpg.webp",
            picturename: "Fitbit Ionic Smartwatch",
            picturedescription:	"Fitbit is a company that strictly focuses on fitness watches and their product line has really grown over the years.",
            price: "$5,990",
            technology: "Touchscreen",
            brand: "Fitbit",
            product: "Smart Watches",
        },
    
        {
            id: 15,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/fossil-q-explorist-hr-dec172019-min.jpg.webp",
            picturename: "Fossil Q Explorist",
            picturedescription:	"Fossil smartwatches are unique because they still look like an actual watch. While many smartwatches of today look like an alien on your wrist, Fossil keeps “watch” vibes relevant with their many models.",
            price: "$7,660",
            technology: "Touchscreen",
            brand: "Fossil",
            product: "Smart Watches",
        },
    
        // Clocks
        {
            id: 16,
            picture: "https://imgs.search.brave.com/ThpvAXMIvdX2j_CnEnNPavkVl_WEdPyScIpyOL3j8l0/rs:fit:960:960:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMWRVYUdY/anp1SzFSalNzcGVx/NnppSFZYYXgvNDAt/NDUtNTBjbS0zRC1X/YWxsLUNsb2NrLUxh/cmdlLVdvb2Rlbi1W/aW50YWdlLVdhbGwt/Q2xvY2tzLVNpbGVu/dC1BbnRpcXVlLUJp/Zy1XYWxsLVdhdGNo/ZXMuanBn",
            picturename: "3D Wall Clock",
            picturedescription:	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem, corporis blanditiis temporibus voluptates quasi minima unde sapiente!",
            price: "$1,990",
            technology: "Wall Clocks",
            brand: "Gucci",
            product: "Clocks",
        },
        {
            id: 17,
            picture: "https://imgs.search.brave.com/_2XGuLHlb9SbvSXzeoVbj4jzphhpYQXIrBPm9OWGrM0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3MzLmFt/YXpvbmF3cy5jb20v/ZjAxLmp1c3RhbnN3/ZXIuY29tL2FudGlx/dWUlMjBjbG9jay5K/UEc",
            picturename: "Mantle Clock",
            picturedescription:	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos eveniet fugit laudantium, quisquam quas libero corrupti perspiciatis eos.",
            price: "$1,990",
            technology: "Wall Clocks",
            brand: "Gucci",
            product: "Clocks",
        },
    
        {
            id: 18,
            picture: "https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
            picturename: "Banjo Clock",
            picturedescription:	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos eveniet fugit laudantium, quisquam quas libero corrupti perspiciatis eos.",
            price: "$1,990",
            technology: "Alarm Clocks",
            brand: "Gucci",
            product: "Clocks",
        },
    
        // Nano-Technology
        {
            id: 19,
            picture: "https://moneyinc.com/wp-content/uploads/2016/04/Seiko-Astron-Solar-GPS-Chronograph-750x406.jpg",
            picturename: "Seiko Astron Solar GPS Chronograph",
            picturedescription:	"Priced at $1900, this is an expensive watch, no doubt, but the Astron line has long been synonymous with both quality and the latest in technological advances. This latest Astron is no exception.",
            price: "$30,990",
            technology: "LED",
            brand: "G-shock",
            product: "Vintage",
        },
        {
            id: 20,
            picture: "https://moneyinc.com/wp-content/uploads/2016/04/Polar-RS-800-CX.jpg",
            picturename: "Polar RS 800 CX",
            picturedescription:	"Finally, here’s an ultra high tech watch for those who lead an active life. If you play multiple sports, you’ll be thrilled by the capabilities of this magnificent watch. Packed with more than 80 features, it can measure ambient temperature, monitor your heart rate, your cadence, the average length of your running stride",
            price: "$10,990",
            technology: "LED",
            brand: "Gucci",
            product: "Fashion Watches",
        },
        {
            id: 21,
            picture: "https://www.watchtime.com/wp-content/uploads/2016/11/Richard_Mille_RM50-02_1000-570x764.jpg",
            picturename: "Richard Mille RM50",
            picturedescription:	"Richard Mille collaborated with Airbus Corporate Jets, which builds luxurious aircraft, to design a technical miracle with an extremely modern-styled tourbillon at 6 o’clock. The split-seconds chronograph for measuring lap times",
            price: "$10,990",
            technology: "LCD",
            brand: "Gucci",
            product: "Casual Watches",
        },
        {
            id: 22,
            picture: "https://www.watchtime.com/wp-content/uploads/2015/11/AUdemars_Piguet_ROO_Concept_Supersonnerie_1000-570x428.jpg",
            picturename: "AUdemars Piguet ROO Concept Supersonnerie",
            picturedescription:	"A tourbillon provides additional visual appeal in the open styling of this newest technological tour de force from Audemars Piguet. This timepiece also offers a delightful audible treat in the form of the clearest and loudest minute repeater in the entire watchmaking industry.",
            price: "$10,990",
            technology: "LCD",
            brand: "Gucci",
            product: "Luxury",
        },
        {
            id: 23,
            picture: "https://www.watchtime.com/wp-content/uploads/2016/03/EN_EN_Grand-Deck-Marine-Tourbilon_Photos-Grand-Deck_JPEG_Grand-Deck_1-copie-570x713.jpg",
            picturename: "Grand Deck Marine Tourbilon",
            picturedescription:	"The tourbillon is the sole classically designed component here. The highly unconventional time display consists of a jumping hour with two separate disks and a minutes hand pulled across a linear scale by slender cables.",
                price: "$10,990",
          technology: "Microprocessors",
          brand: "Gucci",
          product: "Vintage",
        },
    ]

    $scope.filterByCategory = function(type){
        $scope.productCategory = {product: type}
        $scope.name = type
    }
    $scope.filterByClocks = function(type){
        $scope.productCategory = {technology: type}
        $scope.name = type
    }
    $scope.viewAllWatches = function(){
        $scope.productCategory = ''
        $scope.name = 'All'
    }
})
// Functions controlling the modal for product details
app.controller('techController', function($scope){
    $scope.showDetails = false;
    $scope.showFilter = false;
    $scope.showDetailsModal = function (product){
        $scope.showDetails = true
        $scope.prdname = product.picturename
        $scope.desc = product.picturedescription
        $scope.price = product.price
        $scope.picture = product.picture
        $scope.brand = product.brand
        $scope.product = product.product
        $scope.technology = product.technology
    }
    $scope.closeDetailsModal = function (){
        $scope.showDetails = false
    }

    $scope.products = [
        // Vintage
        {
            id: 1,
            picture: "../images/Vintage-Rolex-Watch.webp",
            picturename: "50's Swiss Wittnauer Chronograph",
            picturedescription:	" Late 1950's Swiss Wittnauer Chronograph. Original multicolored dial looks fantastic. Applied markers and numerals. ",
            price: "$3,990",
            technology: "Nano-Technology",
            brand: "Rolex",
            product: "Vintage",
        },
        {
            id: 2,
            picture: "../images/rolexpercision.webp",
            picturename: "1960's Enicar Chronograph Valjoux",
            picturedescription:	"1960's Swiss Enicar Chronograph. Original matte black colored	dial looks fantastic. Chrome applied markers. Dial is perfect.Sharp looking matching hands.",
            price: "$3,990",
            technology: "Nano-Technology",
            brand: "Rolex",
            product: "Vintage",
        },
        {
            id: 3,
            picture: "https://imgs.search.brave.com/rP6C4hKYbSfw7Yc1mfGcA-gZlsVq8o6UeR_hNi9jN3I/rs:fit:1200:1125:1/g:ce/aHR0cHM6Ly9pbWcw/LmV0c3lzdGF0aWMu/Y29tLzAwMC8wLzU2/Nzk5NzUvaWxfZnVs/bHhmdWxsLjM0NzI2/NTM4OC5qcGc",
            picturename: "1971 Bulova Accutron Spaceview 214",
            picturedescription:	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia. Saepe veritatis totam consequuntur nesciunt recusandae voluptate placeat.",
            price: "$3,990",
            technology: "Quartz",
            brand: "Gucci",
            product: "GMT Watches",
        },
        {
            id: 4,
            picture: "https://imgs.search.brave.com/nyQcQ1nrabUIsRoJ0omTNrUvyytpYTQ-kjE7d2bJr-w/rs:fit:1200:1200:1/g:ce/aHR0cDovL2kuZWJh/eWltZy5jb20vMDAv/JFQyZUMxNlpISkg4/RTlxU0VXeTIwQlJZ/MGxPYjJ1d35-/XzMyLkpQRw",
            picturename: "Antique Clock",
            picturedescription:	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia. Saepe veritatis totam consequuntur nesciunt recusandae voluptate placeat.",
            price: "$3,990",
            technology: "Quartz",
            brand: "clock",
            product: "Clocks",
        },
    
        {
            id: 5,
            picture: "https://imgs.search.brave.com/2k0G1hElzQSDd6Bc0O4eYw2l6_HXC9QNDeyl_AZd1js/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tYW5k/YndhdGNoZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL0lNR18wMzM5/LmpwZw",
            picturename: "30's Gruen Techni-Quadron Dr's Watch",
            picturedescription:	"1930’s hard to find Gruen Doctor’s watch. Unique designed duo registers dial. The larger second register allowed a doctor tosee the seconds easier while taking a pulse. Original dial looks awesome.",
            price: "$3,990",
            technology: "Solar",
            brand: "Rolex",
            product: "Fashion Watches",
        },
        // Luxury
        {
            id: 6,
            picture: "https://www.toptrendsguide.com/wp-content/uploads/2020/03/Audemars-Piguet.jpg",
            picturename: "Audemars Piguet",
            picturedescription:	"Audemars Piguet is one of the best luxury watch brands in the world, offering premium timepieces with elegant designs and high-quality mechanics that make a bold statement.",
            price: "$4,990",
            technology: "Solar",
            brand: "Gucci",
            product: "Luxury",
        },
        {
            id: 7,
            picture: "https://www.toptrendsguide.com/wp-content/uploads/2020/03/Vacheron-Constantin.jpg",
            picturename: "Vacheron Constantin",
            picturedescription:	"Vacheron Constantin is one of the oldest and most reputable upscale watch brands and was founded in 1755.",
            price: "$3,990",
            technology: "GPS",
            brand: "Gucci",
            product: "Luxury",
        },
        {
            id: 8,
            picture: "https://imgs.search.brave.com/_1cD5VRdT7qeBgIRbTnZ0Mm2rrobJHl_yMCWM36Shwc/rs:fit:664:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tVmsxR2Q0UzBE/RzQvVXBSQkJwS1d6/akkvQUFBQUFBQUFE/OXMvMVBUX0NJbmNV/Z2cvczE2MDAvVmlu/dGFnZS1Sb2xleC13/YXRjaGVzLVVLLUNv/bGxlY3Rpb24tZm9y/LU1lbi1GYXNoaW9u/KDMpLmpwZw",
            picturename: "Unique LeCoultre V&C Mystery Diamond Dial 14kt",
            picturedescription:	"60's LeCoultre Mystery Dial. Original silver tone dial with thin chrome markers. Dial showing some unique aging.",
            price: "$1,990",
            technology: "Wireless Charging",
            brand: "Gucci",
            product: "Sports Watches",
        },
        {
            id: 9,
            picture: "https://www.toptrendsguide.com/wp-content/uploads/2020/03/Patek-Philippe.jpg",
            picturename: "Patek Philippe",
            picturedescription:	"Patek Philippe is a high-end Swiss watch brand specializing in timepieces that are built to last. Favoring mechanical ingenuity and classic styling.",
            price: "$990",
            technology: "Bluetooth",
            brand: "Gucci",
            product: "Sports Watches",
        },
        {
            id: 10,
            picture: "https://imgs.search.brave.com/2k0G1hElzQSDd6Bc0O4eYw2l6_HXC9QNDeyl_AZd1js/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tYW5k/YndhdGNoZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL0lNR18wMzM5/LmpwZw",
            picturename: "30's Gruen Techni-Quadron Dr's Watch",
            picturedescription:	"1930’s hard to find Gruen Doctor’s watch. Unique designed duo registers dial. The larger second register allowed a doctor to see the seconds easier while taking a pulse.",
            price: "$3,990",
            technology: "Bluetooth",
            brand: "Gucci",
            product: "Casual Watches",
        },
    
        // Smart Watches
        {
            id: 11,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/apple-watch-sport-dec172019-min.jpg.webp",
            picturename: "Apple Watch",
            picturedescription:	" Apple has become the leader of mobile devices. From laptops to iPhones, the majority of humans on this planet have an Apple device.",
            price: "$10,364",
            technology: "Water Resistance",
            brand: "Apple",
            product: "Smart Watches",
        },
        {
            id: 12,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/samsung-galaxy-watch-dec172019-min.jpg.webp",
            picturename: "Samsung Galaxy Watch",
            picturedescription:	"Samsung offers a full-line of smartwatches that are stepping into the realm of the big-boy Apple Watch in terms of user-friendliness and compatibilities.",
            price: "$10,345",
            technology: "Atomic Timekeeping",
            brand: "Samsung",
            product: "Chronograph Watches",
        },
        {
            id: 13,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/garmin-venu-dec172019-min.jpg.webp",
            picturename: "Garmin Venu",
            picturedescription:	"As you probably heard of Garmin back when those bulky GPS devices were a thing, they have recently made their resurgence in the smartwatch space.",
            price: "$5,990",
            technology: "Microprocessors",
            brand: "Garmin",
            product: "Chronograph Watches",
        },
        {
            id: 14,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/fitbit-ionic-smartwatch-dec172019-min.jpg.webp",
            picturename: "Fitbit Ionic Smartwatch",
            picturedescription:	"Fitbit is a company that strictly focuses on fitness watches and their product line has really grown over the years.",
            price: "$5,990",
            technology: "Touchscreen",
            brand: "Fitbit",
            product: "Smart Watches",
        },
    
        {
            id: 15,
            picture: "https://threadcurve.com/wp-content/uploads/2019/12/fossil-q-explorist-hr-dec172019-min.jpg.webp",
            picturename: "Fossil Q Explorist",
            picturedescription:	"Fossil smartwatches are unique because they still look like an actual watch. While many smartwatches of today look like an alien on your wrist, Fossil keeps “watch” vibes relevant with their many models.",
            price: "$7,660",
            technology: "Touchscreen",
            brand: "Fossil",
            product: "Smart Watches",
        },
    
        // Clocks
        {
            id: 16,
            picture: "https://imgs.search.brave.com/ThpvAXMIvdX2j_CnEnNPavkVl_WEdPyScIpyOL3j8l0/rs:fit:960:960:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMWRVYUdY/anp1SzFSalNzcGVx/NnppSFZYYXgvNDAt/NDUtNTBjbS0zRC1X/YWxsLUNsb2NrLUxh/cmdlLVdvb2Rlbi1W/aW50YWdlLVdhbGwt/Q2xvY2tzLVNpbGVu/dC1BbnRpcXVlLUJp/Zy1XYWxsLVdhdGNo/ZXMuanBn",
            picturename: "3D Wall Clock",
            picturedescription:	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem, corporis blanditiis temporibus voluptates quasi minima unde sapiente!",
            price: "$1,990",
            technology: "Rechargable Batteries",
            brand: "Gucci",
            product: "Clocks",
        },
        {
            id: 17,
            picture: "https://imgs.search.brave.com/_2XGuLHlb9SbvSXzeoVbj4jzphhpYQXIrBPm9OWGrM0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3MzLmFt/YXpvbmF3cy5jb20v/ZjAxLmp1c3RhbnN3/ZXIuY29tL2FudGlx/dWUlMjBjbG9jay5K/UEc",
            picturename: "Mantle Clock",
            picturedescription:	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos eveniet fugit laudantium, quisquam quas libero corrupti perspiciatis eos.",
            price: "$1,990",
            technology: "Rechargable Batteries",
            brand: "Gucci",
            product: "Clocks",
        },
    
        {
            id: 18,
            picture: "https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
            picturename: "Banjo Clock",
            picturedescription:	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos eveniet fugit laudantium, quisquam quas libero corrupti perspiciatis eos.",
            price: "$1,990",
            technology: "Rechargable Batteries",
            brand: "Gucci",
            product: "Clocks",
        },
    
        // Nano-Technology
        {
            id: 19,
            picture: "https://moneyinc.com/wp-content/uploads/2016/04/Seiko-Astron-Solar-GPS-Chronograph-750x406.jpg",
            picturename: "Seiko Astron Solar GPS Chronograph",
            picturedescription:	"Priced at $1900, this is an expensive watch, no doubt, but the Astron line has long been synonymous with both quality and the latest in technological advances. This latest Astron is no exception.",
            price: "$30,990",
            technology: "LED",
            brand: "G-shock",
            product: "Vintage",
        },
        {
            id: 20,
            picture: "https://moneyinc.com/wp-content/uploads/2016/04/Polar-RS-800-CX.jpg",
            picturename: "Polar RS 800 CX",
            picturedescription:	"Finally, here’s an ultra high tech watch for those who lead an active life. If you play multiple sports, you’ll be thrilled by the capabilities of this magnificent watch. Packed with more than 80 features, it can measure ambient temperature, monitor your heart rate, your cadence, the average length of your running stride",
            price: "$10,990",
            technology: "LED",
            brand: "Gucci",
            product: "Fashion Watches",
        },
        {
            id: 21,
            picture: "https://www.watchtime.com/wp-content/uploads/2016/11/Richard_Mille_RM50-02_1000-570x764.jpg",
            picturename: "Richard Mille RM50",
            picturedescription:	"Richard Mille collaborated with Airbus Corporate Jets, which builds luxurious aircraft, to design a technical miracle with an extremely modern-styled tourbillon at 6 o’clock. The split-seconds chronograph for measuring lap times",
            price: "$10,990",
            technology: "LCD",
            brand: "Gucci",
            product: "Casual Watches",
        },
        {
            id: 22,
            picture: "https://www.watchtime.com/wp-content/uploads/2015/11/AUdemars_Piguet_ROO_Concept_Supersonnerie_1000-570x428.jpg",
            picturename: "AUdemars Piguet ROO Concept Supersonnerie",
            picturedescription:	"A tourbillon provides additional visual appeal in the open styling of this newest technological tour de force from Audemars Piguet. This timepiece also offers a delightful audible treat in the form of the clearest and loudest minute repeater in the entire watchmaking industry.",
            price: "$10,990",
            technology: "LCD",
            brand: "Gucci",
            product: "Luxury",
        },
        {
            id: 23,
            picture: "https://www.watchtime.com/wp-content/uploads/2016/03/EN_EN_Grand-Deck-Marine-Tourbilon_Photos-Grand-Deck_JPEG_Grand-Deck_1-copie-570x713.jpg",
            picturename: "Grand Deck Marine Tourbilon",
            picturedescription:	"The tourbillon is the sole classically designed component here. The highly unconventional time display consists of a jumping hour with two separate disks and a minutes hand pulled across a linear scale by slender cables.",
                price: "$10,990",
          technology: "Microprocessors",
          brand: "Gucci",
          product: "Vintage",
        },
    ]

    $scope.filterByCategory = function(type){
        $scope.productCategory = {technology: type}
        $scope.techname = type
    }
    $scope.filterByClocks = function(type){
        $scope.productCategory = {technology: type}
        $scope.name = type
    }
    $scope.viewAllWatches = function(){
        $scope.productCategory = ''
        $scope.techname = 'All'
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
