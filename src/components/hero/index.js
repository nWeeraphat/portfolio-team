const hero = `
<section class="bg-gray-200 p-8 text-center relative"> 
  <img 
    src="images/home.jpg"
    alt="Profile" 
    class="w-full h-full object-cover absolute top-0 left-0"
  />
  <div class="relative z-10"> 
    <h1 class="text-3xl font-bold mb-2">Foliospace</h1> 
    <p class="text-gray-700 text-lg">Welcome to the team's portfolio website</p> 
    <div class="flex justify-center space-x-4 mt-6"> 
      <a href="https://github.com/nWeeraphat/portfolio-team.git" class="text-blue-500 hover:underline">GitHub</a>
    </div>
  </div>
</section>
`;

document.getElementById('hero').innerHTML = hero;