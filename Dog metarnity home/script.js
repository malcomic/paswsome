const observer=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
      }else{
        entry.target.classList.remove('visible');
      }
    })
  })
  const hiddenElements=document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=>observer.observe(el));
  