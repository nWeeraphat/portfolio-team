const projects = `
<section class="p-8 bg-white">
  <h2 class="text-xl font-bold mb-4 text-center">Projects</h2> 
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
    <div class="card"> 
      <img src="images/Project-1.jpg" alt="Project 1" class="card-img-top" /> 
      <div class="card-body">
        <h3 class="card-title font-bold">Project Scratch</h3> 
        <p class="card-text">Project Scratch เกี่ยวกับร้านอาหาร ออกแบบให้ลูกค้าสั่งอาหารและเครื่องดื่มออนไลน์ได้สะดวก พร้อมช่วยร้านจัดการเมนูและคำสั่งซื้ออย่างมีประสิทธิภาพ</p>
      </div>
    </div>
    <div class="card">
      <img src="images/Project-2.jpg" alt="Project 2" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title font-bold">Project Database</h3> 
        <p class="card-text">เว็บไซต์ระบบจัดการโครงการก่อสร้างช่วยให้โครงการก่อสร้างดำเนินไปอย่างราบรื่น  เสร็จทันเวลา  อยู่ในงบประมาณ  และมีคุณภาพตามที่กำหนด</p>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('projects').innerHTML = projects;