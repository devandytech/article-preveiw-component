document.addEventListener('DOMContentLoaded', () => {
  // ==== GLOBAL VARIABLES ===
  /* counter variable is been used for the condition of the if..else conditional statement to make toggling between the share button possible, the other two (elDiv and elText) where made global to make it accessible for both condition as you will see in the code */
  let counter = 1;
  let elDiv;
  let elText;
  
  // ==== ELEMENT OBJECT VARIABLES ==== 
  const activeEl = document.querySelector('.active-state');
  const childWrapper = document.querySelector('.child-wrapper')
  const shareBtn = document.querySelector('.share-icon');
  const profileImg = document.getElementById('second-img');
  const childDiv = document.querySelector('.child-div')
  
  shareBtn.addEventListener('click', activeState);
  
  function activeState() {
    /* activeEl was made independent to make it have effect regardless of the counter */
    activeEl.classList.add('active');
    if (counter > 0) {
      profileImg.classList.add('removeElement');
      childDiv.classList.add('removeElement');
      childWrapper.classList.add('pseudo-style-align');
      
      elDiv = document.createElement('div');
      elDiv.classList.add('el-icon-container');
      childWrapper.appendChild(elDiv);
      
      let fbIcon = document.createElement('i');
      fbIcon.classList.add('fb-icon');
      elDiv.appendChild(fbIcon);
      
      let twitterIcon = document.createElement('i');
      twitterIcon.classList.add('twitter-icon');
      elDiv.appendChild(twitterIcon);
      
      let pinterestIcon = document.createElement('i');
      pinterestIcon.classList.add('pinterest-icon');
      elDiv.appendChild(pinterestIcon);
      
      elText = document.createElement('p');
      elText.textContent = 'Share';
      elText.classList.add('new-text');
      childWrapper.appendChild(elText);
      
      // decrement counter to make else condition execute 
      counter--;
    } else {
      activeEl.classList.remove('active');
      childWrapper.classList.remove('pseudo-style-align');
      profileImg.classList.remove('removeElement');
      childDiv.classList.remove('removeElement');
      
      // Text and div for the icons removed
      elText.classList.add('removeElement');
      elDiv.classList.remove('el-icon-container')
      elDiv.classList.add('removeElement');
      
      // increment counter to make  condition execute 
      counter++;
    }
  }
  
  shareBtn.addEventListener('click', desktopActiveState);
  
  function desktopActiveState() {
    shareBtn.classList.remove('share-icon');
    shareBtn.classList.add('desktop-share-icon');
    console.log('working')
  }
})
