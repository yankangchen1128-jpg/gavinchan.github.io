const dialog=document.querySelector('#project-dialog');
let projectData;
const dataPromise=Promise.resolve([{"title": "The Birth of a Toothbrush", "kind": "Brand Film", "images": ["../assets/p5-1-v2.jpg", "../assets/p6-1-v2.jpg", "../assets/p6-3-v2.jpg", "../assets/p7-1-v2.jpg", "../assets/p7-3-v2.jpg", "../assets/toothbrush-birth-6.jpg", "../assets/toothbrush-birth-7.jpg"]}, {"title": "MOMCOZY", "kind": "Product Film", "images": ["../assets/p9-1-v2.jpg", "../assets/p10-1-v2.jpg", "../assets/p10-3-v2.jpg", "../assets/p10-5-v2.jpg", "../assets/p10-7-v2.jpg", "../assets/p10-9-v2.jpg", "../assets/p11-1-v2.jpg", "../assets/p11-3-v2.jpg"]}, {"title": "SMARTSONIC+ Professional Dental Cleaning", "kind": "Product Film", "images": ["../assets/smartsonic-1.jpg", "../assets/smartsonic-2.jpg", "../assets/smartsonic-3.jpg", "../assets/smartsonic-4.jpg", "../assets/smartsonic-5.jpg", "../assets/smartsonic-bright.jpg"]}, {"title": "Chasing Love", "kind": "Brand Film", "images": ["../assets/love-1.jpg", "../assets/love-2.jpg", "../assets/love-3.jpg", "../assets/love-4.jpg", "../assets/love-5.jpg", "../assets/love-6.jpg", "../assets/p15-3-v2.jpg"]}, {"title": "Daydream", "kind": "Brand Film", "images": ["../assets/p17-1-v2.jpg", "../assets/p18-1-v2.jpg", "../assets/p18-3-v2.jpg", "../assets/p19-1-v2.jpg", "../assets/p19-3-v2.jpg", "../assets/p19-5-v2.jpg"]}, {"title": "Dental Laboratory", "kind": "Product Film", "images": ["../assets/p20-1-v2.jpg", "../assets/p20-4-v2.jpg", "../assets/p20-6-v2.jpg", "../assets/p20-8-v2.jpg", "../assets/dental-1.jpg"]}, {"title": "Dreame N10 Upholstery Cleaner", "kind": "Product Film", "images": ["../assets/dreame-cover.jpg", "../assets/p21-3-v2.jpg", "../assets/p21-5-v2.jpg", "../assets/p21-7-v2.jpg", "../assets/p21-9-v2.jpg", "../assets/dreame-1.jpg"]}, {"title": "UGREEN 2200W Power Station", "kind": "Product Film", "images": ["../assets/p22-1-v2.jpg", "../assets/p23-1-v2.jpg", "../assets/p23-3-v2.jpg", "../assets/ugreen-1.jpg", "../assets/ugreen-2.jpg", "../assets/ugreen-3.jpg", "../assets/ugreen-4.jpg", "../assets/ugreen-5.jpg", "../assets/ugreen-6.jpg", "../assets/ugreen-7.jpg"]}, {"title": "ENGWE Electric Bike", "kind": "Product Film", "images": ["../assets/engwe-1.jpg", "../assets/engwe-2.jpg", "../assets/engwe-3.jpg", "../assets/engwe-4.jpg", "../assets/engwe-5.jpg", "../assets/engwe-6.jpg"]}, {"title": "Roborock S7 Robot Vacuum", "kind": "Product Film", "images": ["../assets/roborock-s7-1.jpg"]}]);
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',async()=>{
 try {
 projectData=await dataPromise;const index=Number(button.dataset.project);const project=projectData[index];
 document.querySelector('#dialog-title').textContent=project.title;
 document.querySelector('#dialog-meta').textContent=`${String(index+1).padStart(2,"0")} / ${project.kind}`;
 const gallery=document.querySelector('#gallery');gallery.replaceChildren();
 project.images.forEach((src,i)=>{const image=document.createElement('img');image.src=src;image.alt=`${project.title} · Frame ${i+1}`;image.className='gallery-image';image.loading=i?'lazy':'eager';gallery.append(image)});
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
 }catch(error){alert('Unable to load this project. Please refresh and try again.')}
}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});

const participatedProjects = [{"title": "Roborock DYAD — Stop Motion", "images": ["../assets/dyad-1.jpg", "../assets/dyad-2.jpg", "../assets/dyad-3.jpg", "../assets/dyad-4.jpg", "../assets/dyad-5.jpg", "../assets/dyad-6.jpg"]}, {"title": "SMARTSONIC+ Mirror Finish Toothbrush", "images": ["../assets/smartsonic-mirror-1.jpg", "../assets/smartsonic-mirror-2.jpg", "../assets/smartsonic-mirror-3.jpg", "../assets/smartsonic-mirror-4.jpg", "../assets/smartsonic-mirror-5.jpg", "../assets/smartsonic-mirror-6.jpg"]}, {"title": "SMARTSONIC+ Kids Toothbrush", "images": ["../assets/smartsonic-kids-1.jpg", "../assets/smartsonic-kids-3.jpg", "../assets/smartsonic-kids-4.jpg", "../assets/smartsonic-kids-5.jpg", "../assets/smartsonic-kids-6.jpg", "../assets/smartsonic-kids-2.jpg"]}, {"title": "Alpecin Shampoo", "images": ["../assets/alpecin-1.jpg", "../assets/alpecin-2.jpg", "../assets/alpecin-3.jpg", "../assets/alpecin-4.jpg"]}];
document.querySelectorAll('[data-participated]').forEach(button => {
 button.addEventListener('click', () => {
  const project = participatedProjects[Number(button.dataset.participated)];
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-meta').textContent = 'Collaborations';
  const gallery = document.querySelector('#gallery');
  gallery.replaceChildren();
  project.images.forEach((src, i) => {
   const image = document.createElement('img');
   image.src = src;
   image.alt = `${project.title} · Frame ${i + 1}`;
   image.className = 'gallery-image';
   image.loading = i ? 'lazy' : 'eager';
   gallery.append(image);
  });
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
 });
});
