describe('Routes test', function() {
  beforeEach(module('Andejobs'));
    
    var $location, $route, $rootScope;
        
    beforeEach(inject(function(_$location_, _$route_, _$rootScope_){
        $location = _$location_;
        $route = _$route_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('views/home.html').respond(200, 'main HTML');
    }));

    it('should load the home page on successful load of '/'', function(){
      expect($location.path()).toBe('');
      $location.path('/');
      $rootScope.$digest();
      expect($location.path()).toBe('/');
      expect($route.current.controller).toBe('HomeCtrl');
    });

//        beforeEach(inject(function($httpBackend){
//         $httpBackend.expectGET('views/index.html').respond(200, 'main HTML');
//     }));
//         it('should load the index page on successful load of /', function(){
//         expect($location.path()).toBe('');
//         $location.path('/');
//         $rootScope.$digest();
//         expect($location.path()).toBe( '/' );
//         expect($route.current.controller).toBe('HomeController');
//     });

//         it('should redirect to the index path on non-existent route', function(){
//         expect($location.path()).toBe('');

//         $location.path('/a/non-existent/route');

//         $rootScope.$digest();

//         expect($location.path()).toBe( '/' );
//         expect($route.current.controller).toBe('AndejobsCtrl');
//     });
// });

