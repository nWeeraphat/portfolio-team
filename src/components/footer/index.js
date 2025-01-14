function createFooter() {
  const footer = document.createElement('footer');
  footer.style.backgroundColor = '#262626'; 
  footer.style.color = '#fff';
  footer.style.padding = '20px 0';

  const container = document.createElement('div');
  container.style.maxWidth = '1200px';
  container.style.margin = '0 auto';
  container.style.display = 'flex';
  container.style.justifyContent = 'space-between';
  footer.appendChild(container);

  const contactDiv = document.createElement('div');
  contactDiv.style.flex = '1';
  contactDiv.style.padding = '0 10px';

  const contactTitle = document.createElement('h5');
  contactTitle.textContent = 'ข้อมูลติดต่อ';
  contactDiv.appendChild(contactTitle);

  const contactInfo = [
    'ที่อยู่: 123 หมู่ 1 ต.แสนสุข อ.เมือง จ.ชลบุรี',
    'โทร: 098-234-5678',
    'อีเมล: Foliospace@gmail.com',
  ];

  contactInfo.forEach((info) => {
    const p = document.createElement('p');
    p.textContent = info;
    contactDiv.appendChild(p);
  });

  container.appendChild(contactDiv);

  const linksDiv = document.createElement('div');
  linksDiv.style.flex = '1';
  linksDiv.style.padding = '0 10px';

  const linksTitle = document.createElement('h5');
  linksTitle.textContent = 'ลิงก์ที่สำคัญ';
  linksDiv.appendChild(linksTitle);

 const importantLinks = [
    { text: 'Home', href: '/hero' },
    { text: 'About', href: '/about' }, 
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' }, 
  ];

  importantLinks.forEach((link) => {
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.style.color = '#fff';
    a.style.textDecoration = 'none';
    p.appendChild(a);
    linksDiv.appendChild(p);
  });

  container.appendChild(linksDiv);

  const socialDiv = document.createElement('div');
  socialDiv.style.flex = '1';
  socialDiv.style.textAlign = 'center';
  socialDiv.style.padding = '0 10px';

  const socialTitle = document.createElement('h5');
  socialTitle.textContent = 'ติดตามเรา';
  socialDiv.appendChild(socialTitle);

  const socialLinks = [
    { href: 'https://facebook.com', iconClass: 'fab fa-facebook' },
    { href: 'https://instagram.com', iconClass: 'fab fa-instagram' },
  ];

  socialLinks.forEach((social) => {
    const a = document.createElement('a');
    a.href = social.href;
    a.style.color = '#fff';
    a.style.margin = '0 10px';

    const i = document.createElement('i');
    i.className = social.iconClass;
    a.appendChild(i);

    socialDiv.appendChild(a);
  });

  container.appendChild(socialDiv);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.style.textAlign = 'center';
  copyrightDiv.style.marginTop = '20px';
  copyrightDiv.textContent = '© 2024 Foliospace  | All Rights Reserved';
  footer.appendChild(copyrightDiv);

  return footer;
}

function addFontAwesome() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
  document.head.appendChild(link);
}

addFontAwesome();
document.body.appendChild(createFooter());