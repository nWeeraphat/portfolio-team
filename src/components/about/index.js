const about = `
<section class="p-8 bg-white">
  <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">About Us</h2> 

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    <div class="about-member">
      <img 
        src="images/people-1.jpg" 
        alt="Profile" 
        class="rounded-full w-full h-auto max-w-xs mx-auto mb-4 border-4 border-white shadow-lg" 
      />
      <h3 class="font-bold mb-2 text-center text-blue-500 text-lg">นางสาวอรอุมา อดิษะ</h3>
      <p class="text-gray-700 text-base pl-8">
        <span class="font-bold">อายุ:</span> 19 <br>
        <span class="font-bold">เบอร์โทรศัพท์:</span> 088-888-8888 <br>
        <span class="font-bold">อีเมลล์:</span> 66160034@go.buu.ac.th <br>
        <span class="font-bold">ประวัติการศึกษา:</span><br>
        - ระดับมหาวิทยาลัย  มหาวิทลัยบูรพา <br>
        <span class="font-bold">ประสบการณ์การทำงาน:</span><br>
        - สร้างโปรเจค การสร้างระบบฐานข้อมูล <br>
      </p>
    </div>

    <div class="about-member">
      <img 
        src="images/people-2.jpg" 
        alt="Profile" 
        class="rounded-full w-full h-auto max-w-xs mx-auto mb-4 border-4 border-white shadow-lg" 
      />
      <h3 class="font-bold mb-2 text-center text-blue-500 text-lg">นายชนันธร พุ่มพวง</h3>
      <p class="text-gray-700 text-sm leading-relaxed">
        <span class="font-bold">อายุ:</span> 19 <br>
        <span class="font-bold">เบอร์โทรศัพท์:</span> 098-834-5282 <br>
        <span class="font-bold">อีเมลล์:</span> 66160118@go.buu.ac.th <br>
        <span class="font-bold">ประวัติการศึกษา:</span><br>
        - ระดับมหาวิทยาลัย  มหาวิทลัยบูรพา <br>
        <span class="font-bold">ประสบการณ์การทำงาน:</span><br>
        - สร้างโปรเจค การสร้างระบบฐานข้อมูล <br> 
      </p>
    </div>

    <div class="about-member">
      <img 
        src="images/people-3.jpg"   
        alt="Profile" 
        class="rounded-full w-full h-auto max-w-xs mx-auto mb-4 border-4 border-white shadow-lg" 
      />
      <h3 class="font-bold mb-2 text-center text-blue-500 text-lg">นางสาววิรากานต์ งามขำ</h3>
      <p class="text-gray-700 text-base">
        <span class="font-bold">อายุ:</span> 19 <br>
        <span class="font-bold">เบอร์โทรศัพท์:</span> 099-1875655 <br>
        <span class="font-bold">อีเมลล์:</span> 66160118@go.buu.ac.th <br>
        <span class="font-bold">ประวัติการศึกษา:</span><br>
        - ระดับมหาวิทยาลัย  มหาวิทลัยบูรพา <br>
        <span class="font-bold">ประสบการณ์การทำงาน:</span><br>
        - สร้างโปรเจค การสร้างระบบฐานข้อมูล <br> 
      </p>
    </div>

    <div class="about-member">
      <img 
        src="images/people-4.jpg"   
        alt="Profile" 
        class="rounded-full w-full h-auto max-w-xs mx-auto mb-4 border-4 border-white shadow-lg" 
      />
      <h3 class="font-bold mb-2 text-center text-blue-500 text-lg">นายวีรภัทร์ ทัพเจริญ</h3>
      <p class="text-gray-700 text-base">
        <span class="font-bold">อายุ:</span> 20 <br>
        <span class="font-bold">เบอร์โทรศัพท์:</span> 092-238-4396 <br>
        <span class="font-bold">อีเมลล์:</span> 66160118@go.buu.ac.th <br>
        <span class="font-bold">ประวัติการศึกษา:</span><br>
        - ระดับมหาวิทยาลัย  มหาวิทลัยบูรพา <br>
        <span class="font-bold">ประสบการณ์การทำงาน:</span><br>
        - สร้างโปรเจค การสร้างระบบฐานข้อมูล <br> 
      </p>
    </div>

  </div>
</section>
`;

document.getElementById('about').innerHTML = about;