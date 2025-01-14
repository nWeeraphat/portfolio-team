const contact = `
<section class="p-8 bg-gray-100">
  <h2 class="text-xl font-bold mb-4">Contact Me</h2> 
  <form> 
    <div class="mb-4">
      <label for="name" class="block mb-2">Name:</label> 
      <input type="text" id="name" className="border p-2 w-full" /> 
    </div>
    <div class="mb-4">
      <label for="email" class="block mb-2">Email:</label> 
      <input type="email" id="email" className="border p-2 w-full" /> 
    </div>
    <div class="mb-4">
      <label for="message" class="block mb-2">Message:</label> 
      <textarea id="message" className="border p-2 w-full"></textarea> 
    </div>
    <button type="submit" class="bg-blue-500 text-white p-2 px-4 rounded hover:bg-blue-600"> 
      Send
    </button>
  </form>
</section>
`;

ReactDOM.render( 
  <div dangerouslySetInnerHTML={{ __html: contact }} />,
  document.getElementById('contact')
);