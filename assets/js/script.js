document.addEventListener('DOMContentLoaded', () => {
  // ==== GLOBAL VARIABLES ===
  /* counter variable is been used for the condition of the if..else conditional statement to make toggling between the share button possible, the other two (elDiv and elText) where made global to make it accessible for both condition as you will see in the code */
  let counter = 1;
  let elDiv;
  let elText;
  
  let p = document.querySelector('.description');
  
  // ==== ELEMENT OBJECT VARIABLES ==== 
  const activeEl = document.querySelector('.active-state');
  const childWrapper = document.querySelector('.child-wrapper')
  const shareBtn = document.querySelector('.share-icon');
  const profileImg = document.getElementById('second-img');
  const childDiv = document.querySelector('.child-div')
  
  // mobile media queries
  const mobileMediaQuery = window.matchMedia('(max-width: 600px)');
  
  if (mobileMediaQuery.matches) {
    shareBtn.addEventListener('click', activeState);
    
    function activeState() {
      /* activeEl was made independent to make it have effect regardless of the counter */
      activeEl.classList.add('active');
      if (counter > 0) {
        shareBtn.classList.add('share-icon-active')
        
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
        shareBtn.classList.remove('share-icon-active');
        
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
  } else {
    shareBtn.addEventListener('click', desktopActiveState);
    
    // local global variable 
    let addedEl;
    
    function desktopActiveState() {
      if (counter > 0) {
        shareBtn.classList.add('share-icon-active-desktop');
        
        addedEl = document.createElement('div');
        //newEl.textContent = 'It working! new element applied';
        addedEl.classList.add('activeContainer');
        p.after(addedEl);
        
        let desktopShareText = document.createElement('p');
        desktopShareText.textContent = 'Share';
        desktopShareText.classList.add('share-text');
        addedEl.appendChild(desktopShareText);
        
        let desktopFbIcon = document.createElement('i');
        desktopFbIcon.classList.add('desktop-fb-icon');
        addedEl.appendChild(desktopFbIcon);
        
        let desktopTwitterIcon = document.createElement('i');
        desktopTwitterIcon.classList.add('desktop-twitter-icon');
        addedEl.appendChild(desktopTwitterIcon);
        
        let desktopPinterestIcon = document.createElement('i');
        desktopPinterestIcon.classList.add('desktop-pinterest-icon');
        addedEl.appendChild(desktopPinterestIcon);
        
        /* works same as mobile */
        counter--;
      } else {
        shareBtn.classList.remove('share-icon-active-desktop');
        /* This line removes the initial created div that holds icons and new text added, making those them inrelevant when disabled */
        addedEl.style.display = 'none';
        counter++;
      }
    }
  }
})
