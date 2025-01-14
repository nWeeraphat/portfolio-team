const navbar = `
<nav class="bg-white p-4 shadow-md">  
  <div class="container mx-auto flex justify-between items-center">  
    <a href="#" class="logo">  
      <img src="images/logofinal.jpg " alt="Logo">  </a>  
    <ul class="flex space-x-4">  
      <li><a href="#hero" class="hover:text-blue-500">Home</a></li>  
      <li><a href="#about" class="hover:text-blue-500">About</a></li>  
      <li><a href="#projects" class="hover:text-blue-500">Projects</a></li>  
      <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>  
    </ul>  
  </div>  
</nav> 
`;

document.getElementById('navbar').innerHTML = navbar;